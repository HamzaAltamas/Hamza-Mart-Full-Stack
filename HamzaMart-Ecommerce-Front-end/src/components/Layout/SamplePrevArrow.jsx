import React from 'react'
import { FaArrowLeft} from 'react-icons/fa'
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="bg-orange absolute top-[40%] translate-y-[-50%] left-[-15px] w-[46px] h-[46px] rounded-full  !flex  justify-center items-center text-white duration-500 shadow-lg hover:text-orange hover:bg-white hover:shadow-xl z-10"
      onClick={onClick}
    ><FaArrowLeft/></div>
  );
}

export default SamplePrevArrow