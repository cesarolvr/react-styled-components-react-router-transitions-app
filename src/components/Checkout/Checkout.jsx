import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../common/Container/Container';

import colorBlue from '../../utils/assets/color-blue.png';

import iconRebuild from '../../utils/assets/IconSpinnerRed.svg';

const StyledCheckout = styled.div``;
const CheckoutContainer = styled(Container)`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 15% 70%;
  height: 100%;
  @media (max-width: ${props => props.theme.breakLg}px) {
    grid-template-rows: 10% 70%;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    grid-template-columns: 100%;
    grid-template-rows: 15% 100px auto;
  }
  @media (max-width: ${props => props.theme.breakSm}px) {
    grid-template-columns: 100%;
    grid-template-rows: 15% 80px auto;
  }
`;

const CheckoutImageWrapper = styled.div`
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

const CheckoutImage = styled.img`
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


const CheckoutTitle = styled.h1`
  text-align: left;
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 0;
  letter-spacing: .3rem;
  color: ${props => props.theme.primaryBlue}
  strong{
    font-weight: 400;
    color: ${props => props.theme.primaryBlue}
  }
  b{
    color: ${props => props.theme.primaryRed}
  }
  @media (max-width: ${props => props.theme.breakLg}px) {
    font-size: 2rem;
  }
  @media (max-width: ${props => props.theme.breakSm}px) {
    padding-left: ${props => props.theme.paddingDefault * 2}px;
  }
`;

const CheckoutReports = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.breakMd}px) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    padding: 0 ${props => props.theme.paddingDefault * 2}px;
    justify-content: space-around;
  }
`;

const LinkRebuild = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: ${props => props.theme.paddingDefault * 2}px;
  span{
    color: ${props => props.theme.primaryBlue}
    text-transform: uppercase;
    letter-spacing: .6rem;
    font-weight: 500;
    margin-right: 5px;
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    margin-top: 0;
    margin-bottom: ${props => props.theme.paddingDefault * 2}px;
  }
`;

const ListItemName = styled.p`
  margin: 0;
  color: ${props => props.theme.primaryBlue}
`;

const ListItemPrice = styled.span`
  color: ${props => props.theme.primaryRed}
`;

const ReportList = styled.ul`
  padding: 0;
  list-style: none;
  width: 100%;
  @media (max-width: ${props => props.theme.breakMd}px) {
    margin: 0;
  }
`;

const ReportListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3rem;
  padding: ${props => props.theme.paddingDefault}px 0;
  &:first-of-type{
    border-bottom: 1px solid #dedcdc;
    padding-bottom: ${props => props.theme.paddingDefault * 2}px;
    @media (max-width: ${props => props.theme.breakMd}px) {
      padding-bottom: ${props => props.theme.paddingDefault}px;      
    }
  }
  &:last-of-type{
    border-top: 1px solid #dedcdc;
    padding-top: ${props => props.theme.paddingDefault * 2}px;
    @media (max-width: ${props => props.theme.breakMd}px) {
      padding-top: ${props => props.theme.paddingDefault}px;      
    }
    ${ListItemName}, ${ListItemPrice}{
      font-size: 2rem;
      @media (max-width: ${props => props.theme.breakMd}px) {
        font-size: 1.5rem;    
      }
    }
  }
  @media (max-width: ${props => props.theme.breakMd}px) {
    font-size: 1rem;    
  }
`;

const Checkout = props => {
  return (
    <StyledCheckout>
      <CheckoutContainer>
        <CheckoutImageWrapper>
          <CheckoutImage src={colorBlue} alt="" />
        </CheckoutImageWrapper>
        <CheckoutTitle>
          Your <strong>Model</strong> <b>R</b>
        </CheckoutTitle>
        <CheckoutReports>
          <ReportList>
            <ReportListItem>
              <ListItemName>
                Starting price
              </ListItemName>
              <ListItemPrice>
                $63.000
              </ListItemPrice>
            </ReportListItem>
            <ReportListItem>
              <ListItemName>
                Starting price
              </ListItemName>
              <ListItemPrice>
                $63.000
              </ListItemPrice>
            </ReportListItem>
            <ReportListItem>
              <ListItemName>
                Starting price
              </ListItemName>
              <ListItemPrice>
                $63.000
              </ListItemPrice>
            </ReportListItem>
            <ReportListItem>
              <ListItemName>
                Starting price
              </ListItemName>
              <ListItemPrice>
                $63.000
              </ListItemPrice>
            </ReportListItem>
            <ReportListItem>
              <ListItemName>
                Starting price
              </ListItemName>
              <ListItemPrice>
                $63.000
              </ListItemPrice>
            </ReportListItem>
          </ReportList>
          <LinkRebuild to="/">
            <span>Rebuild</span>
            <img src={iconRebuild} alt=""/>
          </LinkRebuild>
        </CheckoutReports>
      </CheckoutContainer>
    </StyledCheckout>
  );
};

export default Checkout;