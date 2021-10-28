import React from "react";

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-list">
          <li>Twitter</li>
          <li>Opensea</li>
          <li>Discord</li>
          <li>Contact</li>
      </ul>
      <div>All Rights Reserved 2021</div>
      <div style={{ textTransform: "uppercase", marginTop: "0.6rem" }}>
        {" "}
        TERMS & CONDITIONS
      </div>
    </div>
  );
}

export default Footer;
