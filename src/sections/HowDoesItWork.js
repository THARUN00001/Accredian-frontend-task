import React from "react";
import CountUp from 'react-countup';
import Container from '@mui/material/Container';
import { Button } from "@mui/material";
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Img from "../elements/Img";
import ReferPopUp from "./ReferPopUp";


function HowDoesItWork(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (

        <div className="HowItWorks">
            
        <div className="bg-1">
            <h1>HOW IT WORKS</h1>
            <hr className="bg-1-hr"></hr>
            <h4>
            The best compliment you can give is a referral.
            </h4>
        </div>
            <Box  sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xl={4} xs={12}>
                        <Img
                            className="bg-2-process-img"
                            src="form.png"
                        />

                        <h2>
                            Fill the form
                        </h2>
                        <p className="how-p">
                            Enter the referee details and click on 'REFER' button
                        </p>
                    </Grid>
                    <Grid item xl={4} xs={12}>
             
                 <Img
                            className="bg-2-process-img"
                            src="signup.png"
                        />

                        <h2>
                            Referee Signs UP
                        </h2>
                        <p className="how-p">
                            When Referee uses your invite to Sign UP 
                        </p>
         
                    </Grid>
                    <Grid item xl={4} xs={12}>
                    <Img
                            className="bg-2-process-img"
                            src="earn.png"
                        />
                        <h2>
                            Receiving Rewards
                        </h2>
                        <p className="how-p">
                            On Successful SignUP and Couse purchase both of you earn rewards 
                        </p>
                    </Grid>
                </Grid>
            </Box>

            <Button type="button"  onClick={handleOpen} variant="outlined" className='refer-btn'>REFER </Button>
            <ReferPopUp open={open} handleClose={handleClose}></ReferPopUp>
      
        </div>

        

    )
}

export default HowDoesItWork;