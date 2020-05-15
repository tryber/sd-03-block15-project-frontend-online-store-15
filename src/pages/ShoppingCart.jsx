import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartTable from '../components/CartTable';

export class ShoppingCart extends Component {
  render() {
    const { location: { state: { cartItems } } } = this.props;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <CartTable cartItems={cartItems} />
        <Link data-testid="checkout-products" to={{ pathname: '/checkout', state: { cartItems } }}>
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
