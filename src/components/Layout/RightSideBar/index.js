import React from "react";
import { useMatch } from "react-router-dom";
import TagList from "../../TagList";
import UserList from "../../UserList";

const RightSideBar = () => {
  const isHome = useMatch({
    path: "/",
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
      
      <div className="sidebar__card">
        <div className="sidebar__title">Top Contributors</div>
        <UserList truncate />
      </div>
    </div>
  );
};

export default RightSideBar;
