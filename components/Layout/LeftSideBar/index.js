import React from "react";
import QuickLinks from "../../QuickLinks";
import UserList from "../../UserList";
import useScreen from "../../../Hooks/useScreen";

const LeftSideBar = ({collapsed=false}) => {
  const screens = useScreen()
  console.log(screens);

  return (
    <>
      <div className={`sidebar left-sidebar ${collapsed && "sidebar__collapsed"}`}>
        <div className={`sidebar__card plain ${collapsed ?? "collapsed"}`}>
          <QuickLinks iconOnly={screens.smOnly} />
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
