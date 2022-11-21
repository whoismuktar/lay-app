import React from "react";
import { Image } from "antd";
const appAvatar = require("../Assets/images/avatar.jpg");

function UserCard({user, preview=false, className=""}) {
  return (
    <div className={`user-card ${ className}`}>
      <Image
        src={user.profileImage ? user.profileImage : appAvatar}
        preview={preview}
        alt={`${user.firstName}'s profile image`}
      />
    </div>
  );
}

export default UserCard;
