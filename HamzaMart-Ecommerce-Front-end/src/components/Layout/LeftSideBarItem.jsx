import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const LeftSideBarItem = (props) => {
      let [drop,setDrop] = useState(props.subDropDown)
    let [show,setShow] = useState(false)
  return (
      <>
          {
              drop ?
                  <div onClick={()=>setShow((prev)=>!prev)} className="flex items-center justify-between cursor-pointer  border-b border-ashText py-5 text-ashText font-nunito">
            
              <div className='flex items-center'>
              { props.color  &&
                <span className="inline-block w-[11px] h-[11px] rounded-full mr-1" style={{ background: props.color }}></span>
              }
              <h3 >
                {props.title}
              </h3>
              </div>
            
              {!show ? <AiOutlinePlus/> : <AiOutlineMinus/>}
                  </div>
                  :
                   <div onClick={()=>setShow((prev)=>!prev)} className="flex items-center justify-between cursor-pointer  border-b border-ashText py-5 text-ashText font-nunito">
            
              <div className='flex items-center'>
              { props.color &&
                <span className="inline-block w-[11px] h-[11px] rounded-full mr-1" style={{ background: props.color }}></span>
              }
              <h3 >
                {props.title}
              </h3>
              </div>
                  </div>
          }
          {show && 
            <div>
                  {props.children}
              
          </div>
              
          }
          
        
    </>
  )
}

export default LeftSideBarItem