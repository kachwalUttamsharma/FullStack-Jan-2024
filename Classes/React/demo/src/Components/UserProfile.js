import React from "react";

const UserProfile = ({
  Name = "Sambit",
  PhoneNumber = "1234422",
  City = "Pune",
  Email = "@hotmail.com",
}) => {
  return (
    <div style={{ margin: "20px" }}>
      <div>Name: {Name}</div>
      <div>PhoneNumber: {PhoneNumber}</div>
      <div>Email: {Email}</div>
      <div>City: {City}</div>
    </div>
  );
};

export default UserProfile;
