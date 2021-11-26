import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Detail(props) {
  const {id} = useParams()
  const [detailData, setDetailData] = useState({});
  

  useEffect(()=>{
      db.collection('movies').doc(id)
      .get()
      .then((doc)=>{
        if(doc.exists){
          setDetailData(doc.data())
        }else{
          console.log('no data in firebase');
        }
      }).catch(err =>{
        console.log(err);
      })
    },[id])
  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt="tilte" />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/Images/play-icon-black.png" alt="icon" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/Images/play-icon-white.png" alt="icon" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <GroupWatch>
            <div>
              <img src="/Images/group-icon.png" alt="group-icon" />
            </div>
          </GroupWatch>
        </Controls>
        <Controls>{detailData.subTitle}</Controls>
        <Controls>{detailData.description}</Controls>
      </ContentMeta>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  min-height: cal(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 42px;
  padding: 0 calc(2vw + 3px);
`;

const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100%;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  font-size:18px;
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 46px;
  line-height: 1.6;
`;
const Player = styled.button`
  font-size: 16px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border-radius: 4px;
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 48px;
    
    img{
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0,0,0,0.5);
  border: 1px solid white;
  color: white;
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 54px;
  width: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.6);
  border-radius: 50%;
  border : 2px solid white;
  cursor: pointer;

 span{
   background-color: white;
   display: inline-block;
  

   &:first-child{
     height : 2px;
     transform: translate(1px, 0px) rotate(0deg);
     width: 16px;
    
   }

   &:nth-child(2){
    height : 16px;
     transform: translateX(-8px) rotate(0deg);
     width: 2px;
    
   }
 }
`
 const GroupWatch = styled.div`
  height: 54px;
  width: 54px;
  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div{
    height:44px;
    width:44px;
    background: rgb(0,0,0);
    border-radius: 50%;

    img{
      width:100%
    }
  }
`
export default Detail;
