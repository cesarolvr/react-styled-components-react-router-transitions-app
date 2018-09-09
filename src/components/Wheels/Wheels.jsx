import React from 'react';
import styled, { keyframes } from 'styled-components';

import Container from '../common/Container/Container';

import wheelCarbon from '../../utils/assets/wheel-carbon.png';
import wheelGrafitti from '../../utils/assets/wheel-grafitti.png';
import wheelMetalic from '../../utils/assets/wheel-metalic.png';

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
`;
const WheelImage = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.paddingDefault}px;
  transition: all .2s ease;
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
`;
const Wheel = styled.div`
  cursor: pointer;
  opacity: ${props => props.active ? '1' : '0.5'}
  transform: ${props => props.active ? 'scale(1.1)' : ''};
  transition: all .2s ease;
  width: 160px;
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
  @media (max-width: ${props => props.theme.breakSm}px) {
    width: 180px;
    margin: 0px 20px;
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
  font-size: 1.4rem;
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
  return (
    <StyledWheels>
      <StyledWheelsContainer>
        <WheelsTitle>Wheels</WheelsTitle>
        <WheelsContent>
          <Wheel active>
            <WheelImage>
              <img src={wheelCarbon} alt=""/>
            </WheelImage>
            <WheelDescription>
              <WheelDescriptionName>20" Silver Metallic</WheelDescriptionName>
              <WheelDescriptionBonus>Included</WheelDescriptionBonus>
            </WheelDescription>
          </Wheel>
          <Wheel>
            <WheelImage>
              <img src={wheelCarbon} alt=""/>
            </WheelImage>
            <WheelDescription>
              <WheelDescriptionName>20" Silver Metallic</WheelDescriptionName>
              <WheelDescriptionBonus>Included</WheelDescriptionBonus>
            </WheelDescription>
          </Wheel>
          <Wheel>
            <WheelImage>
              <img src={wheelCarbon} alt=""/>
            </WheelImage>
            <WheelDescription>
              <WheelDescriptionName>20" Silver Metallic</WheelDescriptionName>
              <WheelDescriptionBonus>Included</WheelDescriptionBonus>
            </WheelDescription>
          </Wheel>
        </WheelsContent>
      </StyledWheelsContainer>
    </StyledWheels>
  );
};

export default Wheels;