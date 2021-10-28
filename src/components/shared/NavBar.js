import React from "react";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { FaDiscord } from "react-icons/fa";

function NavBar() {
  return (
    <div className="nav-root">
      <div className="logo-div">
        <img alt="artifact" src="assets/images/logo.webp" />
      </div>
      <div className="menu-div">
        <div>Mint Keychain</div>
        <div>Road Map</div>
        <div>Team</div>
        <div>Contact</div>
      </div>
      <div className="social-div">
        {/* <TwitterIcon /> */}
        {/* <FaDiscord /> */}
      </div>
    </div>
  );
}

export default NavBar;
