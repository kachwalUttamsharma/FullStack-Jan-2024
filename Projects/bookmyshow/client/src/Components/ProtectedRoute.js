import { message } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../APICalls/user";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice";
import { HideLoading, ShowLoading } from "../redux/loadersSlice";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getPresentUser = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetCurrentUser();
      if (response.success) {
        dispatch(SetUser(response?.data));
        dispatch(HideLoading());
      } else {
        dispatch(HideLoading());
        dispatch(SetUser(null));
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      dispatch(SetUser(null));
      message.error(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("tokenForBookMyShow")) {
      getPresentUser();
    } else {
      navigate("/login");
    }
  }, []);
  return (
    user && (
      <div className="layout p-1">
        {/* Header */}
        <div className="header bg-main flex justify-between p-2">
          <div>
            <h1
              className="text-2xl text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Book My Show
            </h1>
          </div>

          <div className="bg-white p-1 flex gap-1">
            <i className="ri-shield-user-line text-primary mt-1"></i>
            <h1
              className="text-sm underline"
              onClick={() => {
                if (user.isAdmin) {
                  navigate("/admin");
                } else {
                  navigate("/profile");
                }
              }}
            >
              {user.name}
            </h1>

            <i
              className="ri-logout-box-r-line mt-1"
              onClick={() => {
                localStorage.removeItem("tokenForBookMyShow");
                navigate("/login");
              }}
            ></i>
          </div>
        </div>
        {/* children */}
        <div className="content mt-1 p-1">{children}</div>
      </div>
    )
  );
};

export default ProtectedRoute;
