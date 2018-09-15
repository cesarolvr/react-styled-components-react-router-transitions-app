import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  position: relative;
  margin: 0;
  padding: ${props => props.theme.paddingDefault * 2}px 0;
  overflow-x: scroll;
`;

const StyledItem = styled.li`
  color: ${props => props.theme.primaryBlue};
  border-bottom: ${props => props.active ? `2px solid ${props.theme.primaryRed}` : ''}
  font-size: 1rem;
  font-weight: 500;
  opacity: ${props => props.active ? `1` : '0.57'}
  margin: 0 ${props => props.theme.paddingDefault * 2}px;
  flex-shrink: 0;
  a {
    color: black;
    text-decoration: none;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    &:last-of-type{
      padding-right: ${props => props.theme.paddingDefault * 3}px;
    }
  }
`;

const NavHeader = () => (
  <StyledList>
    <StyledItem active>
      <Link title="Model R" to="/">
        Model R
      </Link>
    </StyledItem>
    <StyledItem>Model IQ</StyledItem>
    <StyledItem>Model Mobi</StyledItem>
    <StyledItem>Model Charlie</StyledItem>
    <StyledItem>Model Italy</StyledItem>
  </StyledList>
);

export default NavHeader;
