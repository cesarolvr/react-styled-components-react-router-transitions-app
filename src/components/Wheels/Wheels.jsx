import React from 'react';
import styled, { keyframes } from 'styled-components';
import idx from 'idx';

import Container from '../common/Container/Container';

import { getWheel } from '../../utils/js/utils';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledWheels = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const WheelsTitle = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 0;
`;

const StyledWheelsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  ${WheelsTitle}{
    display: inline-block;
    flex-grow: 0;
    @media (max-width: ${props => props.theme.breakSm}px) {
      margin-top: 0;
      font-size: 1.4rem;
      text-align: left;
      padding-left: ${props => props.theme.paddingDefault * 1.6}px;
    }
  }
`;

const WheelsContent = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: space-around;
  @media (max-width: ${props => props.theme.breakSm}px) {
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;
const WheelDescription = styled.div`
  opacity: 0;
  transition: opacity .2s ease;
  min-height: 120px;
`;
const WheelImage = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.paddingDefault}px;
  transition: all .2s ease;
  width: 70%;
  img{
    position: relative;
  }
  &:after{
    content: '';
    width: 100%;
    height: 30px;
    background: radial-gradient(#3d3d3d,  transparent, transparent);
    position: absolute;
    opacity: .5;
    bottom: 0;
    left: 0;
    border-radius: 1000%;
    transition: bottom .2s ease;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    width: 100%;
  }
`;
const Wheel = styled.div`
  width: 190px;
  cursor: pointer;
  flex-direction: column;
  display: flex;
  align-items: center;
  opacity: ${props => props.active ? '1' : '0.5'}
  transform: ${props => props.active ? 'scale(1.1)' : ''};
  transition: all .2s ease;
  ${WheelDescription} {
    opacity: ${props => props.active ? '1' : '0'}
  }
  &:hover{
      opacity: 1;
      transform: scale(1.1);
      ${WheelDescription} {
        opacity: 1;
      }
      ${WheelImage}{
        margin-top: -20px;
        margin-bottom: ${props => props.theme.paddingDefault + 20}px;
        &:after{
          bottom: -20px;
          opacity: .4;
        }
        img {
          animation: ${rotateAnimation} infinite 5s linear;
        }
      } 
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    width: 120px;
    margin: 0px ${props => props.theme.paddingDefault * 2}px;
    flex-shrink: 0;
    ${WheelDescription} {
      opacity: 1;
    }
    &:first-of-type{
      padding-left: ${props => props.theme.paddingDefault * 2}px;
    }
    &:last-of-type{
      padding-right: ${props => props.theme.paddingDefault * 2}px;
    }
  }
`;

const WheelDescriptionName = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${props => props.theme.primaryBlue}
  @media (max-width: ${props => props.theme.breakMd}px) {
    font-size: 1rem;
  }
`;
const WheelDescriptionBonus = styled.p`
  margin: 0;
  font-size: 1.4rem;
  color: ${props => props.theme.primaryRed}
  @media (max-width: ${props => props.theme.breakMd}px) {
    font-size: 1rem;
  }
`;


const Wheels = props => {
  const items = idx(props, _ => _.wheels.items) || [];
  return (
    <StyledWheels>
      <StyledWheelsContainer>
        <WheelsTitle>Wheels</WheelsTitle>
        <WheelsContent>
          {
            items.map((item, index) => (
              <Wheel active={index === 0} key={item.id}>
                <WheelImage>
                  <img src={getWheel(item.id)} alt=""/>
                </WheelImage>
                <WheelDescription>
                  <WheelDescriptionName>{item.label}</WheelDescriptionName>
                  <WheelDescriptionBonus>{item.price === 0 ? 'Included' : item.price}</WheelDescriptionBonus>
                </WheelDescription>
              </Wheel>
            ))
          }
        </WheelsContent>
      </StyledWheelsContainer>
    </StyledWheels>
  );
};

export default Wheels;