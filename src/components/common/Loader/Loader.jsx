import React from 'react';
import styled, { keyframes } from 'styled-components';

import Logo from '../Logo/Logo';

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const loaderInner = keyframes`
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
`;

const StyledLoader = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg{
    transform: scale(2)
  }
`;

const AnimatedIcon = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid ${props => props.theme.primaryBlue};
  animation: ${loader} 2s infinite ease;
  margin-bottom: ${props => props.theme.paddingDefault * 2}px;
  span {
    vertical-align: top;
    display: inline-block;
    width: 100%;
    background-color: ${props => props.theme.primaryBlue};
    animation: ${loaderInner} 2s infinite ease-in;
  }
`;

const Loader = () => {
  return (
    <StyledLoader>
      <AnimatedIcon>
        <span></span>
      </AnimatedIcon>
      <Logo />
    </StyledLoader>
  );
};

export default Loader;