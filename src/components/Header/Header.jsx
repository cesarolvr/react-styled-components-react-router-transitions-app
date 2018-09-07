import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import Logo from '../common/Logo/Logo';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.primaryBlue};
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 1.5em;
`;


const Header = () => (
  <StyledHeader>
    <Logo />
    <AppTitle>Welcome to React</AppTitle>
  </StyledHeader>
)

export default Header;
