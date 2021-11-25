import React from 'react';
import styled  from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';

function Home() {
  return (
    <Container>
      <ImageSlider/>
      <Viewers />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  overflow-x: hidden ;
  display: block;
  top:0;
  padding: 5px 10px;

  &:after{
    background: url('/Images/home-background.png') center center / cover no-repeat fixed;
    
    content:'';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index:-1
  }
`;
export default Home
