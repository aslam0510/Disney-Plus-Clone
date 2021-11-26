import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectOriginal } from '../features/Movies/moviesSlice';


function Original() {
  const movies = useSelector(selectOriginal);
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
      {movies && movies.map((movie,key) =>(
         <Wrap key={key}>
           {movie.id}
           <Link to={{pathname : `/detail/${movie.id}`, state : {movie}}}>
             <img src={movie.cardImg} alt={movie.title} />
         </Link>
         </Wrap>
       ))}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  padding-bottom: 20px;
  h4{
    font-size: 26px;
    padding-bottom: 20px;
    padding-left: 1px;
    padding-top: 15px;
  }
 
`

const Content = styled.div`
  padding: 0;
 display: grid;
 grid-gap: 25px;
 gap: 25px;
 grid-template-columns : repeat(4, minmax(0, 1fr));

 @media (max-width : 768px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
const Wrap = styled.div`
padding-top: 56.25%;
border-radius : 15px;
box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition : all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249,249,249,0.2);

img{
  inset: 0px;
  display: block;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  transition : opacity 500ms ease-in-out 0s;
  width: 100%;
  z-index:1;
  top:0;

  
}

&:hover{
      box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transform : scale(1.03);
      border-color: rgba(249,249,249,0.8);
    }
`

export default Original
