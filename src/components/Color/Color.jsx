import React from 'react';
import styled from 'styled-components';

import Container from '../common/Container/Container';

import colorImage from '../../utils/assets/color-red.png';

const StyledEngine = styled.div``;
const ColorContainer = styled(Container)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 75%;
  height: 100%;
  @media (max-width: ${props => props.theme.breakLg}px) {
    grid-template-rows: 20% 80%;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    grid-template-columns: 100%;
    grid-template-rows: 10% 200px auto;
  }
`;

const ColorImage = styled.img`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  margin: auto;
  @media (max-width: ${props => props.theme.breakMd}px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    max-height: 100%;
    width: auto;
  }
`;

const ColorTitle = styled.h1`
  text-align: left;
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 0;
  color: ${props => props.theme.primaryBlue}
  @media (max-width: ${props => props.theme.breakLg}px) {
    font-size: 2rem;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: 0;
    padding: 0px ${props => props.theme.paddingDefault * 2}px;
  }
`;

const ColorDescription = styled.p`

`;

const Color = props => {
  return (
    <StyledEngine>
      <ColorContainer>
          <ColorImage src={colorImage} alt=""/>
          <ColorTitle>Color</ColorTitle>
          <ColorDescription>
            The 2019 Model R have 3 unique metalic color options. Each color was meticulously developed to look like something completely new to your eyes. 
          </ColorDescription>
      </ColorContainer>
    </StyledEngine>
  );
};

export default Color;