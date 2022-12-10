import { Button } from "antd";
import React from "react";
import { BiBell } from "react-icons/bi";
import { Filter } from "../Helper";

function SubscribeCard({ user }) {
  return (
    <div className="subscribe-card allChildrenCenter">
      <BiBell className="subscribe-card__icon" />
      <div className="
      subscribe-card__intro">Stay up to date</div>
      <div className="subscribe-card__note">
        Subscribe to get the latest from{" "}
        <strong>{Filter.getFullName(user)}</strong>
      </div>

      <Button className="app-btn subscribe-card__btn" size="large">Subscribe</Button>
    </div>
  );
}

export default SubscribeCard;
