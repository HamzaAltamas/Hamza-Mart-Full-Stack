import React from 'react'

const FooterSocialLinks = ({children}) => {
  return (
      <>
          <ul className='flex gap-x-4'>
              {children}
          </ul>
    </>
  )
}

export default FooterSocialLinks