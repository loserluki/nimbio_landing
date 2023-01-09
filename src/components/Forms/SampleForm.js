import React, { useState } from 'react';

import {Box, Grid, Button, TextField} from "@mui/material";

const SampleForm = () => {

    //input variables
    const [nameFirst, setNameFirst] = useState("");
    const [nameLast, setNameLast] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneV, setPhoneV] = useState("");
    const [email, setEmail] = useState("");
    const [emailV, setEmailV] = useState("");
    const [title, setTitle] = useState("");
    const [addr, setAddr] = useState("");

    //input flags
    let VALID = true;
    let NAMEF = false;
    let NAMEL = false;
    let PHONE = false;
    let EMAIL = false;
    let TITLE = false;
    let ADDR = false;

    const format_grid = {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)"
    };

    const handleSubmit = () => {
        console.log("in fields: ", nameFirst, nameLast, phone, phoneV, email, emailV, title, addr);
        if (nameFirst) { NAMEF = true; }
        if (nameLast) { NAMEL = true; }
        if (phone.length === 10) {
            if (phone === phoneV) {
                PHONE = true;
            } else {
                console.log("phone/V doesnt match");
            }
        } else {
            console.log("phone invalid");
        }
        if (email) {
            if (email === emailV) {
                EMAIL = true;
            } else {
                console.log("email/V doesnt match");
            }
        } else {
            console.log("email invalid");
        }
        if (title) { TITLE = true; }
        if (addr) { ADDR = true; }

        if (NAMEF && NAMEL && PHONE && EMAIL && TITLE && ADDR) {
            VALID = true;
            console.log("form valid, submitting");
            alert('form submitted!');
        } else {
            VALID = false;
            console.log("form invalid!", VALID);
        }
    };

    return (
        <Box>
            <Grid container
                  direction='column'
                  alignItems='center'
                  rowSpacing={1}
            >
                <Grid container
                      direction='row'
                >
                    <Grid item>
                        <TextField
                            id="name_first"
                            label="First Name"
                            variant="outlined"
                            size="small"
                            value={nameFirst}
                            onChange={(e) => setNameFirst(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="name_last"
                            label="Last Name"
                            variant="outlined"
                            size="small"
                            value={nameLast}
                            onChange={(e) => setNameLast(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container
                      direction='row'
                >
                    <Grid item>
                        <TextField
                            error={((!VALID && !PHONE) || (phone.length > 10))}
                            id="phone"
                            label="Phone number"
                            variant="outlined"
                            size="small"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            error={phone !== phoneV}
                            id="phone_v"
                            label="Phone number (verify)"
                            variant="outlined"
                            size="small"
                            value={phoneV}
                            onChange={(e) => setPhoneV(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction='row'
                >
                    <Grid item>
                        <TextField
                            error={(!VALID)}
                            id="email"
                            label="Email"
                            variant="outlined"
                            size="small"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email_v"
                            label="Email (verify)"
                            variant="outlined"
                            size="small"
                            value={emailV}
                            onChange={(e) => setEmailV(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <TextField
                            id="title"
                            label="Title"
                            variant="outlined"
                            size="small"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <TextField
                            id="addr"
                            label="Address"
                            variant="outlined"
                            size="small"
                            value={addr}
                            onChange={(e) => setAddr(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={() => {
                            handleSubmit();
                        }}>
                        Submit
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => console.log(PHONE)}>
                        Check VALID
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SampleForm;

// first last
// phone val
// (ok to market?)
// email val
// password val
// title
// address (add another)
//     installation contact first last
//     installation contact email phone