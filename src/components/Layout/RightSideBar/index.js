import React from "react";
import { useMatch } from "react-router-dom";
import ProfileCard from "../../ProfileCard";
import TagList from "../../TagList";
import UserList from "../../UserList";

const RightSideBar = () => {
  const isHome = useMatch({
    path: "/",
    end: true,
    caseSensitive: true,
  });

  const isSingleQuestion = useMatch({
    path: "/question/:slug",
    end: true,
    caseSensitive: true,
  });

  return (
    <div className="sidebar right-sidebar">
      {isHome && (
        <>
          <div className="sidebar__card">
            <div className="sidebar__title">Trends for you</div>
            <TagList truncate />
          </div>
        </>
      )}

      {!isSingleQuestion && (
        <div className="sidebar__card">
          <div className="sidebar__title">Top Contributors</div>
          <UserList truncate />
        </div>
      )}

      {isSingleQuestion && (
        <div className="sidebar__card">
          <div className="sidebar__title text-center">Top Contributor</div>
          <ProfileCard />
        </div>
      )}
    </div>
  );
};

export default RightSideBar;
