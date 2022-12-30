import React from 'react';

import {Container, Grid, Box} from "@mui/material";

import './Header.css'

const Header = () => {
    return (
        <Container sticky>

        </Container>


        // <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
        //     <Grid item xs={1} lg={1}>
        //         <Box sx={{p: 2, backgroundColor: "#0583AD", border: "1px dashed white"}}>
        //             <div className="Nav-dropdown">
        //                 drop
        //                 <div className="Nav-dropdown-content">
        //                     <button onClick={() => console.log("button clicked")}>lineitem</button>
        //                     <button onClick={() => console.log("button clicked")}>lineitem</button>
        //                     <button onClick={() => console.log("button clicked")}>lineitem</button>
        //                     <button onClick={() => console.log("button clicked")}>lineitem</button>
        //                 </div>
        //             </div>
        //         </Box>
        //     </Grid>
        // </Grid>


        // <div className="Nav-header">
        //     <p>navigation bar</p>
        //     <div className="Nav-dropdown">
        //         <p>drop</p>
        //         <div className="Nav-dropdown-content">
        //             <button onClick={() => console.log("load Property Owner options")}>Property Owner</button>
        //             <button onClick={() => console.log("load Resident page")}>Resident</button>
        //             <button onClick={() => console.log("load Installer page")}>Installer</button>
        //             <button type="button" onClick={() => console.log("load Contact page")}>Contact</button>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Header;