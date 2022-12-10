import Image from "next/image";
import React from "react";

function UserCard({
  user,
  preview = false,
  aviWidth = 40,
  aviHeight = 40,
  round,
  className = "",
}) {
  const appAvatar = "/images/avatar.png";
  const alt =
    (user.firstName && `${user.firstName}'s profile image`) || "default image";
  // console.log({aviWidth, aviHeight});

  return (
    <div
      className={`user-card ${className}`}
      style={{
        borderRadius: round && "50%",
        width: aviWidth,
        minWidth: aviWidth,
        height: aviHeight,
      }}
    >
      <Image
        src={user.profileImage ? user.profileImage : appAvatar}
        // width={250}
        // height={250}
        objectFit="cover"
        layout="fill"
        objectPosition="center"
        alt={alt}
      />
    </div>
  );
}

export default UserCard;
