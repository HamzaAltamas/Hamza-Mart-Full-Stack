import React, { useState, useEffect } from "react";
import Images from "./Images";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Container from "./Container";

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    let scrollWidt = (e) => {
      window.innerWidth <= 1023 ?  setShow(false)  :  setShow(true);
    };
    scrollWidt();
    window.addEventListener("resize", scrollWidt);
  }, []);

  return (
    <>
      <nav className="bg-white">
        <Container>
          <Flex className="lg:flex justify-between  items-center">
            <div className="w-[20%] ">
              <Images
                className="w-[100px] md:w-[120px] lg:w-[150px]"
                imgsrc="../src/assets/images/logo.png"
              />
            </div>

            <div className="w-full md:w-full lg:w-[60%] lg:flex lg:justify-end md:justify-end items-center ">
              <HiOutlineBars3BottomRight
                className="ml-auto mt-2 md:mt-2
                  text-[25px] lg:text-[30px] lg:hidden absolute top-2.5 right-2.5 sm:mb-2"
                onClick={() => setShow(!show)}
              />
              {show && (
                <List className="lg:flex items-center text-center lg:justify-end lg:gap-x-10 font-nunito text-base font-semibold mt-5 lg:mt-0">
                  <ListItem
                    className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 my-2.5 lg:my-0 text-sm md:text-md lg:text-lg "
                    item="Home"
                    href="/"
                  />
                  <ListItem
                    className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 my-2.5 lg:my-0 text-sm md:text-md lg:text-lg"
                    item="About"
                    href="/about"
                  />
                  <ListItem
                    className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 my-2.5 lg:my-0 text-sm md:text-md lg:text-lg"
                    item="Service"
                  />
                  <ListItem
                    className="relative duration-100 after:content-[''] after:absolute after:left-0 after:bg-orange  after:bottom-[-1px] after:w-[0] after:h-[2px]  hover:after:w-[100%] after:duration-200 my-2.5 lg:my-0 text-sm md:text-md lg:text-lg"
                    item="Contact"
                  />
                </List>
              )}
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
