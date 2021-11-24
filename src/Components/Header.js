import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <NavIcon src="/Images/logo.svg" height="60px" width="180px" />
      <NavMenu>
        <a href="/home">
          <img
            src="/Images/home-icon.svg"
            alt="Home"
            width="30px"
            height="30px"
          />
          <span>HOME</span>
        </a>
        <a href="/home">
          <img
            src="/Images/search-icon.svg"
            alt="Home"
            width="30px"
            height="30px"
          />
          <span>SEARCH</span>
        </a>
        <a href="/home">
          <img
            src="/Images/watchlist-icon.svg"
            alt="Home"
            width="30px"
            height="30px"
          />
          <span>WATHCLIST</span>
        </a>
        <a href="/home">
          <img
            src="/Images/original-icon.svg"
            alt="Home"
            width="30px"
            height="30px"
          />
          <span>ORIGINALS</span>
        </a>
        <a href="/home">
          <img
            src="/Images/movie-icon.svg"
            alt="Home"
            width="30px"
            height="30px"
          />
          <span>MOVIES</span>
        </a>
        <a href="/home">
          <img
            src="/Images/series-icon.svg"
            alt="Home"
            width="30px"
            height="30px"
          />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <LoginButton>LOGIN</LoginButton>
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

  &:hover{
    background-color: #f9f9f9;
    color: black;
    cursor: pointer;
    border-color: transparent;
  }
`;
const NavIcon = styled.img``;

export default Header;
