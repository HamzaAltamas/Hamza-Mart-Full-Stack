import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import FooterLinkLists from './FooterLinkLists'
import FooterSocialIcons from './FooterSocialIcons'
import FooterSocialLinks from './FooterSocialLinks'
import Images from './Images'
import ListItem from './ListItem'
import {FaFacebookF,FaLinkedinIn,FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
      <>
      <div className='bg-black  mt-5 md:mt-[70px] lg:mt-[100px] py-8 md:py-0 lg:py-0'>
        <Container>
          <div className='md:flex justify-between py-3 md:py-8 lg:py-10'>
            <FooterLinkLists title="Menu" className="w-full lg:w-[20%] md:w-[20%]">
            <ListItem item="Home" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="Shop" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="About" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="Contact" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="Journal" href="#" className="hover:ml-2 duration-300" />
            </FooterLinkLists>
            {/*  */}
            <FooterLinkLists title="Shop" className="w-full lg:w-[20%] md:w-[20%] mt-5 md:mt-0">
            <ListItem item="Category1" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="Category2" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="Category3" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="Category4" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="Category5" href="#" className="hover:ml-2 duration-300" />
            </FooterLinkLists>
            {/*  */}
            <FooterLinkLists title="Help" className="w-full lg:w-[20%] md:w-[20%] mt-5 md:mt-0">
            <ListItem item="Privacy Policy" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="Terms & Conditions" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="Special E-shop" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="Shipping" href="#" className="hover:ml-2 duration-300" />
            <ListItem item="Secure Payments" href="#" className="hover:ml-2 duration-300" />
            </FooterLinkLists>
            {/*  */}
            <div className='w-full lg:w-[20%] md:w-[20%] mt-5 md:mt-0 font-nunito'>
              <Link className='font-nunito text-center md:text-start text-orange font-bold text-[12px] md:text-[14px] lg:text-[16px] flex flex-col gap-y-1 lg:gap-y-2'>(052) 611-5711</Link>
              <Link className='font-nunito text-center md:text-start text-orange font-bold text-[12px] md:text-[14px] lg:text-[16px] flex flex-col gap-y-1 lg:gap-y-2 mb-2'>hamzamart@gmai.com</Link>
              <Link className='font-nunito text-center md:text-start text-white  text-[12px] md:text-[14px] lg:text-[16px] flex flex-col gap-y-1 lg:gap-y-2'>575 Crescent Ave. Quakertown, PA 18951</Link>
            </div>
            {/*  */}
            <div className='flex justify-center md:justify-start w-full lg:w-[20%] md:w-[20%] mt-6 md:mt-0 flex-wrap'>
              <div>
                <Images
                className="w-[80px] md:w-[120px] lg:w-[150px] "
                imgsrc="../src/assets/images/dark-logo.png"
              />
              </div>
            </div>
            {/*  */}
            
          </div>
          <div className=' md:py-8 lg:py-10 md:flex'>
            <div className='py-3 md:py-0 w-full flex justify-center md:justify-start md:w-[50%] text-white' >
              <FooterSocialLinks>
                <FooterSocialIcons href="#">
                     <FaFacebookF/>
                </FooterSocialIcons>
                <FooterSocialIcons href="#">
                     <FaLinkedinIn/>
                </FooterSocialIcons>
                <FooterSocialIcons href="#">
                     <FaInstagram/>
                </FooterSocialIcons>
              </FooterSocialLinks>
            </div>
            <div className='text-orange text-center md:text-end flex justify-center md:justify-end items-center w-full md:w-[50%]'>
                <Link className='py-[10px] text-[12px] md:text-base'>2022 Hamza Mart eCommerce MERN website by Hamza Altamas.</Link>
            </div>
          </div>
       </Container>
      </div>
      </>
  )
}

export default Footer