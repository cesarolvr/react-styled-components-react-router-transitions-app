import React from 'react';
import { Link } from 'react-router-dom';


const Checkout = props => {
  return (
    <div>
      <h1>Checkout</h1>
      <Link to="/">
        Reiniciar
      </Link>
    </div>
  );
};

export default Checkout;