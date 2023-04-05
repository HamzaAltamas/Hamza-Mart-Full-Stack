import React from 'react'
import Slider from 'react-slick'
import Container from './Container'
import Heading from './Heading'
import "slick-carousel/slick/slick.css"; 
import ProductCard from './ProductCard';
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';




const BestSeller = () => {
   var settings = {
      infinite: true,
     speed: 500,
     dots:false,
      slidesToShow: 4,
      slidesToScroll: 1,
     initialSlide: 0,
     arrows: true,
       nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
          }
        }
     ]
   }
  return (
      <div className='mt-10 md:mt-[70px] lg:mt-[100px] products-slick'>
        <Container>
        <Heading title="Our Bestseller" />  
        <div>
        <div>
        <Slider {...settings}>
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={true}    
            />
            <ProductCard
              image="../src/assets/images/product2.png"   
              badge={false}    
            />
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={false}    
            />
            <ProductCard
              image="../src/assets/images/product2.png"   
              badge={false}    
            />
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={true}    
            />
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={false}    
            />
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={false}    
            />
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={true}    
            />
            <ProductCard
              image="../src/assets/images/product1.png"   
              badge={false}    
            />
        </Slider>
          </div>
        </div>
        </Container>
    </div>
  )
}

export default BestSeller;