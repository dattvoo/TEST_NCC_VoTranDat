import React from "react";
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";
// import { SideBar } from "../../components/SideBar";
import "./style.css";
export const HomePage = () => {
  return (
    <div className="homepage">
      {/* <SideBar /> */}
      <div className="container">
            <Header/>
            <Content/>
      </div>

    </div>
  );
};
