import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Images from './Images'

const MiddleAdd = () => {
  return (
      <>
          <div className='mt-10 md:mt-[70px] lg:mt-[100px]'>
              <Container>
                  <Link to="#">
                      <Images className="w-full h-auto" imgsrc="../src/assets/images/middleAdd.png"/>
                  </Link>
              </Container>
        </div>
   </>
  )
}

export default MiddleAdd