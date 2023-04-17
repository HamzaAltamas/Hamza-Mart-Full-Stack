import React from 'react'
import {FaAngleRight} from 'react-icons/fa'


const BreadCrumbBanner = ({title}) => {
  return (
      <div className='py-10 md:py-20 lg:py-24 '>
          <h1 className='font-nunito font-bold text-[25px]  mb-3 md:text-[35px] lg:text-5xl'>{window.location.pathname.split("/")[1].charAt(0).toUpperCase() + window.location.pathname.split("/")[1].slice(1)}</h1>
          {/* bread crumb */}
          <p className='flex font-nunito text-ashText items-center gap-x-3 ml-[2px]  text-[12px] md:text-base'>Home <FaAngleRight/> {window.location.pathname.split("/")[1].charAt(0).toUpperCase() + window.location.pathname.split("/")[1].slice(1)}</p>
          
      </div>
  )
}

export default BreadCrumbBanner