import * as React from 'react';
import styled from 'styled-components';

import Logo from '../common/Logo/Logo';
import NavHeader from '../NavHeader/NavHeader';

const StyledHeader = styled.header`
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.breakBigMobile}px) {
    &:after{
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 60px;
      background-image: linear-gradient(to right, transparent , white);
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <NavHeader />
  </StyledHeader>
);

export default Header;
