import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import NavBar from "./NavBar/index.js";
import { Col, Row } from "antd";
import useScreen from "../../Hooks/useScreen";


function AuthLayout({ children }) {
  const screens = useScreen()

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
        <Col xl={6} xs={0} className="">
        {/* <Col sm={screens.smOnly && 4} md={screens.mdAndAbove && 6} className=""> */}
          <LeftSideBar collapsed />
        </Col>

        <Col xl={12} xs={18} className="">
          <main>
            {/* <Outlet /> */}
            {children}
          </main>
        </Col>

        <Col xl={6} sm={6} xs={0} className="">
          <RightSideBar />
        </Col>
      </Row>
    </>
  );
}

export default AuthLayout;
