import React from 'react'
import { Link } from 'react-router-dom'

const FooterSocialIcons = ({children,href}) => {
  return (
      <>
          <li className='w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full text-orange border border-orange duration-500 hover:text-white hover:bg-orange'>
              <Link className="w-full h-full flex justify-center items-center text-base md:text-[25px]" to={href}>{ children}</Link>
          </li>
      </>
  )
}

export default FooterSocialIcons