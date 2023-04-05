import React from 'react'
import {FaAngleRight} from 'react-icons/fa'


const BreadCrumbBanner = ({title}) => {
  return (
      <div className='py-10 md:py-20 lg:py-24 '>
          <h1 className='font-nunito font-bold text-[30px] md:text-[40px] lg:text-5xl'>{ title}</h1>
          {/* bread crumb */}
          <p className='flex font-nunito text-ashText items-center gap-x-3 ml-[2px]  text-[12px] md:text-base'>Home <FaAngleRight/> {window.location.pathname.split("/")[1]}</p>
      </div>
  )
}

export default BreadCrumbBanner