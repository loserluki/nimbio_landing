import React from 'react';

import {ThemeProvider} from '@mui/material/styles'
import {Container, CssBaseline, Box, Grid, Paper} from "@mui/material";

import './App.css';

import Themes from '../Themes/Themes';
import Header from '../Navigation/Header';
import SplashImage from '../Content/SplashImage';
import SampleForm from '../Forms/SampleForm';
import PropManModule from "../Content/PropManModule";

const formatContent = {
    display: "grid",
    gridAutoColumns: "1fr",
    gridAutoFlow: "column"
};

const currentTheme = Themes();

function App() {
  return (
      <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={currentTheme}>
          <Header theme={currentTheme} />

          <SplashImage />

          <Container fixed>
              <Grid container direction={"column"} alignItems={"center"} spacing={2}>
                  <Grid item>
                      <h2>Full width content</h2>
                      <p>it goes here</p>
                  </Grid>
                  <Grid item>
                      <Grid container direction={"row"} spacing={6}>
                          <Grid item xs={12} md={6}>
                              <Box sx={formatContent}>
                                  <PropManModule />
                              </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                              <Box sx={formatContent}>
                                  <Paper elevation={3}>
                                      <SampleForm />
                                  </Paper>
                              </Box>
                          </Grid>
                      </Grid>
                  </Grid>
              </Grid>
          </Container>
          </ThemeProvider>
      </React.Fragment>
  );
}

export default App;
