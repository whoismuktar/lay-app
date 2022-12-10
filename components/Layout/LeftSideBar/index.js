import React from "react";
import QuickLinks from "../../QuickLinks";
import UserList from "../../UserList";

const LeftSideBar = () => {
  return (
    <>
      <div className="sidebar left-sidebar">
        <div className="sidebar__card plain">
          <QuickLinks />
        </div>

        <div className="sidebar__card plain">
          <div className="sidebar__title">Recommended Contributors</div>
          <UserList truncate />
        </div>

      </div>
    </>
  );
};

export default LeftSideBar;
