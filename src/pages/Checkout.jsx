import React, { Component } from 'react';
import BuyerInfo from '../components/BuyerInfo';
import PaymentForms from '../components/PaymentForms';
import CartTable from '../components/CartTable';

export default class Checkout extends Component {
  render() {
    const { location: { state: { cartItems } } } = this.props;
    return (
      <div>
        <CartTable cartItems={cartItems} />
        <BuyerInfo />
        <PaymentForms />
        <button type="submit" className="btn btn-primary">
          Comprar
        </button>
      </div>
    );
  }
}
