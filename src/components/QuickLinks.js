import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { IoBookmarksOutline } from "react-icons/io5";
import { FiHash, FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { GrNotification } from "react-icons/gr";

const links = [
  {
    title: "Home",
    path: "/",
    query: "home",
    icon: <BiHomeAlt />,
    notifier: false,
  },
  {
    title: "Notifications",
    path: "/notifications",
    query: "notification",
    icon: <GrNotification />,
    notifier: true,
    isNew: true,
  },
  {
    title: "Top Questions",
    path: "/top-questions",
    query: "topQuestion",
    icon: <FiTrendingUp />,
    notifier: false,
  },
  {
    title: "Trending Questions",
    path: "/trending-questions",
    query: "trendingQuestion",
    icon: <FiHash />,
    notifier: false,
  },
  {
    title: "Your Bookmarks",
    path: "/bookmarks",
    icon: <IoBookmarksOutline />,
    notifier: false,
  },
];

const topQuestions = [
  {
    id: 1,
    title: "",
    description: "",
    image: "",
    answers: []
  },
  {
    id: 2,
    title: "",
    description: "",
    image: "",
    answers: []
  },
  {
    id: 4,
    title: "",
    description: "",
    image: "",
    answers: []
  },
]

const Listing = (query) => {
  switch (query) {
    case "topQuestions":
      return topQuestions
    default:
      break;
  }
}

const QuickLinks = () => {
  return (
    <div className="quicklinks">
      <ul className="quicklinks__ul">
        {
          links.map((link, i)=> {
            return (
              <li key={i} className="align-center quicklinks__ul__list" id={link.query}>
                <div className="align-center">
                  <span className="app__icon quicklinks__ul__list__icon">
                    {link.icon && link.icon}
                    {
                      link.notifier &&
                      <span className="notifier"></span>
                    }
                  </span>
                  <span className="quicklinks__title align-center">
                    <Link to={{
                      pathname: link.path,
                      state: { customData: {} }
                    }}>
                      {link.title}
                    </Link>

                    {
                      link.isNew && <span className="new-label">New</span>
                    }
                  </span>
                </div>

                <div className="item__listing">
                  {link.query && Listing(link.query)}
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default QuickLinks;
