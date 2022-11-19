import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import NavBar from "./NavBar/index.js";

function Layout({ children }) {
  return (
    <>
      <NavBar />

      <LeftSideBar />
      <main>{children}</main>
      <RightSideBar />
    </>
  );
}

export default Layout;
