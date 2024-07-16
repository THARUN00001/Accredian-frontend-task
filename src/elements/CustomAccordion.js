import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


function CustomAccordion(props) {
    return(
        <Accordion className="custom-Accordion" >
        <AccordionSummary sx={{height:"50px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h4>
          {props.question}
          </h4>
        </AccordionSummary>
        <AccordionDetails>
         <p style={{margin:"0"}}>
         {props.answer}
         </p>
        </AccordionDetails>
      </Accordion>
    )
}

export default CustomAccordion;