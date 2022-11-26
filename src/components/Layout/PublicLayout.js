import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Col, Row } from "antd";
import { Outlet } from "react-router-dom";
import useCurrentRoute from "../../Hooks/useCurrentRoute";
import "../../Assets/styles/public.scss";

function AuthLayout() {
  const currentRoute = useCurrentRoute();
  const [hideFooter, setHideFooter] = useState(false);
  
  useEffect(() => {
    const hideFooterList = ["welcome"];
    if (hideFooterList.includes(currentRoute)) {
      setHideFooter(true)
    }
  }, [currentRoute, hideFooter]);

  return (
    <div className="public-view">
      <Row className="public-view__nav-bar">
        <Col span={24}>
          <NavBar />
        </Col>
      </Row>

      <Row
        className="public-view__content-wrapper"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col span={24}>
          <main>
            <Outlet />
          </main>
        </Col>
      </Row>

      {!hideFooter && (
        <Row className="public-view__footer">
          <Col span={24}>
            <Footer />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default AuthLayout;
