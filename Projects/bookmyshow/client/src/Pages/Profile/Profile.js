import React from "react";
import PageTitle from "../../Components/PageTitle";
import TheatreList from "./TheatreList";
import { Tabs } from "antd";
import Bookings from "./Booking";

const Profile = () => {
  return (
    <div>
      <PageTitle title="Profile" />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Bookings" key="1">
          <Bookings />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Apply for Theater" key="2">
          <TheatreList />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Profile;
