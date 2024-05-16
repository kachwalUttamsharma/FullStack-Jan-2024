import { message } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetShowById } from "../../APICalls/theatre";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import StripeCheckout from "react-stripe-checkout";
import Button from "../../Components/Button";
import { MakePayment, BookShowTickets } from "../../APICalls/booking";

function BookShow() {
  const { user } = useSelector((state) => state.users);
  const [show, setShow] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetShowById({
        showId: params.id,
      });
      if (response.success) {
        setShow(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const getSeats = () => {
    const columns = 12;
    const totalSeats = show.totalSeats; // 120
    const rows = Math.ceil(totalSeats / columns); // 10

    // for(let i=0; i<10; i++) { for(let j=0; j<12; j++) {}}
    return (
      <div>
        <p>Screen This Side</p>
        <hr />
        <div className="flex gap-1 flex-col p-2 card">
          <hr />
          {/* iteration on rows */}
          {/* [0,1,2,3,4,5,6,7,8,9].map()  <- new Array(rows).keys -> indexs */}
          {Array.from(Array(rows).keys()).map((row) => {
            return (
              <div className="flex gap-1 justify-center">
                {/* iteration on each column */}
                {Array.from(Array(columns).keys()).map((column) => {
                  const seatNumber = row * columns + column + 1;
                  // row = 0, column = 0, -> 0*12 + 0 + 1 -> 1
                  // row = 0, column = 0, -> 0*12 + 1 + 1 -> 2
                  // row = 0, column = 0, -> 0*12 + 2 + 1 -> 3
                  // row = 1 , seat = 1*12 + 0 + 1 -> 1
                  let seatClass = "seat";
                  if (selectedSeats.includes(row * columns + column + 1)) {
                    seatClass = seatClass + " selected-seat";
                  }

                  if (show.bookedSeats.includes(row * columns + column + 1)) {
                    seatClass = seatClass + " booked-seat";
                  }

                  return (
                    row * columns + column + 1 <= totalSeats && (
                      <div
                        className={seatClass}
                        onClick={() => {
                          if (selectedSeats.includes(seatNumber)) {
                            setSelectedSeats(
                              selectedSeats.filter(
                                (item) => item !== seatNumber
                              )
                            );
                          } else {
                            setSelectedSeats([...selectedSeats, seatNumber]);
                          }
                        }}
                      >
                        <h1 className="text-sm">
                          {row * columns + column + 1}
                        </h1>
                      </div>
                    )
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const book = async (transactionId) => {
    try {
      dispatch(ShowLoading());
      const response = await BookShowTickets({
        show: params.id,
        seats: selectedSeats,
        transactionId,
        user: user._id,
      });
      if (response.success) {
        message.success(response.message);
        navigate("/profile");
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  const onToken = async (token) => {
    try {
      dispatch(ShowLoading());
      const response = await MakePayment(
        token,
        selectedSeats.length * show.ticketPrice * 100
      );
      if (response.success) {
        message.success(response.message);
        book(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    show && (
      <div>
        {/* Header */}
        <div className="flex justify-between card p-2 items-center">
          <div>
            <h1 className="text-sm">{show.theatre.name}</h1>
            <h1 className="text-sm">{show.theatre.address}</h1>
          </div>

          <div>
            <h1 className="text-2xl uppercase">
              {show.movie.title} ({show.movie.language})
            </h1>
          </div>

          <div>
            <h1 className="text-sm">
              {moment(show.date).format("MMM Do yyyy")} -{" "}
              {moment(show.time, "HH:mm").format("hh:mm A")}
            </h1>
          </div>
        </div>

        {/* seats */}

        <div className="flex justify-center mt-2">{getSeats()}</div>

        {selectedSeats.length > 0 && (
          <div className="mt-2 flex justify-center gap-2 items-center flex-col">
            <div className="flex justify-center">
              <div className="flex uppercase card p-2 gap-3">
                <h1 className="text-sm">
                  <b>Selected Seats</b> : {selectedSeats.join(" , ")}
                </h1>

                <h1 className="text-sm">
                  <b>Total Price</b> : {selectedSeats.length * show.ticketPrice}
                </h1>
              </div>
            </div>
            <StripeCheckout
              token={onToken}
              amount={selectedSeats.length * show.ticketPrice * 100}
              billingAddress
              stripeKey="pk_test_51O5zcBSBDTkZoZSYftSBhkGU3kkrJyxEK67btqrZda4jmfPvuYoKH18y2RmTHASHatLZjxUbdiHFP3X1ZmvH0ntc005kkRsZFb"
            >
              <Button title="Book Now" />
            </StripeCheckout>
          </div>
        )}
      </div>
    )
  );
}

export default BookShow;
