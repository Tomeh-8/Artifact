import React from 'react';
import { Grid, Container } from "@mui/material";


function MintCol() {
    return (
        <Container maxWidth="lg" className="mint-root">
        <Grid className="mint-div" container>
          <Grid className="mint-left" >
           <video  autoplay="true">
             <source src="/assets/video/NFTVideo.mp4" type="video/mp4"/>
            </video>
          </Grid>
          <Grid className="mint-right" >
             <img src="/assets/images/nft-sky.png" alt="artifact-sky" /> 
             <div className="mint-button">
                 Mint
             </div>
          </Grid>
        </Grid>
      </Container>
    )
}

export default MintCol;