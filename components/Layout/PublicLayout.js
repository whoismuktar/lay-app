import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Col, Row } from "antd";
// import useCurrentRoute from "../../Hooks/useCurrentRoute";
import styles from "../../styles/public.module.scss";
import { useRouter } from "next/router";

function AuthLayout(props) {
  const currentRoute = "";
  const [hideFooter, setHideFooter] = useState(false);

  const router = useRouter()
  console.log({props, router});
  
  useEffect(() => {
    const hideFooterList = [];
    // const hideFooterList = ["welcome"];

    if (hideFooterList.includes(currentRoute)) {
      setHideFooter(true)
    }
  }, [currentRoute, hideFooter]);

  return (
    <div className={styles["public-view"]}>
      <Row className={styles["public-view__nav-bar"]}>
        <Col span={24}>
          <NavBar />
        </Col>
      </Row>

      <Row
        className={styles["public-view__content-wrapper"]}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col span={24} className="">
          <main>
            {props.children}
          </main>
        </Col>
      </Row>

      {!hideFooter && (
        <Row className={styles["public-view__footer"]}>
          <Col span={24}>
            <Footer footerBg={props.footerBg} />
          </Col>
        </Row>
      )}
    </div>
  );
}

export default AuthLayout;
