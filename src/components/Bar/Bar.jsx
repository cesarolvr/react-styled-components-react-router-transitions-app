import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container/Container';

const StyledBar = styled.div`
  background: white;
  box-shadow: 0px 0px 45px #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
// padrão

// preço
const BarPartItemPrice = styled(BarPartItem)`
  ${BarPartItemTitle} {
    font-size: 16px;
  }
  ${BarPartItemText} {
    color: ${props => props.theme.primaryRed};
    font-size: 32px;
  }
`;
// preço

// modelo
const BarPartItemModel = styled(BarPartItem)`
  ${BarPartItemTitle} {
    font-size: 18px;
  }
`;
// modelo

// motor
const BarPartItemEngine = styled(BarPartItem)`
  ${BarPartItemTitle} {
    font-size: 18px;
  }
`;
// motor

// cor
const BarPartItemColor = styled(BarPartItem)`
  ${BarPartItemTitle} {
    font-size: 18px;
  }
`;
// cor

// rodas
const BarPartItemWheel = styled(BarPartItem)`
  ${BarPartItemTitle} {
    font-size: 18px;
  }
`;
// rodas

// rodas
const BarPartItemNext = styled(BarPartItem)`
  ${BarPartItemTitle} {
    font-size: 18px;
  }
`;
// rodas

const Bar = () => {
  return (
    <StyledBar>
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
          <BarPartItemColor>
            <BarPartItemTitle>Model R</BarPartItemTitle>
          </BarPartItemColor>
          <BarPartItemWheel>
            <BarPartItemTitle>Model R</BarPartItemTitle>
          </BarPartItemWheel>
        </BarPart>
        <BarPart>
          <BarPartItemNext>
            <BarPartItemTitle>
              Next
            </BarPartItemTitle>
          </BarPartItemNext>
        </BarPart>
      </StyledBarContainer>
    </StyledBar>
  );
};

export default Bar;
