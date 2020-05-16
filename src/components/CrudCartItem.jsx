import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export class CrudCartItem extends Component {
  constructor(props) {
    super(props);

    this.state = ({ quantity: 1 });

    this.addProductToCart = this.addProductToCart.bind(this);
    this.subProductToCart = this.subProductToCart.bind(this);
  }

  addProductToCart() {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  }

  subProductToCart() {
    const { quantity } = this.state;
    if (quantity > 0) this.setState({ quantity: quantity - 1 });
  }

  render() {
    const { quantity } = this.state;
    return (
      <div>
        <h5>Quantidade</h5>
        <button type="button" onClick={this.addProductToCart}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <span>{quantity}</span>
        <button type="button" onClick={this.subProductToCart}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <input type="button" value="Adicionar ao Carrinho" />
      </div>
    );
  }
}

export default CrudCartItem;
