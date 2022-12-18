import React from "react";
import AuthCard from "./AuthCard";

function Login(props) {
  return <div className="public-bg page allChildrenCenter">
    <div className="app-card box-shadow2">
      <AuthCard />
    </div>
  </div>;
}

export default Login;

export async function getServerSideProps() {
  return {
    props: { isPublicPage: true, footerBg: "#f6f2ea" }
  };
}
