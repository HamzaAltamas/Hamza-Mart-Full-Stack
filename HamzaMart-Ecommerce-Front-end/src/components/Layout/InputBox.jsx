import React from 'react'

const InputBox = (props) => {
  return (
   <div>
    <h4 className='font-bold text-[12px] md:text-[16px]' >{props.title}</h4>
    <props.as className="py-[15px] md:py-[20px] text-[14px] md:text-base  border-b !shadow-none !outline-none w-full" placeholder={props.placeholder}/>
    </div>
  )
}

export default InputBox