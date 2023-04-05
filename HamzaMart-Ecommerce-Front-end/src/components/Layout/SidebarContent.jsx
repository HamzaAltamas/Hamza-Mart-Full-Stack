import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import Flex from './Flex'
import LeftSideBarItem from './LeftSideBarItem'
import  {category,color , brands , price} from '../../data/data'
const SidebarContent = ({dropDown , title,children,data}) => {
    let [drop,setDrop] = useState(dropDown)
    let [show, setShow] = useState(dropDown)
    
  return (
      <div className='mb-12'>
          {
              drop ?
                  <div onClick={()=>setShow((prev)=>!prev)} className="flex items-center justify-between cursor-pointer mb-8">
              <h3 className='font-bold font-nunito text-lg'>
                  {title}
              </h3>
              <AiFillCaretDown/>
                  </div>
                  :
                   <h3 className='cursor-pointer font-bold font-nunito text-lg mb-8'>
                {title}
              </h3>
          }
          {show && 
            <div>
                  {data.map(item => 
                      item.subCategory ? (
                          
                          <LeftSideBarItem subDropDown={item.subCategory && true} title={item.keyname}>
                          {item.subCategory &&
                              item.subCategory.map(item =>
                               <LeftSideBarItem title={item.keyname} ></LeftSideBarItem>  
                               )}
                      </LeftSideBarItem>)
                      :
                    (  <LeftSideBarItem subDropDown={item.subCategory && true} title={item.keyname}   color={item.colorCode}>
                      </LeftSideBarItem>)
  
                  )}

          </div>
              
          }
          {
              !drop &&
              <div>
                   {data.map(item => 
                      item.subCategory ? (
                          
                          <LeftSideBarItem subDropDown={item.subCategory && true} title={item.keyname}>
                          {item.subCategory &&
                              item.subCategory.map(item =>
                               <LeftSideBarItem title={item.keyname} ></LeftSideBarItem>  
                               )}
                      </LeftSideBarItem>)
                      :
                    (  <LeftSideBarItem  subDropDown={item.subCategory && true} title={item.keyname}  color={item.colorCode}>
                      </LeftSideBarItem>)
  
                  )}

              </div>
          }
        
          
    </div>
  )
}

export default SidebarContent