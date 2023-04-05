import React from 'react'

const Heading = ({title}) => {
  return (
      <div className='py-[10px] px-[20px] md:py-[10px] md:px-[25px] lg:py-[10px] lg:px-[35px]  bg-orange inline-block relative after:absolute after:content-[""] after:h-[100%] after:w-[2px]  after:bg-orange after:top-[0px] after:right-[-3%] 
      mb-[25px] md:mb-[30px] lg:mb-[50px]
      '>
          <h2 className='text-white font-nunito font-bold text-[15px] md:text-[30px] lg:text-[30px]'>{ title}</h2>
    </div>
  )
}

export default Heading