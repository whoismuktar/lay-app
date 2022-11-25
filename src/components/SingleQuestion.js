import React from "react";
import Feed from "./Feed";

const feed = {
  id: 1,
  title: "What is a Question?",
  description: `Lorem ipsum dolor sit amet <b>consectetur adipisicing elit</b>. 
    Praesentium ratione, esse id fugit soluta sunt est culpa 
    deserunt sint reiciendis, voluptate animi molestias 
    eligendi nobis repellat <em>dolore architecto</em>, unde cum!`,
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
        profileImage: require("../Assets/images/conquerer.jpeg"),
      },
      replies: [
        {
          comment: {
            title: "I really dont know",
          },
          user: {
            username: "princess",
            firstName: "Castle",
            lastName: "Bearer",
            profileImage: null,
          },
        },
        {
          comment: {
            title: "I really dont know",
          },
          user: {
            username: "princess",
            firstName: "Castle",
            lastName: "Bearer",
            profileImage: null,
          },
        },
        {
          comment: {
            title: "I really dont know",
          },
          user: {
            username: "princess",
            firstName: "Castle",
            lastName: "Bearer",
            profileImage: null,
          },
        },
      ],
    },
    {
      comment: {
        title: "I really dont know",
      },
      user: {
        username: "princess",
        firstName: "Castle",
        lastName: "Bearer",
        profileImage: null,
      },
    },
    {
      comment: {
        title: "I dont know",
      },
      user: {
        username: "mario",
        firstName: "Mr",
        lastName: "Warner",
        profileImage: require("../Assets/images/conquerer.jpeg"),
      },
    },
    {
      comment: {
        title: "Question is a request to an information",
      },
      user: {
        username: "dexter",
        firstName: "Jamal",
        lastName: "Da Conquerer",
        profileImage: require("../Assets/images/conquerer.jpeg"),
      },
      replies: [
        {
          comment: {
            title: "I really dont know",
          },
          user: {
            username: "princess",
            firstName: "Castle",
            lastName: "Bearer",
            profileImage: null,
          },
        },
        {
          comment: {
            title: "I really dont know",
          },
          user: {
            username: "princess",
            firstName: "Castle",
            lastName: "Bearer",
            profileImage: null,
          },
        },
        {
          comment: {
            title: "I really dont know",
          },
          user: {
            username: "princess",
            firstName: "Castle",
            lastName: "Bearer",
            profileImage: null,
          },
        },
      ],
    },
  ],
};

function SingleQuestion(props) {
  return (
    <div className="question single-question page">
      <Feed feed={feed} collapse />
    </div>
  );
}

export default SingleQuestion;
