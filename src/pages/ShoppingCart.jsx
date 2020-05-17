import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartTable from '../components/CartTable';
import Navbar from '../components/Navbar';
import ShoppingCartButton from '../components/ShoppingCartButton';

export class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const cartSize = cartItems.length;
    this.state = { cartItems, cartSize };
    this.updateCartItems = this.updateCartItems.bind(this);
  }

  updateCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ cartItems });
  }

  render() {
    const { cartItems, cartSize } = this.state;
    return (
      <div>
        <Navbar>
          <ShoppingCartButton cartSize={cartSize} />
        </Navbar>
        <Link to="/">Voltar</Link>
        <CartTable cartItems={cartItems} updateCartItems={this.updateCartItems} />
        <Link data-testid="checkout-products" to={{ pathname: '/checkout', state: { cartItems } }}>
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
