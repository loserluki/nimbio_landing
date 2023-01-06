import React from 'react';

import generic from './Generic.png';

import {Grid, Box} from "@mui/material";

const styles = {
    splashBack: {
        height: 25,
        backgroundImage: {generic},
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
};
const SplashImage = () => {
    return (
        <Box color='#FFFFFF'>
            <Grid container spacing={2} alignItems={"center"} direction={"column"} style={styles}>
                <Grid item>
                    Nimbio
                </Grid>
                <Grid item>
                    Memorable slogan
                </Grid>
            </Grid>
        </Box>
    );
}

export default SplashImage;