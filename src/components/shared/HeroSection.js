import React from "react";
import { Container } from "@mui/material";
import ReactTypingEffect from "react-typing-effect";
import { FaTwitter, FaDiscord } from "react-icons/fa";

function HeroSection() {
  return (
    <div id="hero" className="hero-div">
      <Container style={{ position: "relative" }} maxWidth="lg">
        <div className="top-div">
          <div className="logo-div">
            <img src="/assets/images/logo.webp" alt="" />
          </div>
          <div className="connect-div">Connect DIv</div>
        </div>

        <div className="text-div">
          <div className="header-text">
            The{" "}
            <span className="animation-text">
              <ReactTypingEffect text={["FIRST", "RARE", "BEST"]} />
            </span>{" "}
            NFT <br /> Physical KeyChain.
          </div>
          <div className="slogan-text">
            A PHYSICAL NFT ACCESSORY TO DISPLAY ALL YOUR FAVORITE NFT PROJECTS{" "}
          </div>
        </div>

        <div className="play-btn"></div>

        <div className="social-icons">
          <img
            className="each-icon"
            src="/assets/images/opensea.png"
            style={{ width: "2rem" }}
            alt=""
          />
          <FaTwitter
            className="each-icon"
            style={{ fontSize: "2rem", color: "#2081E2" }}
          />
          <FaDiscord
            className="each-icon"
            style={{ fontSize: "2rem", color: "white" }}
          />
        </div>
        <div className="floating-nft">
          <img src="/assets/images/nft-red.png" alt="" />
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
