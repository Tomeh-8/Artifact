import React from "react";
import { Grid, Container } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";

function BenefitCol() {
  return (
    <Container maxWidth="lg" className="benefit-root">
      <Grid className="first-div" container>
        <Grid className="img-part" item xl={6} xs={12}>
          <img src="/assets/images/nft-sky.png" alt="artifact-sky" />
        </Grid>
        <Grid className="text-part" item xl={6} xs={12}>
          We know that NFTs are the future for art project marketing, business
          branding, and the intersection between art and finance. <br /> <br />
          We truly believe that the Artifact Marketplace will enable contact
          with other members in the NFT space not only within the virtual space,
          but also out in the community and even bring more people in. <br />{" "}
          <br />
          Both the 2.4in and 3.2in NFT would available for you to mint by 5th
          November, 2021.
        </Grid>
      </Grid>
      <Grid className="second-div" container>
        <Grid className="text-part" item xl={6} xs={12}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BoltIcon style={{ fontSize: "3rem", color: "gold" }} />
            Redeemable NFT casting (JPEG, GIF, MP4);
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BoltIcon style={{ fontSize: "3rem", color: "gold" }} />6 Hours
            batery life WIFI and Bluetooth enabled secured wallet verification;
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BoltIcon style={{ fontSize: "3rem", color: "gold" }} /> Keychain
            password protected;
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BoltIcon style={{ fontSize: "3rem", color: "gold" }} /> Secured
            link{" "}
          </div>
          <br />
          Safely upload personal health or emergency documents that can be shown
          when your QR code on the back of your device is scanned.
        </Grid>
        <Grid className="img-part" item xl={6} xs={12}>
          <img src="/assets/images/nft-clean.png" alt="artifact-sky" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default BenefitCol;
