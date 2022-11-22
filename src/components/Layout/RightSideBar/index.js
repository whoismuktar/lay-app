import React from "react";
import TagList from "../../TagList";

const RightSideBar = () => {
  return (
    <div className="sidebar right-sidebar">
      <div className="sidebar__card">
        <div className="sidebar__title">Trends for you</div>
        <TagList />
      </div>
    </div>
  );
};

export default RightSideBar;
