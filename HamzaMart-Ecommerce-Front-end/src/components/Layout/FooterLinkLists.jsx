import React from 'react'
import List from './List'

const FooterLinkLists = ({children,className,title}) => {
  return (
      <>
          <div className={className}>
              <h4 className='font-nunito font-bold text-orange text-center md:text-left text-[20px] md:text-[23px] lg:text-[25px] mb-1 md:mb-2 lg:mb-3'>{title}</h4>
              <List className='font-nunito text-center md:text-start text-white text-[12px] md:text-[14px] lg:text-[16px] flex flex-col gap-y-1 lg:gap-y-2'>
                  {children}
              </List>
          </div>
    </>
  )
}

export default FooterLinkLists