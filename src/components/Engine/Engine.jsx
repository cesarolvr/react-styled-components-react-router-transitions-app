import React from 'react';
import styled from 'styled-components';

import Container from '../common/Container/Container';
import Col from '../common/Col/Col';

import engineImage from '../../utils/assets/engine-1.png';

const StyledEngine = styled.div``;
const EngineContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`;

const EngineImage = styled.img`
  height: 100%;
`;

const EngineTitle = styled.h1`
  text-align: left;
  font-weight: 300;
  font-size: 3rem;
  color: ${props => props.theme.primaryBlue}
`;

const EngineList = styled.ul`
  list-style: none;
  padding: 0;
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
`;

const Engine = props => {
  return (
    <StyledEngine>
      <EngineContainer>
        <Col size="50%">
          <EngineImage src={engineImage} alt="" />
        </Col>
        <Col size="50%">
          <EngineTitle>Engine</EngineTitle>
          <EngineList>
            <ListItem selected>
              <ItemInfoFeatured>
                <span>75</span>
                <b>P</b>
              </ItemInfoFeatured>
              <ItemInfo>
                <span>75</span> kWh
              </ItemInfo>
              <ItemInfo>
                <span>275</span> miles range
              </ItemInfo>
              <ItemCheck />
            </ListItem>
            <ListItem>
              <ItemInfoFeatured>
                <span>75</span>
                <b>P</b>
              </ItemInfoFeatured>
              <ItemInfo>
                <span>75</span> kWh
              </ItemInfo>
              <ItemInfo>
                <span>275</span> miles range
              </ItemInfo>
              <ItemCheck />
            </ListItem>
            <ListItem>
              <ItemInfoFeatured>
                <span>75</span>
                <b>P</b>
              </ItemInfoFeatured>
              <ItemInfo>
                <span>75</span> kWh
              </ItemInfo>
              <ItemInfo>
                <span>275</span> miles range
              </ItemInfo>
              <ItemCheck />
            </ListItem>
          </EngineList>
        </Col>
      </EngineContainer>
    </StyledEngine>
  );
};

export default Engine;