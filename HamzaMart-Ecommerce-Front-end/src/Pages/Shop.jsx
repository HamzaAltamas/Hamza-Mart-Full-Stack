import React, { useEffect, useRef, useState } from 'react';
import BreadCrumbBanner from '../components/Layout/BreadCrumbBanner'
import Container from '../components/Layout/Container'
import Flex from '../components/Layout/Flex'
import ReactPaginate from 'react-paginate';
import Pagination from '../components/Layout/Pagination';
import SelectOptionDropdown from '../components/Layout/SelectOptionDropdown';
import LeftSIdebar from '../components/Layout/LeftSIdebar';
import { FaFilter,FaTimes } from 'react-icons/fa'

const Shop = () => {
  let [showItem, setShowItem] = useState(12)
  let [sidebarShow, setSidebarShow] = useState(false)
  let sideBarRef = useRef()

  // useEffect(() => {
  //   document.body.addEventListener("click", (e) => {
  //     !sideBarRef.current.contains(e.target) ? setSidebarShow(false) : setSidebarShow(true)
  //   })
  // },[])

  return (
    <>
      {console.log(sidebarShow)}
      <Container>
        <BreadCrumbBanner title="Products" />
        <Flex className="flex gap-x-5 relative">
          <div  ref={sideBarRef}  className={`${sidebarShow ? "block" : "hidden"} sm:block w-full sm:w-[25%] absolute sm:static z-[999999999] bg-[#fcfcfc] sm:bg-transparent p-5 sm:p-0`}>
            <div onClick={() => setSidebarShow((prev) => !prev)} className='w-full flex justify-end pb-3 hover:text-orange duration-300 sm:hidden'>
              <FaTimes />
            </div>
            <LeftSIdebar />
          </div>
          <div className=' relative w-full sm:w-[75%]'>
            <Flex className="flex  items-center px-[10px] gap-x-5">
              <div  className="flex items-center" >
                <FaFilter onClick={()=> setSidebarShow((prev)=>!prev)}  className='text-ashText sm:hidden hover:text-orange duration-300'/>
              </div>
              <SelectOptionDropdown
                dValue="Featured"
                title="Sort by"
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </SelectOptionDropdown>
              
               <SelectOptionDropdown
                dValue="12"
                title="Show"
                onChange={(e)=> setShowItem(Number(e.target.value))}
              >
                
                <option value="24">24</option>
                <option value="48">48</option>
             </SelectOptionDropdown>
            
            
           </Flex>

            <Pagination itemsPerPage={showItem} />
         
          </div>
        </Flex>
      </Container>
      
    </>
  )
}

export default Shop