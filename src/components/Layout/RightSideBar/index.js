import React from "react";
import { useMatch } from "react-router-dom";
import TagList from "../../TagList";

const RightSideBar = () => {
  const isHome = useMatch({ 
    path: '/',
    end: true, 
    caseSensitive: true 
  });

  return (
    <div className="sidebar right-sidebar">
        {
          isHome &&
          <>
            <div className="sidebar__card">
              <div className="sidebar__title">Trends for you</div>
              <TagList />
            </div>
            </>
        }
    </div>
  );
};

export default RightSideBar;
