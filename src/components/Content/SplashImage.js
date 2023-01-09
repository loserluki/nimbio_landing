import React from 'react';

import generic from './Generic.png';

import {Grid, Box} from "@mui/material";

const SplashImage = () => {
    return (
        <Box color='#FFFFFF'>
            <Grid container spacing={2} alignItems={"center"} direction={"column"} sx={{height: '30vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${generic})`}}>
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