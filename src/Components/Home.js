import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Recommended from './Recommended';
import Viewers from './Viewers';
import NewDisney from './NewDisney';
import Original from './Original';
import Trending from './Trending';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { setMovies } from '../features/Movies/moviesSlice';
import { selectUserName } from '../features/user/userSlice';

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let originals = [];
  let newDisney = [];
  let trending = [];

  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case 'new':
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case 'trending':
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });
      
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommended />
      <NewDisney />
      <Original />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  overflow-x: hidden;
  display: block;
  top: 0;
  padding: 5px 20px;

  &:after {
    background: url('/Images/home-background.png') center center / cover
      no-repeat fixed;

    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
export default Home;
