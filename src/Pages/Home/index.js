import React from "react";
import { Image, Divider, Tooltip } from "antd";
import { Filter } from "../../Helper";
import {GrDown} from "react-icons/gr"
import {HiOutlineChevronRight} from "react-icons/hi"
import {BsFillBookmarkFill, BsFlagFill, BsFillBellFill} from "react-icons/bs"
import {TfiLink} from "react-icons/tfi"
import {IoMdShareAlt} from "react-icons/io"
import "../../Assets/styles/feed.scss";

const appAvatar = require("../../Assets/images/avatar.jpg");
const mainFeed = [
  {
    id: 1,
    title: "What is a Question?",
    description:
      `Lorem ipsum dolor sit amet <b>consectetur adipisicing elit</b>. 
      Praesentium ratione, esse id fugit soluta sunt est culpa 
      deserunt sint reiciendis, voluptate animi molestias 
      eligendi nobis repellat dolore architecto, unde cum!`,
    image: "",
    created_at: new Date(),
    askedBy: {
      username: "bisi",
      firstName: "Bisi",
      lastName: "Afonja",
      profileImage: null,
    },
    answers: [
      {
        comment: {
          title: "Question is a request to an information",
        },
        user: {
          username: "dexter",
          firstName: "Jamal",
          lastName: "Da Conquerer",
          profileImage: require("../../Assets/images/conquerer.jpeg"),
        },
      },
    ],
  },
  {
    id: 2,
    title: "What is an Answer?",
    description: "",
    image: "",
    created_at: new Date("Nov 19, 2022"),
    askedBy: {
      username: "dexter",
      firstName: "Jamal",
      lastName: "Da Conquerer",
      profileImage: require("../../Assets/images/conquerer.jpeg"),
    },
    answers: [
      {
        comment: {
          title: "Answer is a explanation to a question",
        },
        user: {
          username: "bisi",
          firstName: "Bisi",
          lastName: "Afonja",
          profileImage: null,
        },
      },
    ],
  },
];

function Home(props) {
  return (
    <div className="home">
      <div className="feeds">
        {mainFeed.map((feed, i) => (
          <div key={i} className="app-card feed feed-card">
            <div className="feed__title">{feed.title}</div>

            <div className="feed__top">
              <div className="feed__asked_by_avatar">
                <Image
                  width={40}
                  height={40}
                  src={
                    feed.askedBy.profileImage
                      ? feed.askedBy.profileImage
                      : appAvatar
                  }
                  alt={`${feed.askedBy.firstName}'s profile image`}
                />
              </div>

              <div className="feed__details">
                <div className="feed__asked_by_name">
                  {`${feed.askedBy.firstName} ${feed.askedBy.lastName}`}
                </div>
                <div className="feed__meta">
                  <div className="feed__answered_by">
                    Answered by Mr A, Ms B & {17 + (i + 1)} more
                  </div>

                  <span class="bullet-separator">&bull;</span>

                  <div className="feed__answered_date">
                    {Filter.formatDateFromNowShort(feed.created_at)} ago
                  </div>
                </div>
              </div>
            </div>

            <div className="feed__description"
              dangerouslySetInnerHTML={{__html:feed.description}}
            />

            {feed.image && (
              <div className="feed__image">
                <Image width={200} src={feed.image} />
              </div>
            )}

            <div className="feed__icons">
              <Tooltip title="Bookmark">
                <BsFillBookmarkFill />
              </Tooltip>
              <Tooltip title="Copy Link">
                <TfiLink className="feed__icon" />
              </Tooltip>
              <Tooltip title="Share">
                <IoMdShareAlt className="feed__icon" />
              </Tooltip>
              <Tooltip title="Flag">
                <BsFlagFill className="feed__icon" />
              </Tooltip>
              <Tooltip title="Subscribe">
                <BsFillBellFill className="feed__icon" />
              </Tooltip>
            </div>

            <div className="feed__answers">
            <Divider orientation="center" plain className="qa-divider">
              <div className="inner">
                <span className="__text">Lay Answers</span>
                <GrDown className="__icon" />
                {/* <HiOutlineChevronRight className="__icon" /> */}
              </div>
            </Divider>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
