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
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col span={6} className="gutter-row">
          <LeftSideBar />
        </Col>

        <Col span={12} className="gutter-row">
          <main>{children}</main>
        </Col>

        <Col span={6} className="gutter-row">
          <RightSideBar />
        </Col>
      </Row>
    </>
  );
}

export default Layout;
