import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartTable from '../components/CartTable';

export class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.state = { cartItems };
    this.updateCartItems = this.updateCartItems.bind(this);
  }

  updateCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ cartItems });
  }

  render() {
    const { cartItems } = this.state;
    const { updateCartSize } = this.props;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <CartTable
          cartItems={cartItems}
          updateCartItems={this.updateCartItems}
          updateCartSize={updateCartSize}
        />
        <Link data-testid="checkout-products" to={{ pathname: '/checkout', state: { cartItems } }}>
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

export default ShoppingCart;
