import React from 'react';

import {Grid, Box, Button} from "@mui/material";

const handleLogin = (theme) => {
    console.log("logged in", theme);
};

const Header = (theme) => {
    return (
        <Box sx={{backgroundColor: 'header.primary', color: 'header.secondary', position: 'sticky', zIndex: '1', top: '0'}}>
            <Grid container justifyContent={"flex-end"}>
                <Grid item padding={2}>
                    nimbio
                </Grid>
                <Grid item padding={2}>
                    <Button variant={"outlined"} onClick={() => handleLogin(theme)} color={'secondary'}>Login</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header;