import React from "react";
import { BsBookmarks } from "react-icons/bs";
import { FiHash, FiTrendingUp } from "react-icons/fi";

const links = [
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
    icon: <BsBookmarks />
  },
];

const topQuestions = [
  {
    id: 1,
    title: "",
    description: "",
    image: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    image: "",
  },
  {
    id: 4,
    title: "",
    description: "",
    image: "",
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
                <div>
                  <span className="app__icon quicklinks__ul__list__icon">
                    {link.icon && link.icon}
                  </span>
                  <span>{link.title}</span>
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
