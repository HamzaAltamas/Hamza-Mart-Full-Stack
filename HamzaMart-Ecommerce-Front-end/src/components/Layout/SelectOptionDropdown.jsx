import React from 'react'
import Flex from './Flex'

const SelectOptionDropdown = ({children,dValue,id,title,onChange}) => {
  return (
      <div>
            <Flex className="lg:flex items-center font-nunito gap-x-2 font-semibold text-ashText">
              <p className='w-[90px]' >{title}: </p>
              <select id={ id} className="bg-gray-50 border focus:border-[#000] text-sm rounded-md 
              border-[#d1d1d1] font-nunito w-[100%] px-[10px] py-2 font-bold" defaultValue={dValue} onChange={onChange}>
                  <option value={dValue}>{ dValue}</option>
              {children}
              </select>
              </Flex>
    </div>
  )
}

export default SelectOptionDropdown