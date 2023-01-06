import React from 'react';

import {Grid, Box} from "@mui/material";

const Header = () => {
    return (
        <Box sx={{backgroundColor: '#0583AD', color: '#FFFFFF'}}>
            <Grid container justifyContent={"flex-end"}>
                <Grid item padding={2}>
                    nimbio
                </Grid>
                <Grid item padding={2}>
                    Login goes here
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;