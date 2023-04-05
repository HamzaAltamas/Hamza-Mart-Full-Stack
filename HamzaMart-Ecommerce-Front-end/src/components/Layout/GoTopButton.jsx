import React, { useEffect, useState } from 'react'
import { HiArrowSmUp } from 'react-icons/hi'


const GoTopButton = () => {
    let [showBtn,setShowBtn] = useState(false)
    let goTop = () => {
        window.scrollTo({top : 0, left : 0, behavior:"smooth"})
    }
    useEffect(() => {
        let hideBtn = () => {
            window.pageYOffset === 0 ? setShowBtn(false) : setShowBtn(true)
        }
        
        window.addEventListener("scroll",hideBtn)
    },[])
  return (
      <>
            <div className={`${showBtn ? "opacity-100" : "opacity-0"} fixed w-[50px] h-[50px] rounded-full flex justify-center items-center bg-orange bottom-[5%] group right-[5%] text-[20px] md:text-[30px] text-white z-[999999] shadow-xl  hover:shadow-2xl duration-500 animate-bounce `} onClick={goTop}><HiArrowSmUp /></div>
   </>
  )
}

export default GoTopButton