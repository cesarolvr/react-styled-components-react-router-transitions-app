import React from 'react';
import styled from 'styled-components';
import idx from 'idx';

import Container from '../common/Container/Container';

import { getDot, getColor } from '../../utils/js/utils';

const StyledColor = styled.div``;
const ColorContainer = styled(Container)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 80%;
  height: 100%;
  @media (max-width: ${props => props.theme.breakLg}px) {
    grid-template-rows: 20% 80%;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    grid-template-columns: 100%;
    grid-template-rows: 30% 200px auto;
  }
`;

const ColorImageWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align-left;
  @media (max-width: ${props => props.theme.breakMd}px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    max-height: 100%;
    width: auto;
  }
`;

const ColorImage = styled.img`
  margin-bottom: 10px;
  position: relative;
  left: ${props => props.theme.paddingDefault * -3}px;
  @media (max-width: ${props => props.theme.breakMd}px) {
    max-height: 100%;
    width: auto;
    left: 0;
    margin: auto;
  }
`;

const ColorTitleWrapper = styled.div`
  @media (max-width: ${props => props.theme.breakMd}px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: 0;
    padding: 0 ${props => props.theme.paddingDefault * 2}px;
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
`;

const ColorDescription = styled.p`
  text-align: left;
  color: ${props => props.theme.primaryGray}
  @media (max-width: ${props => props.theme.breakMd}px) {
    padding: 0px;
    margin-top: 0;
  }
`;

const ColorChoices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.paddingDefault * 4}px 0;
  @media (max-width: ${props => props.theme.breakMd}px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    padding: 0 ${props => props.theme.paddingDefault * 2}px;
    justify-content: space-around;
  }
`;
const ColorChoice = styled.div`
  width: 48px;
  height: 48px;
  border: 10px solid ${props => props.active ? '#2E3948' : '#F2F2F2'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  margin-top: ${props => props.theme.paddingDefault * -2}px;
  img{
    transform: scale(1.1);
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    width: 35px;
    height: 35px;
  }
`;

const ColorImageDescription = styled.div`
  margin: 0;
  text-align: left;
  padding-left: ${props => props.theme.paddingDefault * 2}px;
  @media (max-width: ${props => props.theme.breakMd}px) {
    padding: 0;
    margin: auto;
    text-align: center;
  }
`;
const ColorImageDescriptionName = styled.h3`
  margin: 0;
  font-weight: 300;
  font-size: 1.4rem;
  @media (max-width: ${props => props.theme.breakMd}px) {
    font-size: 1rem;
  }
`;
const ColorImageDescriptionBonus = styled.h4`
  margin: 0;
  font-weight: 400;
  font-size: 1.4rem;
  color: ${props => props.theme.primaryRed}
  @media (max-width: ${props => props.theme.breakMd}px) {
    font-size: 1rem;
  }
`;

const Color = props => {
  const color = idx(props, _ => _.color) || {};
  const items = idx(props, _ => _.color.items) || [];
  const selectedColor = idx(props, _ => _.selected.color) || {};
  const {
    setColor
  } = props;
  
  return (
    <StyledColor>
      <ColorContainer>
        <ColorImageWrapper>
          <ColorImage src={getColor(selectedColor.id)} alt="" />
          <ColorImageDescription>
            <ColorImageDescriptionName>
              Space Gray
              </ColorImageDescriptionName>
            <ColorImageDescriptionBonus>
              + ${selectedColor.price}
              </ColorImageDescriptionBonus>
          </ColorImageDescription>
        </ColorImageWrapper>
        <ColorTitleWrapper>
          <ColorTitle>
            Color
          </ColorTitle>
          <ColorDescription>
            {color.description}
            </ColorDescription>
        </ ColorTitleWrapper>
        <ColorChoices>
          {
            items.map((item, index) => (
              <ColorChoice onClick={() => setColor(item)} active={index === 0} key={item.id}>
                <img src={getDot(item.id)} alt={item.label} />
              </ColorChoice>
            ))
          }
          
          {/* <ColorChoice blue>
            <img src={dotBlue} alt="" />
          </ColorChoice>
          <ColorChoice gray>
            <img src={dotGray} alt="" />
          </ColorChoice> */}
        </ColorChoices>
      </ColorContainer>
    </StyledColor>
  );
};


export default Color;