import React from "react";
import TextField from '@mui/material/TextField';
import { Container } from "@mui/material";

function Input(props) {
    return(
        <Container>
            <TextField
            sx={{width:'90%', mt:'30px' }}
              required
              fullWidth
              id= {props.id}
              label={props.label}
              name={props.name}
              autoFocus
            />
        </Container>
    )
}

export default Input;