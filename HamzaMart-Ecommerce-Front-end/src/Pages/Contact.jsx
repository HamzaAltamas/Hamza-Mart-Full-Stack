import React from 'react'
import BreadCrumbBanner from '../components/Layout/BreadCrumbBanner'
import Container from '../components/Layout/Container'
import InputBox from '../components/Layout/InputBox'
import Button from '../components/Layout/Button'

const Contact = () => {
  return (
    <>
    <Container>
    <BreadCrumbBanner/>
    <h2 className='text-black font-nunito font-bold text-[15px] md:text-[30px] lg:text-[30px]'>Fill up a form</h2>
  <div className="w-full mb-10 md:w-[50%] flex flex-col gap-y-10 mt-10 ">
  <InputBox as="input"  title="Name" placeholder="Your name here"/>
  <InputBox as="input" title="Email"  placeholder="Your email here"/>
  <InputBox as="textarea"  title="Message" placeholder="Your message here"/>
  </div>
  <div className="flex justify-center md:justify-start"><Button title="Post"/></div>
    </Container>
    </>
  )
}

export default Contact