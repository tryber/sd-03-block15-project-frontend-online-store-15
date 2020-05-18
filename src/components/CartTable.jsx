import React, { Component } from 'react';
import CartTableLine from './CartTableLine';

const cartTableHeader = () => (
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Preço</th>
      <th scope="col">Quantidade</th>
    </tr>
  </thead>
);

export class CartTable extends Component {
  constructor(props) {
    super(props);
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.state = { cartItems };
    this.updateCartItems = this.updateCartItems.bind(this);
    this.cartTable = this.cartTable.bind(this);
    this.cartTableBody = this.cartTableBody.bind(this);
  }

  updateCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ cartItems });
  }

  cartTableBody() {
    const { updateCartSize } = this.props;
    const { cartItems } = this.state;
    return (
      <tbody>
        {cartItems.map((item, index) => (
          <CartTableLine
            key={item.id}
            item={item}
            index={index}
            updateCartItems={this.updateCartItems}
            updateCartSize={updateCartSize}
          />
        ))}
      </tbody>
    );
  }

  cartTable() {
    const { cartItems } = this.props;
    if (cartItems.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <table className="table table-striped">
        {cartTableHeader()}
        {this.cartTableBody()}
      </table>
    );
  }

  render() {
    return this.cartTable();
  }
}

export default CartTable;
