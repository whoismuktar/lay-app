import React from "react";
import { BorderlessTableOutlined, NotificationOutlined } from "@ant-design/icons"
import { BsBookmarks } from "react-icons/bs";
import { FiHash, FiTrendingUp } from "react-icons/fi";

const links = [
  {
    title: "Top Questions",
    path: "/top-questions",
    icon: <FiTrendingUp />
  },
  {
    title: "Trending Questions",
    path: "/trending-questions",
    icon: <FiHash />
  },
  {
    title: "Your Bookmarks",
    path: "/bookmarks",
    icon: <BsBookmarks />
  },
];

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
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default QuickLinks;
