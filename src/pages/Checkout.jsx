import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import BuyerInfo from '../components/BuyerInfo';
import PaymentForms from '../components/PaymentForms';
import CartTable from '../components/CartTable';
import ShoppingCartButton from '../components/ShoppingCartButton';
import Navbar from '../components/Navbar';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = { cartSize: 0 };
  }

  render() {
    const {
      location: {
        state: { cartItems },
      },
    } = this.props;
    return (
      <div>
        <Navbar>
          <ShoppingCartButton />
        </Navbar>
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
