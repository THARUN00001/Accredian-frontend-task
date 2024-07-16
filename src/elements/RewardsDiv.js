import React from "react";
import TextField from '@mui/material/TextField';
import { Container } from "@mui/material";
import CountUp from 'react-countup';
import Grid from '@mui/material/Grid';

function RewardDiv(props) {
    return(
        <Grid sx={{width:"100%"}} item xl={props.xl} md={props.md} xs={props.xs} sm={props.sm}>
        <div className="RewardsDiv">

            <h2>
                 {props.rewardBelongsTo}  <span className="RewardDiv-text-1"><CountUp enableScrollSpy={true} end={props.inr} /> </span> 
            </h2>
            <p className="how-p">
            {props.rewardType}
                
            </p>
        </div>

    </Grid>
    )
}

export default RewardDiv;