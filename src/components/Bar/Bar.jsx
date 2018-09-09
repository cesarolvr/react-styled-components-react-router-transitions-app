import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../common/Container/Container';
import idx from 'idx';

import dotRed from '../../utils/assets/dot-red.svg';
// import dotBlue from '../../utils/assets/dot-blue.svg';
// import dotGray from '../../utils/assets/dot-gray.svg';

import wheelCarbon from '../../utils/assets/wheel-carbon.png';

import arrowNext from '../../utils/assets/IconArrowRightRed.svg';

const StyledBar = styled.div`
  background: white;
  box-shadow: 0px 0px 45px #dedede;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-height: ${props => props.status === 'opened' ? '200px' : '0'};
  bottom: ${props => props.status === 'opened' ? '0' : '-100px'};
  transition: all .2s ease;
`;

const StyledBarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BarPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: ${props => props.grow ? 1 : 'initial'}
  padding: 0px ${props => props.theme.paddingDefault * 4}px;
  &:first-of-type{
    padding-left: 0;
  }
  &:last-of-type{
    padding-right: 0;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    padding: 0;
  }
`;

// padrão
const BarPartItem = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: ${props => props.theme.paddingDefault}px;
`;

const BarPartItemTitle = styled.h3`
  margin: 0;
  font-weight: 400;
`;
const BarPartItemText = styled.p`
  margin: 0;
  line-height: 1em;
`;

// preço
const BarPartItemPrice = styled(BarPartItem)`
  ${BarPartItemTitle} {
    font-size: 1rem;
  }
  ${BarPartItemText} {
    color: ${props => props.theme.primaryRed};
    font-size: 2rem;
    @media (max-width: ${props => props.theme.breakMd}px) {
      font-size: 1.6rem;
    }
  }
`;

// modelo
const BarPartItemModel = styled(BarPartItem)`
  ${BarPartItemTitle} {
    font-size: 1.2rem;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    display: none;
  }
`;

// motor
const BarPartItemEngine = styled(BarPartItem)`
  ${BarPartItemTitle} {
    font-size: 1.2rem;
    span{
      color: ${props => props.theme.primaryRed};
      margin-left: 5px;
    }
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    display: none;
  }
`;

// item com imagem (cor e roda)
const BarPartItemImage = styled(BarPartItem)`
  img {
    width: 40px;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    display: none;
  }
`;

// rodas
const BarPartItemNext = styled(BarPartItem)`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.primaryBlue};
    ${BarPartItemTitle} {
      font-size: 1.2rem;
      margin-right: ${props => props.theme.paddingDefault}px;
      text-transform: lowercase;
      font-size: 1.4rem;
    }
  }
`;

const Bar = props => {
  const next = idx(props, _ => _.next) || "";
  const status = idx(props, _ => _.status) || "";
  return (
    <StyledBar status={status}>
      <StyledBarContainer>
        <BarPart grow>
          <BarPartItemPrice>
            <BarPartItemTitle>Total</BarPartItemTitle>
            <BarPartItemText>$63.000</BarPartItemText>
          </BarPartItemPrice>
          <BarPartItemModel>
            <BarPartItemTitle>Model R</BarPartItemTitle>
          </BarPartItemModel>
          <BarPartItemEngine>
            <BarPartItemTitle>
              75
              <span>
                P
              </span>
            </BarPartItemTitle>
          </BarPartItemEngine>
          <BarPartItemImage>
            <img src={dotRed} alt="Cor do carro" />
          </BarPartItemImage>
          <BarPartItemImage>
            <img src={wheelCarbon} alt="Roda do carro" />
          </BarPartItemImage>
        </BarPart>
        <BarPart>
          <BarPartItemNext>
            <Link to={next}>
              <BarPartItemTitle>
                Next
              </BarPartItemTitle>
              <img src={arrowNext} alt="Próxima etapa" />
            </Link>
          </BarPartItemNext>
        </BarPart>
      </StyledBarContainer>
    </StyledBar>
  );
};

export default Bar;
