import React, { Component } from 'react';
import BuyerInfo from '../components/BuyerInfo';
import PaymentForms from '../components/PaymentForms';
import CartTable from '../components/CartTable';

export default class Checkout extends Component {
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
        <CartTable
          cartItems={cartItems}
          updateCartItems={this.updateCartItems}
          updateCartSize={updateCartSize}
        />
        <BuyerInfo />
        <PaymentForms />
        <button type="submit" className="btn btn-primary">
          Comprar
        </button>
      </div>
    );
  }
}
