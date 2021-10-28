import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBar from "../shared/NavBar";
import HeroSection from "../shared/HeroSection";
import HeaderText from "../shared/HeaderText";
import BenefitCol from "../shared/BenefitCol";
import FaqSection from "../shared/FaqSection";
import TeamCard from "../shared/TeamCard";
import Footer from "../shared/Footer";
import Mint from "../shared/MintCol";

const Index = () => {
  return (
    <div className="index-root">
      <HeroSection />

      <div className="header-div">
        <HeaderText
          slogan="Mint an Artifact"
          text="5th Nov, 2021"
          color="#FF7676"
          align="center"
        />
      </div>

      <div className="mint-dapp">
        <Mint/>
      </div>

      <div className="benefit-div">
        <HeaderText
          slogan="Get it All!"
          text="Digital | Physical NFT"
          color="white"
          align="center"
        />
        <BenefitCol />
      </div>

      <div className="faq-team-div">
      <HeaderText
          slogan="Lets Meet"
          text="Teams | FAQ"
          color="white"
          align="center"
        />
        <Container  maxWidth="lg">
          <Grid className="faq-team-inner-div">
            <Grid item xl={7} sm={12}>
              <div className="team">
                <TeamCard
                  img1="/assets/images/teams/ape.png"
                  img2="/assets/images/teams/teama.png"
                  img3="/assets/images/teams/teamb.png"
                  img4="/assets/images/teams/teamc.png"
                  department = "data science"
                  name="@jpskonee"
                  color1="blue"
                  color2="aqua"
                  color3 = "white"
                  color4 = "blue"
                />
              </div>
            </Grid>
            <Grid item xl={5} sm={12}>
              <div className="faq">
                <FaqSection />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
       
      <div className="footer-div">
        <HeaderText
          text="Join this Team!!!"
          color="crimson"
          align="center"
        />
        <Footer />
      </div>

    </div>
  );
};

export default Index;
