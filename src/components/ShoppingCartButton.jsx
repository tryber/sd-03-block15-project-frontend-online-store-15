import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export class ShoppingCartButton extends Component {
  render() {
    const { cartSize } = this.props;
    return (
      <Link to="/shoppingCart" data-testid="shopping-cart-button">
        <p data-testid="shopping-cart-size">{cartSize}</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    );
  }
}

export default ShoppingCartButton;
