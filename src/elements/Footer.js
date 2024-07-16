import React from "react";
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';

function Footer(props) {
    return (
        <div className="footer">
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container justifyContent="space-evenly" spacing={2}>
                        <Grid sx={{ width: "100%" }} item xl={4} sm={12}>
                            <div >
                                <img className="logo-footer" src="logo-light.png"></img>
                                <h4> Nexis Courses </h4>
                                <address>
                                    34955 Jacobi Village, <br></br>West Sherman, IN 82017
                                </address>
                            </div>

                        </Grid>
                        <Grid sx={{ width: "100%" }} item xl={4} sm={12}>
                            <div >
                                <h4>
                                    Products
                                </h4>
                                <p>
                                    CyberSecurity Courses
                                </p>
                                <p>
                                    DevOps Courses
                                </p>
                                <p>
                                    Web development Courses
                                </p>
                            </div>

                        </Grid>
                        <Grid sx={{ width: "100%" }} item xl={4} sm={12}>
                            <div >
                                <h4>
                                    Blogs
                                </h4>
                                <p>
                                    Current industry trends
                                </p>
                                <p>
                                    Best technologies to learn in 2024
                                </p>
                            </div>

                        </Grid>

                    </Grid>
                </Box>
            </div>
        </div>
    )
}

export default Footer;