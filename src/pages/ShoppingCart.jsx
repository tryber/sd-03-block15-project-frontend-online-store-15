import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
