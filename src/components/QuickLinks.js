import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { IoBookmarksOutline } from "react-icons/io5";
import { FiHash, FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    path: "/",
    query: "home",
    icon: <BiHomeAlt />
  },
  {
    title: "Top Questions",
    path: "/top-questions",
    query: "topQuestion",
    icon: <FiTrendingUp />
  },
  {
    title: "Trending Questions",
    path: "/trending-questions",
    query: "trendingQuestion",
    icon: <FiHash />
  },
  {
    title: "Your Bookmarks",
    path: "/bookmarks",
    icon: <IoBookmarksOutline />
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
              <li key={i} className="align-center quicklinks__ul__list">
                <div className="align-center">
                  <span className="app__icon quicklinks__ul__list__icon">
                    {link.icon && link.icon}
                  </span>
                  <span className="quicklinks__title">
                    <Link to={link.path}>
                      {link.title}
                    </Link>
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
