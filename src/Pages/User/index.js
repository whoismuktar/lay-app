import React from "react";
import UserCard from "../../components/UserCard";
import "../../Assets/styles/user-profile.scss";
import { Filter } from "../../Helper";
import { ImLocation } from "react-icons/im";
import { BsPatchQuestion, BsStackOverflow, BsTwitter } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { GiWhirlwind } from "react-icons/gi";
import { Tabs } from "antd";
import { useState } from "react";
import { BiBell } from "react-icons/bi";
import QuestionList from "../../components/QuestionList";
import SubscribeCard from "../../components/SubscribeCard";
import { FaFacebook, FaFacebookF, FaQuora } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const user = {
  username: "emma",
  firstName: "Emma",
  lastName: "Mia",
  profileImage: require("../../Assets/images/avatar2.jpeg"),
  bio: "A food enthusiast",
  location: "Lagos, Nigeria",
  about:
    "I'm Emma and I am an experienced content writer and digital marketing expert with a decade-plus experience of working in startups. I enjoy making music and Graphic Design. Which are my favorite ways to make a difference in the world.",
  awards: [
    {
      id: "trendStar",
      name: "Trend Star",
      icon: <HiOutlineHashtag />,
    },
    {
      id: "questionnaire",
      name: "Questionnaire",
      icon: <BsPatchQuestion />,
    },
    {
      id: "theComeBack",
      name: "The Come Back",
      icon: <GiWhirlwind />,
    },
  ],
};

function UserProfile(props) {
  const [key, setKey] = useState(1)
  // let key = "1"

  const currentUser = {username: "nobody"}
  const isOwnProfile = user.username === currentUser.username

  const allAnswers = {
    key: "1",
    label: "All Answers",
    children: <QuestionList answerCardMode />
  }

  const allQuestions = {
    key: "2",
    // key: ()=> {setKey(2); return key},
    label: "All Questions",
    children: <QuestionList />
  }

  const Activity = {
    // key: ()=> {setKey(3); return key},
    key: "3",
    label: "Activity",
    children: <div style={{textAlign: "center"}}>Coming Soon</div>
  }

  const Bookmarks = {
    // key: ()=> {setKey(3); return key},
    key: "4",
    label: "Bookmarks",
    children: <QuestionList />
  }

  const Subscribe = {
    key: "5",
    // key: ()=> {setKey(4); return key},
    label: <div className="align-center">Subscribe <BiBell style={{fontSize: 15}} /></div> ,
    children: <SubscribeCard user={user} />,
  }
  const userContent = [allAnswers, allQuestions, Activity, !isOwnProfile && Bookmarks, !isOwnProfile && Subscribe]
  
  return (
    <div className="page user-profile">
      <div className="dflex user-profile__top-card">
        <UserCard user={user} />

        <div className="user-profile__details">
          <div className="user-profile__fullname">
            {Filter.getFullName(user)}
          </div>
          <div className="align-center user-profile__location">
            <ImLocation className="before-icon" />
            <div className="place">{user.location}</div>
          </div>

          <div className="user-profile__bio">{user.about}</div>

          <div className="user-profile__social">
            <div className="feed__icons">
                <FaFacebookF className="feed__icon" />
                <BsTwitter className="feed__icon" />
                <FaQuora className="feed__icon" />
                <BsStackOverflow className="feed__icon" />
                <FiInstagram className="feed__icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="align-center user-profile__awards">
        {user.awards.map((award, i) => (
          <div key={i} className="award">
            <div className="award-icon">{award.icon}</div>
            <div className="award-name">{award.name}</div>
          </div>
        ))}
      </div>

      <div className="user-profile__content">
        <Tabs defaultActiveKey="1" centered items={userContent} />
      </div>
    </div>
  );
}

export default UserProfile;
