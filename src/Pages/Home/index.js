import React from "react";
import { Image } from "antd";
import { Filter } from "../../Helper";

const appAvatar = require("../../Assets/images/avatar.jpg");
const mainFeed = [
  {
    id: 1,
    title: "What is a Question?",
    description: "",
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

              <div className="feed__">
                <div className="feed__asked_by_name">
                  {`${feed.askedBy.firstName} ${feed.askedBy.lastName}`}
                </div>
                <div className="feed__meta">
                  <div className="feed__answered_by">
                    Mr A, Ms B & {17+(i+1)} more
                  </div>
                  <div className="feed__answered_date">
                    {Filter.formatDateFromNow(feed.created_at)}
                  </div>
                </div>
              </div>
            </div>

            <div className="feed-title">{feed.title}</div>
            <div className="feed-description">{feed.description}</div>
            {feed.image && (
              <div className="feed-image">
                <Image width={200} src={feed.image} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
