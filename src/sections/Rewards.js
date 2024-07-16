import React from "react";
import CountUp from 'react-countup';
import Container from '@mui/material/Container';
import { Button } from "@mui/material";
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Img from "../elements/Img";
import RewardDiv from "../elements/RewardsDiv";
import ReferPopUp from "./ReferPopUp";



function Rewards(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="Rewards">
            <h1 className="Rewards-title">
                REWARDS
            </h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container justifyContent="space-evenly" spacing={2}>
                    <RewardDiv xl={3} md={12} sm={12} xs={12}
                        rewardBelongsTo="You receive INR"
                        inr="500"
                        rewardType="For every referee SignUP "
                    />
                    <RewardDiv xl={3} md={6} sm={6} xs={12}
                        rewardBelongsTo="Both Receive INR"
                        inr="2000"
                        rewardType="When referee purchases course priced below Rs 50,000"
                    />
                    <RewardDiv xl={3} md={6} sm={6} xs={12}
                        rewardBelongsTo="Both Receive INR"
                        inr="5000"
                        rewardType="When referee purchases course priced above Rs 50,000"
                    />

                </Grid>
            </Box>
            <Button type="button"  onClick={handleOpen} variant="outlined" className='refer-btn-rewards'>REFER </Button>
            <ReferPopUp open={open} handleClose={handleClose}></ReferPopUp>
        </div>
    )
}


export default Rewards;