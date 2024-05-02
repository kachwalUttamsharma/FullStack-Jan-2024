import React from "react";
import { Form } from "antd";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center h-screen items-center bg-main">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">
          Welcome to Book My Show! Please Register
        </h1>
        <Form layout="vertical" className="mt-1">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please Enter your Name" }]}
          >
            <input type="text" />
          </Form.Item>
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
            <Button fullwidth title="Register" type="submit" />
            <Link to="/login" className="text-primary">
              Already have an account? Login
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
