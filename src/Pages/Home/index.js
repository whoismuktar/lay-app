import React from "react";
import Feed from "../../components/Feed";
import QuestionInput from "../../components/Question/QuestionInput";

const mainFeed = [
  {
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
          profileImage: require("../../Assets/images/conquerer.jpeg"),
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
          profileImage: require("../../Assets/images/avatar2.jpeg"),
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
          profileImage: require("../../Assets/images/conquerer.jpeg"),
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
  },
  {
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
          profileImage: require("../../Assets/images/conquerer.jpeg"),
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
      <div className="feeds page">
        <QuestionInput />
        {mainFeed.map((feed, i) => (
          <Feed feed={feed} key={i} />
        ))}

        {/* test duplicate below */}
        {mainFeed.map((feed, i) => (
          <Feed feed={feed} key={i} />
        ))}
        {mainFeed.map((feed, i) => (
          <Feed feed={feed} key={i} />
        ))}
        {mainFeed.map((feed, i) => (
          <Feed feed={feed} key={i} />
        ))}
        {mainFeed.map((feed, i) => (
          <Feed feed={feed} key={i} />
        ))}
        {mainFeed.map((feed, i) => (
          <Feed feed={feed} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Home;
