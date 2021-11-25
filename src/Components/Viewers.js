import React from 'react';
import styled from 'styled-components';

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="Images/viewers-disney.png" alt="1" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source  src="/videos/1564674844-disney.mp4"  type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="Images/viewers-pixar.png" alt="2" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source  src="/videos/1564676714-pixar.mp4"  type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="Images/viewers-marvel.png" alt="3" />
        <video  autoPlay={true} loop={true} playsInline={true}>
          <source  src="/videos/1564676115-marvel.mp4"  type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="Images/viewers-starwars.png" alt="4" />
        <video  autoPlay={true} loop={true} playsInline={true}>
          <source  src="/videos/1608229455-star-wars.mp4"  type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="Images/viewers-national.png" alt="5" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source  src="/videos/1564676296-national-geographic.mp4"  type="video/mp4" />
        </video>
      </Wrap>

    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  padding: 30px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width : 768px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
   border-radius: 20px;
   box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   cursor: pointer;
   position: relative;
  transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
   border: 3px solid rgba(249,249,249,0.1);
  overflow: hidden;
   
    img{
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
      position:absolute;
      transition: opactiy 500ms ease-in-out 0s;
      z-index:1;
      top:0;
    }

    video{
      width: 100%;
      height: 100%;
    }

    &:hover{
      box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transform : scale(1.05);
      border-color: rgba(249,249,249,0.8);
    }
`;
export default Viewers
