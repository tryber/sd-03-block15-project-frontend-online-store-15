import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import BuyerInfo from '../components/BuyerInfo';
import PaymentForms from '../components/PaymentForms';
import CartTable from '../components/CartTable';


export default class Checkout extends Component {
  render() {
    const { location: { state: { cartItems } } } = this.props;
    return (
      <div>
        {/* <Link to="/shoppingcart">Voltar</Link> */}
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
