import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import NavBar from "./NavBar/index.js";
import { Col, Row } from "antd";


function Layout({ children }) {
  return (
    <>
      <Row>
        <Col span={24}>
          <NavBar />
        </Col>
      </Row>

      <Row
        className="app-wrapper"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col span={5} className="">
          <LeftSideBar />
        </Col>

        <Col span={13} className="">
          <main>{children}</main>
        </Col>

        <Col span={6} className="">
          <RightSideBar />
        </Col>
      </Row>
    </>
  );
}

export default Layout;
