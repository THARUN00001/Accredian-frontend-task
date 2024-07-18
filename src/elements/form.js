import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';
import axios from 'axios';


const steps = [
  {
    label: 'Enter your details',
    description: `Please enter your name and email to proceed to the next step.`,
  },
  {
    label: 'Enter referee details',
    description: `Please enter referee name and email to proceed to the next step..`,
  }

];

export default function VerticalLinearStepper({handleClose}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    ReferrerUsername: '',
    ReferrerEmail: '',
    RefereeUsername: '',
    RefereeEmail: ''

  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      ReferrerUsername: '',
      ReferrerEmail: '',
      RefereeUsername: '',
      RefereeEmail: ''
    });
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {

    axios.post('https://accredian-backend-task-tijy.onrender.com/', formData,{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then(response => {
        console.log('Success:', response.data);
        handleNext();
       
         // Proceed to the next step (if any)
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
  };


  const submit = () => {
    handleSubmit();
    handleClose();
  } 

  return (
  <Box 
  
    //   slots={{ backdrop: "Backdrop" }}
      slotprops={{
        backdrop: {
          timeout: 1200,
        },
      }}
      >
    
<Fade>
<Box sx={{ maxWidth: "100%" }}>
<center>
<h1>
        REFERRAL FORM
      </h1>
</center>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box
              width="100%" 
               sx={{ mb: 2 }}>
                {index === 0 && (
                    <div>
                    <TextField
                    required
                    label="Name"
                    name="ReferrerUsername"
                    value={formData.ReferrerUsername}
                    onChange={handleChange}
                    variant="outlined"
                    
                    margin="normal"
                  />
                  <br></br>
                <TextField
                required
                    label="Email"
                    name="ReferrerEmail"
                    value={formData.ReferrerEmail}
                    onChange={handleChange}
                    variant="outlined"
                    
                    margin="normal"
                  />
                    </div>
                )}
                {index === 1 && (
                    <div>
                    <TextField
                    required
                    label="Name"
                    name="RefereeUsername"
                    value={formData.RefereeUsername}
                    onChange={handleChange}
                    variant="outlined"
                    
                    margin="normal"
                  />
                  <br></br>
                <TextField
                required
                    label="Email"
                    name="RefereeEmail"
                    value={formData.RefereeEmail}
                    onChange={handleChange}
                    variant="outlined"
                    
                    margin="normal"
                  />
                    </div>
                )}
                <div>
                  <Button
                    variant="contained"
                    
                    onClick={index === steps.length - 1 ? submit: handleNext}

                    sx={{ mt: 1, mr: 1 }}
                    disabled={(index === 0 && !formData.ReferrerUsername) || (index === 0 && !formData.ReferrerEmail) || (index === 1 && !formData.RefereeUsername) || (index === 1 && !formData.RefereeEmail)}
                  >
                    {index === steps.length - 1 ? 'Refer' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Typography variant="body1">Username: {formData.username}</Typography>
          <Typography variant="body1">Email: {formData.email}</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
</Fade>
  </Box>
  );
}
