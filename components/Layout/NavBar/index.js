import { Button, Col, Input, Row } from "antd";
import React from "react";
import { GrNotification } from "react-icons/gr";
import { Filter } from "../../../Helper";
import UserCard from "../../UserCard";
import styles from "../../../styles/nav-bar.module.scss"
// import logo from "../../../Assets/images/logo.svg"

const isAuthenticated = !true

const NavBar = () => {
  return (<div className={`nav-bar ${styles["nav-bar"]}`}>
    <div className={styles["nav-bar__wrapper"]}>
      {!isAuthenticated && <Row
        align="middle"
        justify="space-between"
        className="width100"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="">
          <h2>Home</h2>
        </Col>

        <Col className="">
          <div className="align-center justify-center">
            <Button className="app-btn" size="large">Join Community</Button>
          </div>
        </Col>
      </Row>}

      {isAuthenticated && <Row
        align="middle"
        justify="center"
        className="width100"
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col span={6} className="">
          <h2>The Lay App</h2>
        </Col>

        <Col span={12} className="">
          <div className={styles["nav-bar__searchWrapper"]}>
            <Input placeholder="Search anything..." className={styles["nav-bar__searchInput"]} />
          </div>
        </Col>

        <Col span={6} className="">
          <div className="align-center justify-center">
            <span className={styles.icon__wrapper}>
              <GrNotification className={styles["nav-bar__icon"]} />
              <span className="notifier"></span>
            </span>
            <UserCard aviWidth={30} aviHeight={30} user={Filter.currentUser} />
          </div>
        </Col>
      </Row>}
    </div>
  </div>);
};

export default NavBar;
