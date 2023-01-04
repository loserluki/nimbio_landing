import React, { useState } from 'react';

import {Container, Grid, Button, TextField} from "@mui/material";

const SampleForm = () => {

    const [nameFirst, setNameFirst] = useState(null);
    const [nameLast, setNameLast] = useState(null);
    const [phone, setPhone] = useState(null);
    const [phoneV, setPhoneV] = useState(null);
    const [email, setEmail] = useState(null);
    const [emailV, setEmailV] = useState(null);
    const [title, setTitle] = useState(null);
    const [addr, setAddr] = useState(null);

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
        if (phone) {
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
        <Container fixed>
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
                            variant="standard"
                            size="small"
                            value={nameFirst}
                            onChange={(e) => setNameFirst(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="name_last"
                            label="Last Name"
                            variant="standard"
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
                        <TextField id="phone"
                                   label="Phone number"
                                   variant="standard"
                                   size="small"
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField id="phone_v"
                                   label="Phone number (verify)"
                                   variant="standard"
                                   size="small"
                                   value={phoneV}
                                   onChange={(e) => setPhoneV(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid container
                      direction='row'
                >
                    <Grid item>
                        <TextField
                            id="email"
                            label="Email"
                            variant="standard"
                            size="small"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email_v"
                            label="Email (verify)"
                            variant="standard"
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
                            variant="standard"
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
                            variant="standard"
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
                        onClick={() => console.log(VALID)}>
                        Check VALID
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
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

// lukida inovi
// vegas hardware tech, help build the boxes, also help with shipping

// down to our last 6 units

// william jones, software engineer
// brian dilano,