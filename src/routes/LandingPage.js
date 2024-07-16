
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';
import ResponsiveAppBar from "../sections/NavBar"
import Input from '../elements/Input';

import Banner from '../sections/Banner';
import HowDoesItWork from '../sections/HowDoesItWork';
import Rewards from '../sections/Rewards';
import FAQs from '../sections/FAQs';
import Footer from '../elements/Footer';
import ReferPopUp from '../sections/ReferPopUp';

function  Login()  {
return(
   
    <div>
         <ResponsiveAppBar/> 
          <Banner/>
          <HowDoesItWork/>
          <Rewards/>
          <FAQs/>
          <Footer/>
          <ReferPopUp/>
    </div>
    
)
}
  
  
  
  
  
  export default Login;
  
  
  