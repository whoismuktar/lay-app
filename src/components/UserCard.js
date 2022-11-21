import React from "react";
import { Image } from "antd";
const appAvatar = require("../Assets/images/avatar.jpg");

function UserCard({user}) {
  return (
    <div className="user-card">
      <Image
        width={40}
        height={40}
        src={user.profileImage ? user.profileImage : appAvatar}
        alt={`${user.firstName}'s profile image`}
      />
    </div>
  );
}

export default UserCard;
