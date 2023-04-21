import React, { useReducer } from 'react'
import Container from '../components/Layout/Container'
import BreadCrumbBanner from '../components/Layout/BreadCrumbBanner'
import Images from '../components/Layout/Images'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBox from '../components/Layout/InputBox';
import Button from '../components/Layout/Button';
import { IconButton } from '@mui/material';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

function reducer(state,action) {
  
   if(action.type === "one"){
     {
      console.log('====================================');
      console.log(state);
      console.log('====================================');
      return{
        ...state,
        [action.payload.name] : action.payload.value
      }
     }
   }
}



function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
const Registration = () => {

    const [state,dispatch]= useReducer(reducer,{
      firstName:"",
      lastName:"",
      email:"",
      tel:"",
      password:""
    })

    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [showPassword, setShowPassword] = React.useState(false);
    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    
    let handleFormData = (e) => {
       dispatch({type:"one",payload:{
        name:e.target.name,
        value:e.target.value
       }})
    }
    let handleSubmit = async () =>{
      let data = await axios.post("localhost:8000/hamza-mart/v1/auth/reg",{
        ...state
      })
      console.log('====================================');
      console.log("data send");
      console.log('====================================');
    } 

  return (
   
    <>
     <Container>
     <div className='flex justify-center'> 
            <Images
                className="w-[100px] md:w-[120px] lg:w-[150px]"
                imgsrc="../src/assets/images/logo.png"
              />
      </div>
      <div className='max-w-[600px] mt-[20px] md:mt-10 mx-auto'>
      <AppBar position="static" className='!bg-orange !font-nunito !rounded-xl !overflow-hidden'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          
        >
          <Tab label="Sign up" className='!font-nunito !text-[12px] md:!text-base !p-[10px]' {...a11yProps(0)} />
          <Tab label="Sign in" className='!font-nunito !text-[12px] md:!text-base !p-[10px]' {...a11yProps(1)} />
       
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* signup */}
        <TabPanel value={value} className="!px-0" index={0} dir={theme.direction}>
          <div className="w-full p-5 rounded-md shadow-lg flex flex-col gap-y-8">
            <InputBox as="input" name="firstName" onChange={handleFormData} type="text" title="First Name*" placeholder="Enter your first name"/>
            <InputBox as="input" name="lastName" onChange={handleFormData}  type="text" title="Last Name*" placeholder="Enter your last name"/>
            <InputBox as="input" name="email" onChange={handleFormData}  type="email" title="Email*" placeholder="Enter your email"/>
            <div>
                
            </div>
            <InputBox
                  as="input"
                  type={showPassword ? 'text' : 'password'}
                  title="Password*"
                  placeholder="Enter your password"
                name="password" onChange={handleFormData}
                />
            <InputBox as="input" name="tel" onChange={handleFormData} title="Telephone*" placeholder="Enter your phone number"/>
            <Button onClick={handleSubmit} title="Sign up"/>
          </div>
        </TabPanel>
        {/* login */}
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className="w-full p-5 rounded-md shadow-lg flex flex-col gap-y-8">
            
            <InputBox as="input" title="Email*" placeholder="Enter your email"/>
            <InputBox as="input" type="password" title="Password*" placeholder="Enter your password"/>
            
            <Button  title="Sign in"/>
          </div>
        </TabPanel>
        
      </SwipeableViews>
      </div>
    </Container>
    </>
  )
}

export default Registration