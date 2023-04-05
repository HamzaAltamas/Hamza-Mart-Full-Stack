import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Flex from './Flex'
import { TbNumber2 } from 'react-icons/tb' 
import {FaTruck} from "react-icons/fa"
import {BsArrowRepeat} from "react-icons/bs"
const AdditionalInfo = () => {
  return (
      <div className=' border-b border-lightBorder mt-[-6px]'>
          <Container>
          <Flex className="flex justify-between py-1 md:py-2 lg:py-4">
              <Link className='flex justify-center md:justify-start lg:justify-start items-center font-nunito gap-x-[2px] md:gap-x-[10px] lg:gap-x-[10px] group  font-bold'><TbNumber2 className='text-[12px] md:text-[23px] lg:text-[23px] group-hover:text-orange duration-500    ' /><p className='font-nunito group-hover:text-orange duration-500 mt-[3px] text-[10px] md:text-lg lg:text-lg'>Two years warranty</p></Link>
              <Link className='flex items-center justify-center md:justify-start lg:justify-start font-nunito gap-x-[2px] md:gap-x-[10px] lg:gap-x-[10px] group  font-bold'><FaTruck className='text-[12px] md:text-[23px] lg:text-[23px] group-hover:text-orange duration-500' /><p className='font-nunito group-hover:text-orange duration-500 mt-[3px] text-[10px] md:text-lg lg:text-lg'>Free Shipping</p></Link>
              <Link className='flex items-center justify-center md:justify-start lg:justify-start font-nunito gap-x-[2px] md:gap-x-[10px] lg:gap-x-[10px] group font-bold'><BsArrowRepeat className='text-[12px] md:text-[23px] lg:text-[23px] group-hover:text-orange duration-500    ' /><p className='font-nunito group-hover:text-orange duration-500 mt-[3px] text-[10px] md:text-lg lg:text-lg'>Return policy in 30 days</p></Link>
          </Flex>
      </Container>
      </div>
  )
}

export default AdditionalInfo;