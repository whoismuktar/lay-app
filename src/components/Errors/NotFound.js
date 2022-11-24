import React from "react";
import { BiArrowBack } from "react-icons/bi";
import "../../Assets/styles/errors.scss"

function NotFound(props) {
  return (
    <div className="errors not-found light allChildrenCenter">
      <div className="not-found-layer">
        <div className="not-found__wrapper box-shadow2">
          <div className="title">404</div>
          <div className="subtitle">Page not found</div>
          <div className="footnote">The link you clicked may be broken or the page may have been removed or renamed.</div>
          <div className="cta">
            <button>
              <BiArrowBack className="btn-icon" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
