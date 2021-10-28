import React from "react";

function CircleImg({ img1, img2, img3,img4, name, color1, color2, color3, color4, department }) {
  return (
  <div className="team-wrapper">
    <div className="team-card">
      <img className="team-img" src={`${img1}`} alt="pics" />
      <div
        style={{
          background: `linear-gradient(80deg, ${color1} 40%, ${color2})`,
        }}
        className="team-name"
      >
        <div style={{ textAlign: "center" }}>{name}</div>
      </div>
      <div
        style={{
          background: `linear-gradient(80deg, ${color4} 5%, ${color1})`,
          color:`${color3}`
        }}
        className="team-name"
      >
        <div style={{ textAlign: "center" }}>{department}</div>
      </div>
    </div>
    <div className="team-card">
      <img className="team-img" src={`${img2}`} alt="pics" />
      <div
        style={{
          background: `linear-gradient(80deg, ${color1} 40%, ${color2})`,
        }}
        className="team-name"
      >
        <div style={{ textAlign: "center" }}>{name}</div>
      </div>
      <div
        style={{
          background: `linear-gradient(80deg, ${color4} 5%, ${color1})`,
          color:`${color3}`
        }}
        className="team-name"
      >
        <div style={{ textAlign: "center" }}>{department}</div>
      </div>
    </div>
    <div className="team-card">
      <img className="team-img" src={`${img3}`} alt="pics" />
      <div
        style={{
          background: `linear-gradient(80deg, ${color1} 40%, ${color2})`,
        }}
        className="team-name"
      >
        <div style={{ textAlign: "center" }}>{name}</div>
      </div>
      <div
        style={{
          background: `linear-gradient(80deg, ${color4} 5%, ${color1})`,
          color:`${color3}`
        }}
        className="team-name"
      >
        <div style={{ textAlign: "center" }}>{department}</div>
      </div>
    </div>
    <div className="team-card">
      <img className="team-img" src={`${img4}`} alt="pics" />
      <div
        style={{
          background: `linear-gradient(80deg, ${color1} 40%, ${color2})`,
        }}
        className="team-name"
      >
        <div style={{ textAlign: "center" }}>{name}</div>
      </div>
      <div
        style={{
          background: `linear-gradient(80deg, ${color4} 5%, ${color1})`,
          color:`${color3}`
        }}
        className="team-name"
      >
        <div style={{ textAlign: "center" }}>{department}</div>
      </div>
    </div>
    </div>
    
  );
}

export default CircleImg;
