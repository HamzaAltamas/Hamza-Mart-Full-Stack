import React, { useEffect, useState, useRef } from "react";
import Container from "./Container";
import Dorpdown from "./Dorpdown";
import Flex from "./Flex";
import { HiBars3CenterLeft } from "react-icons/hi2";
import ListItem from "./ListItem";
import List from "./List";
import Searchbar from "./Searchbar";
import { BiSearchAlt } from "react-icons/bi"
import { FaUserAlt } from "react-icons/fa"
import { AiOutlineCaretDown } from "react-icons/ai"
import { HiShoppingCart } from "react-icons/hi2"
import { AiOutlineLogin } from "react-icons/ai";
import {FaTimes} from "react-icons/fa"
import Images from "./Images";
import { Link } from "react-router-dom";

const Header = () => {
  let [categoryShow, setCategoryShow] = useState(false);
  let [showSearchBar, setShowSearchar] = useState(false)
  let [showlogin, setShowlogin] = useState(false)
  let [showCart,setShowCart] = useState(false)
  
  let categoryRef = useRef();
  let searchRef = useRef()
  let loginRef = useRef()
  let cartRef = useRef()

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(e.target);
      categoryRef.current.contains(e.target) ? setCategoryShow(true) : setCategoryShow(false)
      
      searchRef.current.contains(e.target) ? setShowSearchar(true) : setShowSearchar(false);
  
      loginRef.current.contains(e.target)  ?  setShowlogin(true) : setShowlogin(false);
 
     cartRef.current.contains(e.target) ?  setShowCart(true)  :   setShowCart(false)
    });
    
  }, []);
  
 
  return (
    <>
      <div className=" bg-black shadow-lg ">
        <Container>
          
          <Flex className="flex justify-between items-center">
            <div>
              {/* category dropdown */}
              <Dorpdown dropef={categoryRef} className="relative">
                <p className="flex items-center gap-x-1  duration-500 font-bold hover:text-white font-nunito text-lg text-orange">
                  <HiBars3CenterLeft className="mr-[15px] lg:mr-0 md:mr-0 text-[20px]"/> <span className="hidden md:hidden lg:block ">Shop by category</span>
                </p>
                {categoryShow && (
                  <List className="absolute w-[180px] lg:w-[263px] bg-white shadow-lg lg:rounded-md top-7 font-nunito z-[99999] text-sm md:text-md lg:text-lg rounded-sm ">
                    <ListItem
                      item="Accesorries"
                      className="  py-[10px] px-[15px] lg:py-[15px] lg:px-[21px] border-b border-solid border-[#d1d1d1]  hover:text-orange duration-500 hover:pl-[40px]"
                    />
                    <ListItem
                      item="Furniture"
                      className="py-[10px] px-[15px] lg:py-[15px] lg:px-[21px] hover:font-semibold  border-b border-solid border-[#d1d1d1] hover:text-orange duration-500 hover:pl-[40px]"
                    />
                    <ListItem
                      item="Electronics"
                      className="py-[10px] px-[15px] lg:py-[15px] lg:px-[21px] border-b border-solid border-[#d1d1d1] hover:text-orange duration-500 hover:pl-[40px]"
                    />
                    <ListItem
                      item="Clothes"
                      className="py-[10px] px-[15px] lg:py-[15px] lg:px-[21px] border-b border-solid border-[#d1d1d1]
                      hover:text-orange duration-500 hover:pl-[40px]"
                    />
                    <ListItem
                      item="Bags"
                      className="py-[10px] px-[15px] lg:py-[15px] lg:px-[21px] border-b border-solid border-[#d1d1d1]
                      hover:text-orange duration-500 hover:pl-[40px]"
                    />
                    <ListItem
                      item="Home appliances"
                      className="py-[10px] px-[15px] lg:py-[15px] lg:px-[21px] hover:text-orange duration-500 hover:pl-[40px]"
                    />
                  </List>
                )}
              </Dorpdown>
            </div>
            {/* searct bar */}
            <div className="w-[600px] relative overflow-hidden mr-4 lg:mr-0">
              <Searchbar placeholder="Search here..." className="font-nunito shadow-lg w-full py-1 px-1 lg:py-[10px] lg:px-5
               border-none outline-none rounded-sm md:rounded-md text-[12px] md:text-lg lg:text-lg" searchref={searchRef} />
              <div className="absolute top-[7px] md:top-2 lg:top-[23%]  right-2 lg:right-3  duration-500 hover:text-orange text-[18px] md:text-[25px] lg:text-[30px]"
                style={{
                  transform: 
                !showSearchBar ? "translateX(100px)":"translateX(0)" }}>
                <BiSearchAlt 
                /></div>
            </div>
            <div className="flex items-center gap-x-[25px] 
            md:gap-x-[30px]  lg:gap-x-[40px] relative">
              {/* login dropdown */}
              <div className="flex items-center" ref={loginRef}><div className="flex text-orange hover:text-white duration-500"><FaUserAlt /><AiOutlineCaretDown className="hidden md:block lg:block"/></div>
                {showlogin &&
                  <Dorpdown 
                  >
                    <List className="absolute z-[99999]  right-[40px] w-[180px]  lg:w-[263px] bg-white shadow-lg rounded-sm lg:rounded-md top-7 font-nunito overflow-hidden text-sm md:text-md lg:text-lg">
                    <ListItem
                      item="My Account"
                      className="py-[10px] px-[15px] lg:py-[15px] lg:px-[21px] text-center   border-b border-solid border-[#d1d1d1]  hover:text-white duration-500 hover:bg-orange"
                    />
                    <ListItem
                      item="Log Out"
                      className=" text-center hover:font-semibold py-[10px] px-[15px] lg:py-[15px] lg:px-[21px] hover:text-white  duration-500 hover:bg-orange"
                    />
                   
                    
                  </List>
                  </Dorpdown>}
        
              </div>
              {/* cart dropdown */}
              <div  ref={cartRef}><HiShoppingCart className="hover:text-white text-orange duration-500 text-[20px] mt-[2px]" />
              {showCart &&
                  <Dorpdown className="fixed z-[99999] w-[90%] md:w-[360px] lg:w-[360px]  right-1 md:right-5 lg:right-10 shadow-lg bg-white rounded-sm font-nunito overflow-hidden">
                    <div>
                      <div className="w-full pt-2 md:pt-2 lg:pt-5 
                      pr-2 md:pr-2 lg:pr-5 pl-2 md:pl-2 lg:pl-5">
                        {/* cart items start */}
                         <Flex className="flex justify-between mb-2 lg:mb-5 ">
                          <div className="w-[60px] h-[60px]  
                            md:w-[80px] md:h-[80px] 
                            lg:w-[100px] lg:h-[100px] mr-1"><Images imgsrc="../src/assets/images/cartImg.png" className="w-full h-full" />
                          </div>
                          <Flex className=" text-sm md:text-md lg:text-[16px] font-semibold lg:font-bold flex items-center w-[65%]  justify-between">
                            <div>
                              <h3 className="mb-2">
                              Black Sunglass
                              </h3>
                              <h3>
                              $44.00
                            </h3>
                            </div>
                            <Flex className="flex items-center text-end"><FaTimes className="duration-500 hover:text-blackHov text-[20px] md:mr-3       lg:mr-0"/></Flex>
                          </Flex>
                        </Flex>
                        <Flex className="flex justify-between mb-2 lg:mb-5 ">
                          <div className="w-[60px] h-[60px]  
                            md:w-[80px] md:h-[80px] 
                            lg:w-[100px] lg:h-[100px] mr-1"><Images imgsrc="../src/assets/images/cartImg.png" className="w-full h-full" />
                          </div>
                          <Flex className=" text-sm md:text-md lg:text-[16px] font-semibold lg:font-bold flex items-center w-[65%]  justify-between">
                           <div>      
                              <h3 className="mb-2">
                              Black Sunglass
                              </h3>
                              <h3>
                              $44.00
                            </h3>
                            </div>
                            <Flex className="flex items-center text-end"><FaTimes className="duration-500 hover:text-blackHov text-[20px] md:mr-3       lg:mr-0"/></Flex>
                          </Flex>
                        </Flex>
                        {/* cart items end */}
                      </div>
                    </div>
                  {/* sub total and button start */}
                    <div className="bg-orange p-2 md:p-2 lg:p-5">
                     <h3 className="mb-2  text-sm md:text-md lg:text-lg font-bold lg:font-bold text-white">
                              Subtotal: <span>$440</span>
                      </h3>
                      <div className="flex justify-between">
                        <Link className="w-[48%] flex justify-center items-center h-[50px] font-bold rounded-sm border border-white text-white text-sm md:text-md lg:text-lg">View Cart</Link>
                        <Link className="w-[48%] flex justify-center items-center h-[50px] font-bold bg-white rounded-sm border-transparent text-sm md:text-md lg:text-lg">Checkout</Link>
                      </div>
                      </div>
                  {/* sub total and button end */}
                  </Dorpdown>}
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
