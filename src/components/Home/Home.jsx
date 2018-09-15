import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from '../common/Container/Container';

import carImage from '../../assets/car-home.png';
import arrowNext from '../../assets/IconArrowRightRed.svg';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const HomeContainer = styled(Container)`
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const HomeBanner = styled.div`
  flex-grow: 1;
  padding-top: 2%;
  @media (max-width: ${props => props.theme.breakMd}px) {
    display: flex;
    align-items: center;
  }
`;

const Box = styled.section`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px 10%;
`;

const BoxTitle = styled.h1`
  position: relative;
  margin: 0;
  font-weight: 400;
  font-size: 2rem;
  letter-spacing: .6rem;
  color: ${props => props.theme.primaryRed}
  @media (max-width: ${props => props.theme.breakMd}px) {
    font-size: 1.4rem;
  }
`;

const BoxSubTitle = styled.h2`
  margin: 0 0 0 -10px;
  display: block;
  font-size: 10rem;
  font-weight: 300;
  line-height: 10rem;
  text-transform: uppercase;
  letter-spacing: .6rem;
  strong{
    font-weight: 500;
    color: ${props => props.theme.primaryRed}
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    font-size: 5rem;
    line-height: .8em;
    margin: 0 0 0 -5px;
  }
  @media (max-width: ${props => props.theme.breakXs}px) {
    font-size: 4.5rem;
    strong{
      margin-left: -10px;
    }
  }
`;

const BoxImageCar = styled.img`
  margin: ${props => props.theme.paddingDefault * -3.5}px auto 0 auto;
  right: -50px;
  position: relative;
  object-fit: contain;
  max-width: 80%;
  @media (max-width: ${props => props.theme.breakMd}px) {
    margin-top: 0;
    right: auto;
  }
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  position: relative;
  margin: 0 auto;
  margin-top: ${props => props.theme.paddingDefault * -1}px;
  display: flex;
  align-items: center;
  text-decoration: none;
  span {
    letter-spacing: .6rem;
    color: ${props => props.theme.primaryBlue};
    font-weight: 500;
    transition: margin-right .2s ease;
    margin-right: ${props => props.theme.paddingDefault}px;
  }
  &:hover{
    span{
      margin-right: ${props => props.theme.paddingDefault * 2}px;
    }
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    margin-top: 0;
  }
`;

const HomeDock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.paddingDefault}px
           ${props => props.theme.paddingDefault * 2}px;
`;

const HomeDockItem = styled.div`
  border-bottom: 2px solid ${props => props.theme.primaryRed};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HomeDockItemTitle = styled.h2`
  margin: 0;
  font-size: 2.5rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.primaryRed}
  small {
    font-size: 1rem;
    margin-left: 5px;
    font-weight: 300;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    font-size: 2rem;
  }
`;
const HomeDockItemLabel = styled.p`
  margin: 0;
  font-weight: 300;
  @media (max-width: ${props => props.theme.breakMd}px) {
    font-size: .8rem;
  }
`;


const Home = () => (
  <StyledHome>
    <HomeContainer>
      <HomeBanner>
        <Box>
          <BoxTitle>
            Build your
          </BoxTitle>
          <BoxSubTitle>
            Model <strong>R</strong>
          </BoxSubTitle>
          <BoxImageCar src={carImage} alt="Model R image. The new model of CarsVentures" />
          <StyledLink title="Go to choose the engine" to="/engine">
            <span>
              Begin
            </span>
            <img src={arrowNext} alt="Next step" />
          </StyledLink>
        </Box>
      </HomeBanner>
      <HomeDock>
        <HomeDockItem>
          <HomeDockItemTitle>
            2.5
            <small>s</small>
          </HomeDockItemTitle>
          <HomeDockItemLabel>
            From 0 to 100
          </HomeDockItemLabel>
        </HomeDockItem>
        <HomeDockItem>
          <HomeDockItemTitle>
            420
            <small>mi</small>
          </HomeDockItemTitle>
          <HomeDockItemLabel>
            Miles range
          </HomeDockItemLabel>
        </HomeDockItem>
        <HomeDockItem>
          <HomeDockItemTitle>
            250
            <small>mp/h</small>
          </HomeDockItemTitle>
          <HomeDockItemLabel>
            Max speed
          </HomeDockItemLabel>
        </HomeDockItem>
      </HomeDock>
    </HomeContainer>
  </StyledHome>
);

export default Home;
