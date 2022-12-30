import React from 'react';

import {Container, CssBaseline, Box, Grid} from "@mui/material";

import './App.css';


import Header from '../Navigation/Header.js';

function App() {
  return (
      <React.Fragment>
          <CssBaseline />
          <Header />
          <Container fixed>
              <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, md: 12, lg: 12}} justifyContent="space-evenly" alignItems="flex-start">
                  <Grid item xs={12} md={6} lg={2}>
                      <Box sx={{p:2, border: '1px dashed grey'}}>
                          <h1>Residents</h1>
                          <p>Nimbio is designed to maximize the security and convenience for residents of gated properties and buzzer buildings. Eliminate 4-digit codes and buzz to enter, issue virtual keys, and add or revoke access from anywhere. Control access with your phone no matter where you are.</p>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                      <Box sx={{p:2, border: '1px dashed grey'}}>
                          <h1>Property Managers</h1>
                          <p>Improve the safety and convenience of your tenants with Nimbio. Issue or restrict access instantly via the Nimbio Community Manager interface. Manage move-in and move-outs with a single click – no more physical keys to manage.</p>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                      <Box sx={{p:2, border: '1px dashed grey'}}>
                          <h1>Installers</h1>
                          <p>Since Nimbio’s cellular internet comes preinstalled on our hardware, installation of Nimbio is extremely simple. Our step-by-step installer app will guide you through the installation and activation. Nimbio offers a revenue share program for access control professionals and low voltage technicians.</p>
                      </Box>
                  </Grid>
                  <Grid item xs={12} md={6} lg={2}>
                      <Box sx={{p:2, border: '1px dashed grey'}}>
                          <h1>HOA Board Members</h1>
                          <p>Improve the quality of your community with Nimbio. Your residents will thank you for improved security and convenience. Nimbio’s monthly subscription pricing will save your community on maintenance. Nimbio’s cellular internet connects to the strongest local cell network, avoiding the cost and hassle of getting a WiFi network or ethernet at your gate.</p>
                      </Box>
                  </Grid>
              </Grid>
          </Container>
      </React.Fragment>
  );
}

export default App;
