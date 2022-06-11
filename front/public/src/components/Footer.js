import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    /*<Box bgcolor="text.secondary" color="white"
    px={{ xs : 3, sm:10}} py={{ xs: 5, sm: 10}}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Help</Box>
            <Box ><Link href="" color="inherit">Support</Link></Box>
            <Box ><Link href="" color="inherit">Login</Link></Box>
            <Box ><Link href="" color="inherit">Register</Link></Box>
          </Grid>
        </Grid> 
      </Container>
    </Box>*/


    
    <MDBFooter color="black" className="font-small pt mt" style={{zIndex:7,position:'relative'}}>
      <MDBContainer fluid className="text-center text-md-left" style={{zIndex:7}}>
      <MDBRow>
        <MDBCol className="text-center" style={{marginBottom:'-0.9rem',zIndex:7}}><img  style={{height: "2rem",border: "1px solid #ddd",margin :"0.5rem"}} className="mx-auto d-block" src="https://c0.lestechnophiles.com/play-lh.googleusercontent.com/xnnGMUykmb2lcWFEVpbXZSPsitb0owwbLG2qEiJzfYKdicWaOJt-5fE_tFLycOligw0"  />
        <div style={{fontFamily:"media gothic", fontSize: '13px'}}>GROUPE SOCIETE GENERALE <br/></div>
        <div>Copyright @2022 <a href="https://www.uib-net.com" target="_blank"> UIB </a></div></MDBCol>
      </MDBRow>
      <hr style={{ backgroundColor: 'white',height: "3px",
        border: "0px solid white"}}/>
        <MDBRow className="text-center" style={{ fontSize: '13px', fontFamily: 'Ubuntu, sans-serif'}}>
          <MDBCol>
            <a href=""><b>Mentions légales</b></a>
          </MDBCol>
          <MDBCol>
            <div><b>|</b></div>
          </MDBCol>
          <MDBCol >
            <a href=""><b>Contact</b></a>
          </MDBCol>
          <MDBCol >
            <div><b>|</b></div>
          </MDBCol>
          <MDBCol>
            <a href=""><b>Crédits</b></a>
          </MDBCol>
          <MDBCol>
            <div><b>|</b></div>
          </MDBCol>
          <MDBCol>
            <a><b>Informations légales</b></a>
          </MDBCol>
          <MDBCol>
            <div><b>|</b></div>
          </MDBCol>
          <MDBCol >
            <a><b>Cookie policy</b></a>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
     <br/>
    </MDBFooter>
  )
}

export default Footer;