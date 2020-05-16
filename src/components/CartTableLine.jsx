import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { addToCart, subToCart, deleteCartItem } from '../services/crudCart';

export class CartTableLine extends Component {
  render() {
    const {
      item: { title, price, id, quantity },
      updateCartItems,
    } = this.props;
    return (
      <tr>
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
        <td data-testid="shopping-cart-product-name">{title}</td>
        <td>R$ {price}</td>
        <td data-testid="shopping-cart-product-quantity">
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={() => {
              addToCart(title, price, id);
              updateCartItems();
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
      </tr>
    );
  }
}

export default CartTableLine;
