import React from "react";

function Footer(props) {
  return (
    <div className="app-footer" id="footer">
      <div className="app-footer__content">
        <ul>
          <li>
            © {new Date().getFullYear()} All Rights Reserved by The Lay App |
            Privacy Policy
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
