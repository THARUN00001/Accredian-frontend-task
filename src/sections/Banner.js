import React from "react";
import { Container } from "@mui/material";
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";import Img from "../elements/Img";
import RewardDiv from "../elements/RewardsDiv";
import ReferPopUp from "./ReferPopUp";

function Banner(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (


        <div className="banner-section">
            <Box sx={{ flexGrow: 1 }}>
                <Grid className="banner-grid" container alignItems={"center"} justifyContent="space-evenly" spacing={2}>
                    <Grid  item xl={5} md={10} xs={10} sm={6}>
                        <div>
                        <h1  className="banner-text-1">
                                REFER, LEARN AND EARN
                        </h1>
                        <p className="banner-text-2">
                        Join Nexis for free and transform your career </p> <p>  No matter what you are looking to learn, or gain confidence in, </p> <p> Nexis has it all!! </p>
            
                        </div>
                <div>
                <Button type="button"  onClick={handleOpen} variant="outlined" className='refer-btn-banner'>REFER NOW!!!</Button>
                <ReferPopUp open={open} handleClose={handleClose}></ReferPopUp>
                </div>

                    </Grid>
                    <Grid sx={{ width: "100%" }} item xl={5} md={5} xs={9} sm={5}>
                        <div className="">
                        <img className="banner-img" src="ban-1.png"></img>
                        </div>

                    </Grid>

                </Grid>
            </Box>
        </div>

    )
}

export default Banner;

