import React from "react";
import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import CustomAccordion from "../elements/CustomAccordion";

function FAQs(props) {
    return(
       
<div  className="FAQs">
<h1>
    Frequently Asked <span className="FAQs-Question">Questions</span>
</h1> 
 <div className="FAQ-Accordion">
 <CustomAccordion
            question="How do I refer?"
            answer="Click the 'Refer' button and fill the form and click 'Submit'."
        />
        <CustomAccordion
            question="When do I get rewarded?"
            answer="The reward will be credited within 7 days after sucessful SignUP/Purchase by referee."
        />
                <CustomAccordion
            question="Where do I get the referral reward"
            answer="The reward will be credited to your wallet."
        />
              <CustomAccordion
            question="I didn't receive my reward"
            answer="If u haven't received your reward even after sucessful SignUP/Purchase by referee please contact us at 'helpme@demo.com'. "
        />
      
    </div>   
</div>


    )
}

export default FAQs;

