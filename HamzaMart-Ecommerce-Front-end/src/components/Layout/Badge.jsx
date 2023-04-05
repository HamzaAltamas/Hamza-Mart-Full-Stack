import React from 'react'

const Badge = ({title}) => {
  return (
      <div className="absolute z-[999] top-[5%] left-[5%] py-[3px] px-[10px] bg-black text-white rounded-md">{ title}</div>
  )
}

export default Badge