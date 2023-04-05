import React from 'react'
import Badge from './Badge'
import Images from './Images'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { FaCartPlus } from 'react-icons/fa'
import { BsArrowRepeat } from 'react-icons/bs'
import { AiFillStar } from "react-icons/ai"
import { Items } from './Pagination'


const ProductCard = ({image,badge }) => {
  return (
      <div className='px-[10px] font-nunito '>
          <div className='w-full group shadow-md hover:shadow-xl duration-500 rounded-md overflow-hidden '>
            <div className='relative w-full overflow-hidden group border-orange border-b' >
              <Images className="w-full h-auto" imgsrc={image} />
              {!badge && <Badge title="New" />}
              <ul className='flex justify-center gap-x-4 absolute bottom-[-50px] w-full group-hover:bottom-[10px] duration-500'>
                  <li className='h-[44px] w-[44px] bg-orange rounded-full flex justify-center items-center text-xl text-white duration-500 hover:bg-white hover:text-orange shadow-lg'><BsFillSuitHeartFill className='mt-1'/></li>
                  <li className='h-[44px] w-[44px] bg-orange rounded-full flex justify-center items-center text-xl text-white duration-500 hover:bg-white hover:text-orange shadow-lg'><FaCartPlus className='mt-[3px]'/></li>
                  <li className='h-[44px] w-[44px] bg-orange rounded-full flex justify-center items-center text-xl text-white duration-500 hover:bg-white hover:text-orange shadow-lg'><BsArrowRepeat/></li>
              </ul>
              </div>
              <div className='p-3'>
                  <h4 className=' flex justify-between items-center'><span className='font-bold text-[18px]'>Product Name</span><span className='text-[14px] text-ashText font-semibold'>$44.00</span></h4>
                  <p className='text-orange flex mt-1'>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar/>
                  </p>
                  <h4 className='text-[15px] text-ashText mt-1'>Brand Name</h4>
              </div>
         </div>
      </div>
  )
}

export default ProductCard