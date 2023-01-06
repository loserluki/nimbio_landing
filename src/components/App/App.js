import React from 'react';

import {Container, CssBaseline, Box, Grid} from "@mui/material";

import './App.css';

import Header from '../Navigation/Header';
import SplashImage from '../Content/SplashImage'
import SampleForm from '../Forms/SampleForm';
import PropManModule from "../Content/PropManModule";

const format_content = {
    display: "grid",
    gridAutoColumns: "1fr",
    gridAutoFlow: "column"
};

const format_content_box = {
    p: 2,
    border: '1px dashed grey'
};

function App() {
  return (
      <React.Fragment>
          <CssBaseline />
          <Header />

          <SplashImage />

          <Container fixed>
              <Grid container direction={"column"} alignItems={"center"} spacing={2}>
                  <Grid item>
                      <h2>Content</h2>
                      <p>it goes here</p>
                  </Grid>
                  <Grid item>
                      <Grid container direction={"row"}>
                          <Grid item>
                              <PropManModule />
                          </Grid>
                      </Grid>
                      <Grid item>
                          <SampleForm />
                      </Grid>
                  </Grid>
              </Grid>
          </Container>
      </React.Fragment>
  );
}

export default App;
