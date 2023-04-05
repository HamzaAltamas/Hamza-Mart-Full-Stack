import Container from './Container'
import React from 'react'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import Images from './Images'

const Addvertise = () => {
  return (
    <div className='mt-5 md:mt-[70px] lg:mt-[100px]'>
      <Container>
       <Flex className="md:flex gap-x-[15px] md:gap-[20px]"> 
         <div className='md:w-2/4'>
            <Link to="#">
                <Images imgsrc="../src/assets/images/add1.png" className="w-full h-auto"/>
            </Link>
         </div>
         <div className='md:w-2/4 mt-[15px] md:mt-0 lg:mt-0'>
            <Link to="#" className='flex flex-col gap-y-[15px] md:gap-[20px]'>
                      <Images imgsrc="../src/assets/images/add2.png" className="w-full h-auto" />
                        <Images imgsrc="../src/assets/images/add3.png" className="w-full h-auto"/>
            </Link>
         </div>
       </Flex>
    </Container>
    </div>
  )
}

export default Addvertise