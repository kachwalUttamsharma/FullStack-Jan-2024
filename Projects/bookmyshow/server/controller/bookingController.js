const bookingModel = require("../model/bookingModel");
const showModel = require("../model/showModel");
const stripe = require("stripe")(process.env.StripeSecretKey);

const makePayment = async (req, res) => {
  try {
    const { token, amount } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const charge = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      customer: customer.id,
      receipt_email: token.email,
      description: "Ticket Booked for movie",
      "automatic_payment_methods[enabled]": true,
    });
    const transactionId = charge.id;
    res.send({
      success: true,
      message: "Payment Successfull",
      data: transactionId,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const bookAShow = async (req, res) => {
  try {
    // save booking
    const newBooking = new bookingModel(req.body);
    await newBooking.save();
    const show = await showModel.findById(req.body.show);
    // update seats
    await showModel.findByIdAndUpdate(req.body.show, {
      bookedSeats: [...show.bookedSeats, ...req.body.seats],
    });
    res.send({
      success: true,
      message: "Show booked successfully",
      data: newBooking,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getBooking = async (req, res) => {
  try {
    const bookings = await bookingModel
      .find({ user: req.body.userId })
      .populate("show")
      .populate({
        path: "show",
        populate: {
          path: "movie",
          model: "movies",
        },
      })
      .populate("user")
      .populate({
        path: "show",
        populate: {
          path: "theatre",
          model: "theatre",
        },
      });

    res.send({
      success: true,
      message: "Bookings fetched successfully",
      data: bookings,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  makePayment,
  bookAShow,
  getBooking,
};
