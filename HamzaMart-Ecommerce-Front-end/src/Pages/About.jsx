import React from 'react'
import BreadCrumbBanner from '../components/Layout/BreadCrumbBanner'
import Container from '../components/Layout/Container'
import Flex from '../components/Layout/Flex'
import { Link } from "react-router-dom";
import Images from '../components/Layout/Images';

const About = () => {
  return (
    <>
    <Container>

     <BreadCrumbBanner/>
     <Flex className="md:flex  gap-x-[20px]">
        <div className="w-full md:w-[50%]">
          <Link to="/about">
           <Images imgsrc="https://i.postimg.cc/3rLvHbPz/Group-15.png"/>
          </Link>
        </div>
         <div className="w-full md:w-[50%] mt-[20px] md:mt-0">
       <Link to="/about">
       <Images imgsrc="https://i.postimg.cc/3rLvHbPz/Group-15.png"/>
      </Link>
     </div>      
      </Flex>
      <h4 className='font-nunito text-[25px] md:text-[35px] mt-10 md:mt-[70px] lg:mt-[100px]'>
          Hamza Mart is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
          </h4>
  
      <Flex className=" flex flex-col md:flex-row gap-y-5 md:gap-x-5  mt-10 md:mt-[70px] lg:mt-[100px]">
            <div className="">
              <h5 className='font-semibold mb-2 text-[16px]'>Our Vision</h5>
              <p className='text-[12px] text-ashText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="">
              <h5 className='font-semibold mb-2 text-[16px]'>Our Story</h5>
              <p className='text-[12px] text-ashText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="">
              <h5 className='font-semibold mb-2 text-[16px]'>Our Brands</h5>
              <p className='text-[12px] text-ashText'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
      </Flex>
         
    
    </Container>
    </>
  )
}

export default About