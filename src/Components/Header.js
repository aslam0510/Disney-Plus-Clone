import { auth, provider } from '../firebase';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
  setsignOutState,
} from './../features/user/userSlice';

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push('/home');
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if(!userName){
      auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => console.log(err));
    }else if(userName){
      auth.signOut().then(()=>{
        dispatch(setsignOutState());
        history.push('/')
      }).catch(err =>alert(err.message))
    }
   
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <NavIcon src="/Images/logo.svg" height="60px" width="180px" />

      {!userName ? (
        <LoginButton onClick={handleAuth}>LOGIN</LoginButton>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img
                src="/Images/home-icon.svg"
                alt="Home"
                width="30px"
                height="30px"
              />
              <span>HOME</span>
            </Link>
            <Link>
              <img
                src="/Images/search-icon.svg"
                alt="Home"
                width="30px"
                height="30px"
              />
              <span>SEARCH</span>
            </Link>
            <Link>
              <img
                src="/Images/watchlist-icon.svg"
                alt="Home"
                width="30px"
                height="30px"
              />
              <span>WATHCLIST</span>
            </Link>
            <Link>
              <img
                src="/Images/original-icon.svg"
                alt="Home"
                width="30px"
                height="30px"
              />
              <span>ORIGINALS</span>
            </Link>
            <Link>
              <img
                src="/Images/movie-icon.svg"
                alt="Home"
                width="30px"
                height="30px"
              />
              <span>MOVIES</span>
            </Link>
            <Link>
              <img
                src="/Images/series-icon.svg"
                alt="Home"
                width="30px"
                height="30px"
              />
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <SignOut>
            <UserImage src={userPhoto} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
  }

  span {
    padding-top: 5px;
    margin-left: 5px;
    letter-spacing: 1.5px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
const LoginButton = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  margin-right: 23px;
  padding: 10px 22px;
  width: 120px;
  letter-spacing: 2px;
  align-items: center;
  border-radius: 4px;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    cursor: pointer;
    border-color: transparent;
  }
`;
const NavIcon = styled.img``;

const UserImage = styled.img`
  height: 100%;
  border-radius: 20px;
  
  
`;

const DropDown = styled.div`
  position: absolute;
    top: 42px;
   right: 18px;
    width: 150px;
    letter-spacing: 3.5px;
    font-size: 22px;
    cursor: pointer;
    padding: 10px;
    background: rgba(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    opacity: 0;

  
`;
const SignOut = styled.div`
 position: relative;
 height: 48px;
 width: 48px;
 display :flex;
 margin-right: 10px;
 justify-content: center;
 align-items: center;

 &:hover{
   ${DropDown}{
     opacity: 1;
     transition-duration: 1s;
   }
 }
`;

export default Header;
