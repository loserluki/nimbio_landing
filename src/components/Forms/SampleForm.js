import React, { useState } from 'react';

import {Container, Grid, TextField} from "@mui/material";

const SampleForm = () => {

    const [name_f, setname_f] = useState(null);
    const [name_l, setname_l] = useState(null);
    const [phone, setphone] = useState(null);
    const [phone_v, setphone_v] = useState(null);
    const [email, setemail] = useState(null);
    const [email_v, setemail_v] = useState(null);
    const [title, settitle] = useState(null);
    const [addr, setaddr] = useState(null);

    const format_grid = {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)"
    };

    const handleChange = (e) => {
        console.log("field changed to ", e.target.value);

    }

    return (
        <Container fixed>
            <Grid container direction='column'>
                <Grid container direction='row'>
                    <Grid item>
                        <TextField
                            id="name_first"
                            label="First Name"
                            variant="standard"
                            size="small"
                            value={name_f}
                            onChange={e => handleChange(e)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="name_last"
                            label="Last Name"
                            variant="standard"
                            size="small"
                            value={name_l}
                            onChange={e => handleChange(e)}
                        />
                    </Grid>
                </Grid>
                <Grid container direction='row'>
                    <Grid item>
                        <TextField id="phone"
                                   label="Phone number"
                                   variant="standard"
                                   size="small"
                                   value={phone}
                                   onChange={e => handleChange(e)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField id="phone_v"
                                   label="Phone number (verify)"
                                   variant="standard"
                                   size="small"
                                   value={phone_v}
                                   onChange={e => handleChange(e)}
                        />
                    </Grid>
                </Grid>
                <Grid container direction='row'>
                    <Grid item>
                        <TextField
                            id="email"
                            label="Email"
                            variant="standard"
                            size="small"
                            value={email}
                            onChange={e => handleChange(e)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email_v"
                            label="Email (verify)"
                            variant="standard"
                            size="small"
                            value={email_v}
                            onChange={e => handleChange(e)}
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
                            onChange={e => handleChange(e)}
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
                            onChange={e => handleChange(e)}
                        />
                    </Grid>
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