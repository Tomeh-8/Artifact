import React from "react";

const HeaderText = ({ text, color, align, slogan }) => {
  return (
    <div>
      <div style={{ textAlign: align }} className="header-slogan">
      {slogan}
      </div>
      <div style={{ color: color, textAlign: align }} className="header-text">
        {text}
      </div>
    </div>
  );
};

export default HeaderText;
