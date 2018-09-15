import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../common/Container/Container';

import iconRebuild from '../../assets/IconSpinnerRed.svg';
import buildingImage from '../../assets/building.png';

const StyledBuilding = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;


const BuildingTitle = styled.h1`
  font-size: 4rem;
  left: 0;
  margin: 20px 0 10px 0;
  opacity: .2;
  @media (max-width: ${props => props.theme.breakMd}px) {
    font-size: 2rem;
  }
`;
const BuildingSubTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.5em;
  opacity: .4;
  max-width: 100%;
  margin: 0 auto 50px auto;
  @media (max-width: ${props => props.theme.breakMd}px) {
    font-size: 1rem;
    line-height: auto;
    padding: 0px 30px;
  }
`;

const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  margin: ${props => props.theme.paddingDefault * 5}px;
  span{
    color: ${props => props.theme.primaryBlue}
    font-weight: 500;
    margin-right: 15px;
    font-size: 1.3rem;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    margin: ${props => props.theme.paddingDefault * 2}px;
  }
`;

const Building = () => {
  return (
    <StyledBuilding>
      <Container>
        <BuildingTitle>Not yet!</BuildingTitle>
        <BuildingSubTitle>
          Our best engineers are still working on this model.
          <br />
          Rumors will be the most revolutionary autonomous car in history.
        </BuildingSubTitle>
        <img src={buildingImage} alt="" />
        <LinkBack to="/">
          <span>Voltar para o Model R</span>
          <img src={iconRebuild} alt="Rebuild the proccess" />
        </LinkBack>
      </Container>
    </StyledBuilding>
  );
};

export default Building;
