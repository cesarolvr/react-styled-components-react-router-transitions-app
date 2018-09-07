import * as React from 'react';
import styled from 'styled-components';

import Logo from '../common/Logo/Logo';
import NavHeader from '../NavHeader/NavHeader';

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: white;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <NavHeader />
  </StyledHeader>
)

export default Header;
