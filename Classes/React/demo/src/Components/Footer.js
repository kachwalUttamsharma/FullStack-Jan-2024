import React from "react";
import UserProfile from "./UserProfile";

const userInfo = {
  name: "John",
  city: "London",
  email: "john@gmail.com",
  phoneNumber: "12321345",
};
const Footer = () => {
  // const [state, func] = useState();

  return (
    <div>
      <h2>User Profile</h2>
      <UserProfile />
      <UserProfile
        Name={userInfo.name}
        City={userInfo.city}
        Email={userInfo.email}
        PhoneNumber={userInfo.phoneNumber}
      />
      <UserProfile
        Name={userInfo.name}
        City={userInfo.city}
        Email={userInfo.email}
        PhoneNumber={userInfo.phoneNumber}
      />
    </div>
  );
};

export default Footer;
