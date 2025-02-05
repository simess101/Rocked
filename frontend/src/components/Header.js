import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-image: url('/assets/images/rock-climbing-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 3rem 1rem;
  text-align: center;
  color: #fff;
  position: relative;

  &::after {
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const Title = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  position: relative;
  z-index: 1;
`;

const Subtitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  position: relative;
  z-index: 1;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Reach New Heights</Title>
    <Subtitle>Your Adventure Begins Here</Subtitle>
  </HeaderContainer>
);

export default Header;
