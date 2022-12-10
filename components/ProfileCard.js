import React from "react";
import { Button } from "antd";
import { Filter } from "../Helper";
import { BsPatchQuestionFill } from "react-icons/bs";
import Image from "next/image";
const userAvatar = "avatar2.jpeg";

const user = {
  username: "emma",
  firstName: "Emma",
  lastName: "Mia",
  profileImage: userAvatar,
  bio: "A food enthusiast",
};

function ProfileCard({ preview = false }) {
  return (
    <div className="profile-card">
      <div className="profile-card__image">
        <Image
          src={user.profileImage ? user.profileImage : appAvatar}
          width={40}
          height={40}
          alt={`${user.firstName}'s profile image`}
        />
      </div>

      <Link to="/user/:ds/:dsd">
        <div className="profile-card__fullname">{Filter.getFullName(user)}</div>
      </Link>
      <div className="profile-card__bio">{user.bio}</div>

      <div className="profile-card__cta">
        <Button
          className="app-btn box-shadow1 align-center justify-center"
          size="large"
          block
        >
          Ask {`${user.firstName}`}
          <BsPatchQuestionFill className="btn-icon btn-icon--after" />
        </Button>
      </div>
    </div>
  );
}

export default ProfileCard;
