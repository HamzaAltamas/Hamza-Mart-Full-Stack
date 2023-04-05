import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import GoTopButton from "./GoTopButton";
import Header from "./Header";
import Navbar from "./Navbar";

const RootLayout = () => {
  let [navScroll, setNavScroll] = useState(false)
  let navRef = useRef(null)
  let [navHeight,setNavheight] = useState()
  useEffect(() => {
    setNavheight(navRef.current.clientHeight)
  })
  useEffect(() => {
    let oldScroll = 0
    window.addEventListener("scroll", () => {
    window.pageYOffset > oldScroll ?  setNavScroll(true) : setNavScroll(false)
      oldScroll = window.pageYOffset
    })
   
  },[])

  return (
    
    <>
      
      <div id="nav-wrapper"  ref={navRef} className={`${navScroll && "up"} duration-500`}>
        <Navbar />
        <Header />
      </div>
      <GoTopButton/>
      <div style={{marginTop:`${navHeight}px`}}>
      
        <Outlet/>
        </div>
      <Footer/>
    </>
  );
};

export default RootLayout;
