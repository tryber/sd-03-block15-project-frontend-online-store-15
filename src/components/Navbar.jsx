import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <Link to="/" className="navbar-brand">
          Online Store
        </Link>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </nav>
    );
  }
}
