import * as React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  color: 
`;

const StyledItem = styled.li`
  color: ${props => props.theme.primaryBlue};
  font-size: 1rem;
  font-weight: 500;
  opacity: ${props => props.active ? `1` : '0.57'}
  margin: 0 ${props => props.theme.paddingDefault * 2}px;
  border-bottom: ${props => props.active ? `2px solid ${props.theme.primaryRed}` : ''}
`;

const NavHeader = () => {
  return (
    <StyledList>
      <StyledItem active>
        Model R
      </StyledItem>
      <StyledItem>Model IQ</StyledItem>
      <StyledItem>Model Mobi</StyledItem>
      <StyledItem>Model Charlie</StyledItem>
      <StyledItem>Model Italy</StyledItem>
    </StyledList>
  );
};

export default NavHeader;