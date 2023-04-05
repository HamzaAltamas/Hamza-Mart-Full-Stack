import React from 'react'
import {  FaArrowRight} from 'react-icons/fa'
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-orange absolute top-[40%] translate-y-[-50%] right-[-15px] w-[46px] h-[46px] rounded-full  !flex  justify-center items-center text-white duration-500 shadow-lg hover:text-orange hover:bg-white hover:shadow-xl "
      
      onClick={onClick}
    >
    <FaArrowRight/>
    </div>
  );
}

export default SampleNextArrow