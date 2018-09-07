import * as React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  position: relative;
  margin: 0;
  padding: ${props => props.theme.paddingDefault * 2}px 0;
  margin-right: ${props => props.theme.paddingDefault * 3}px;
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