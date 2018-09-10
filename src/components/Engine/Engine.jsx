import React from 'react';
import styled from 'styled-components';
import idx from 'idx';

import Container from '../common/Container/Container';

import engineImage from '../../utils/assets/engine-1.png';
import engineImage2 from '../../utils/assets/engine-2.png';

const StyledEngine = styled.div``;
const EngineContainer = styled(Container)`
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

const EngineImage = styled.img`
  height: 100%;
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
    transform: rotate(90deg) scale(1.5);
  }
`;

const EngineTitle = styled.h1`
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

const EngineList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: ${props => props.theme.breakMd}px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    padding: 0px ${props => props.theme.paddingDefault * 2}px;
  }
`;

const ItemCheck = styled.div`
  width: 22px;
  height: 22px;
  background: ${props => props.theme.primaryRed}
  border-radius: 50%;
`;

const ItemInfo = styled.h4`
  margin: 0;
  font-weight: 400 };
  font-size: 1.3rem;
  letter-spacing: .1em;
  color: ${props => props.tertiaryGray };
  span{
    font-weight: 500;
    color: ${props => props.theme.primaryBlue};
  }
  @media (max-width: ${props => props.theme.breakLg}px) {
    font-size: 1rem;
  }
`;

const ItemInfoFeatured = styled(ItemInfo)`
  font-size: 1.8rem;
  span {
    font-weight: 300;
  }
  b{
    color: ${props => props.theme.primaryRed};
    margin-left: 5px;
  }
  @media (max-width: ${props => props.theme.breakLg}px) {
    font-size: 1.3rem;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.secondaryGray}
  padding: ${props => props.theme.paddingDefault}px ${props => props.theme.paddingDefault * 2}px;
  margin-bottom: ${props => props.theme.paddingDefault * 3}px;
  cursor: pointer;
  &:last-of-type{
    margin-bottom: 0;
  }
  ${ItemCheck}{
    background: ${props => props.selected ? props.theme.primaryRed : 'white'};
  }
  ${ItemInfo} {
    color: ${props => props.selected ? props.theme.tertiaryGray : props.theme.primaryGray};
    span{
      color: ${props => props.selected ? props.theme.primaryBlue : props.theme.primaryGray};
    }
    b{
      color: ${props => props.selected ? props.theme.primaryRed : props.theme.primaryGray};
    }
  }
  @media (max-width: ${props => props.theme.breakLg}px) {
    margin-bottom: ${props => props.theme.paddingDefault * 2}px;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    margin-bottom: ${props => props.theme.paddingDefault}px;
    padding: ${props => props.theme.paddingDefault}px;
  }
`;

const Engine = props => {
  const items = idx(props, _ => _.engine.items) || [];
  
  return (
    <StyledEngine>
      <EngineContainer>
          <EngineImage src={engineImage} alt=""/>
          <EngineTitle>Engine</EngineTitle>
          <EngineList>
            {
              items.map((item, index) => (
                <ListItem selected={index === 0} key={item.id}>
                  <ItemInfoFeatured>
                    <span>{item.kwh}</span>
                    <b>{item.type}</b>
                  </ItemInfoFeatured>
                  <ItemInfo>
                    <span>{item.kwh}</span> kWh
                  </ItemInfo>
                  <ItemInfo>
                    <span>{item.range}</span> miles range
                  </ItemInfo>
                  <ItemCheck />
                </ListItem>
              ))
            }
          </EngineList>
      </EngineContainer>
    </StyledEngine>
  );
};

export default Engine;