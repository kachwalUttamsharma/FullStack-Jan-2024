import React from "react";
import PageTitle from "../../Components/PageTitle";
import { Tabs } from "antd";
import MoviesList from "./MoviesList";
import TheatreList from "./TheatreList";

const Admin = () => {
  return (
    <div>
      <PageTitle title="Admin" />
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane key="1" tab="Movies">
          <MoviesList />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="Theatre">
          <TheatreList />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Admin;
