import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from './Images';
import { Link, redirect } from 'react-router-dom';

const Banner = () => {
let [dotActive,setDotActive] = useState(0)
   let settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: true,
      beforeChange: (prev, next) => {
      setDotActive(next);
  },
      appendDots: dots => (
        <div>
          <ul style={{ display:"block"}}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={
            i === dotActive ?
              {
               fontFamily: "'Nunito', sans-serif",
                width: "30px",
              
                borderRight: "3px black solid",
                padding: "15px 15px 15px 0",
                position: "absolute",
                fontWeight: "bold",
                color: "black",
              }
              :
              {
                fontFamily: "'Nunito', sans-serif",
                width:"30px",
                
                borderRight: "3px white solid",
                padding: "15px 15px 15px 0",
                position: "absolute",
                fontWeight: "bold",
                color: "transparent",
                
              }}
        
        >
          0{i + 1}
        </div>
     ),
       responsive: [
        {
          breakpoint: 576,
          settings: {
         
            dots: true,
              appendDots: dots => (
        <div>
          <ul style={{ display:"block"}}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={
            i === dotActive ?
              {
                fontFamily: "'Nunito', sans-serif",
             
                color: "black",
                borderRight: "2px black solid",
                position: "absolute",
                padding: "4px 3px",
                fontSize:"12px",
                fontWeight: "400",
          
              }
               :
              {
                fontFamily: "'Nunito', sans-serif",
        
                borderRight: "2px white solid",  
                position: "absolute",
                padding:"4px 3px",
                fontSize:"12px",
                color: "transparent",
              fontWeight:"400",
              }} 
        >
          0{i + 1}
        </div>
     ),
          }
        },
      ]
    };

    
  return (
      <>
       <div className=''>
        <Slider  {...settings}>
          <Link>
           <div><Images className="w-full h-auto block" imgsrc="../src/assets/images/banner.png"/></div>
          </Link>
          <div>
           <Link>
           <div><Images className="w-full h-auto block" imgsrc="../src/assets/images/banner.png"/></div>
          </Link>
          </div>
          <div>
             <Link>
           <div><Images className="w-full h-auto block" imgsrc="../src/assets/images/banner.png"/></div>
          </Link>
          </div>
          
        </Slider>
      </div>
    </>
  )
}

export default Banner