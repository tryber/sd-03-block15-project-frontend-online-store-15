import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { addToCart, subToCart, deleteCartItem } from '../services/crudCart';

export class CartTableLine extends Component {
  constructor(props) {
    super(props);
    this.deleteButton = this.deleteButton.bind(this);
    this.quantityCrud = this.quantityCrud.bind(this);
  }

  deleteButton() {
    const {
      updateCartItems,
      item: { id },
    } = this.props;
    return (
      <th scope="row">
        <button
          type="button"
          onClick={() => {
            deleteCartItem(id);
            updateCartItems();
          }}
          className="btn text-danger"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </th>
    );
  }

  quantityCrud() {
    const { item: { title, price, id, quantity, availableQuantity }, updateCartItems, updateCartSize } = this.props;
    return (
      <td data-testid="shopping-cart-product-quantity">
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={() => {
            addToCart(title, price, id, availableQuantity);
            updateCartItems();
            updateCartSize();
          }}
          className="btn btn-link"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <span>{quantity}</span>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={() => {
            subToCart(id);
            updateCartItems();
          }}
          className="btn btn-link"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </td>
    );
  }

  render() {
    const { item: { title, price } } = this.props;
    return (
      <tr>
        {this.deleteButton()}
        <td data-testid="shopping-cart-product-name">{title}</td>
        <td>R$ {price}</td>
        {this.quantityCrud()}
      </tr>
    );
  }
}

export default CartTableLine;
