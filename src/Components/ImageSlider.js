import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
  return (
 
      <Carousel {...settings}>
        <Wrap>
         <a>
           <img src="/Images/slider-scales.jpg" alt="slider-1"/>
         </a>
       </Wrap>
       <Wrap>
         <a>
           <img src="/Images/slider-badging.jpg" alt="slider-1"/>
         </a>
       </Wrap>
       <Wrap>
         <a>
           <img src="/Images/slider-scale.jpg" alt="slider-1"/>
         </a>
       </Wrap>
       <Wrap>
         <a>
           <img src="/Images/slider-badag.jpg" alt="slider-1"  />
         </a>
       </Wrap>
       
      </Carousel>
   
  );
}

const Carousel = styled(Slider)`
  padding-top: 10px;
  margin: 20px 25px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opactiy 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 13px;
      color: rgb(150,158,171);
     padding: 10px 0
    }
  }

  li.slick-active button:before{
    color:white;
  }

  .slick-list{
    overflow: initial;
  }

  /* .slick-prev{
    left: -50px
  }
  .slick-next{
    right : -50px
  } */
`
  const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a{
      border-radius: 4px;
      box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      display: block;
      position: relative;
      padding:4px;
      
      img{
      width: 100%;
      height: 100%;
    

    }
      &:hover{
      border: 4px solid white;
      padding: 0;
      transition-duration: 300ms;
    }
    }
    
   
  `
;
export default ImageSlider;
