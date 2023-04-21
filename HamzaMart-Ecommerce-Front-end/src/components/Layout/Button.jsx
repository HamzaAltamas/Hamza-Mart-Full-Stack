import React from 'react'

const Button = ({title,onClick}) => {
  return (
    <button onClick={onClick} className='py-[10px] md:py-[20px] px-[25px] md:px-[35px] text-[10px] md:text-base font-nunito bg-orange text-white hover:bg-black duration-300'>{title}</button>
  )
}

export default Button