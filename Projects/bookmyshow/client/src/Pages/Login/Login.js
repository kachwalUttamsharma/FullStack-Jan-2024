import { Form, message } from "antd";
import React from "react";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../APICalls/user";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await LoginUser(values);
      if (response.success) {
        message.success(response.message);
        // window.location.href = "/";
        localStorage.setItem("tokenForBookMyShow", response.data);
        navigate("/");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error);
    }
  };
  return (
    <div className="flex justify-center h-screen items-center bg-main">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">Welcome Again! Please login</h1>
        <hr />
        <Form layout="vertical" className="mt-1" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please Enter your Email" }]}
          >
            <input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please Enter your Password" }]}
          >
            <input type="password" />
          </Form.Item>
          <div className="flex flex-col mt-2 gap-1">
            <Button fullwidth title="Login" type="submit" />
            <Link to="/register" className="text-primary">
              Don't have an account? Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
