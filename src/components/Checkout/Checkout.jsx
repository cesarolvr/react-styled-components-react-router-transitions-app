import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../common/Container/Container';

const StyledCheckout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CheckoutTitle = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 0;
`;

const StyledCheckoutContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  ${CheckoutTitle}{
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


const Checkout = props => {
  return (
    <StyledCheckout>
      <StyledCheckoutContainer>
        <CheckoutTitle>Checkout</CheckoutTitle>
        <Link to="/">
          Reiniciar
        </Link>
      </StyledCheckoutContainer>
    </StyledCheckout>
  );
};

export default Checkout;