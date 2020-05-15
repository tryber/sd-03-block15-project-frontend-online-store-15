import React, { Component } from 'react';

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
    this.cartTable = this.cartTable.bind(this);
    this.cartTableBody = this.cartTableBody.bind(this);
  }

  cartTableBody() {
    const { cartItems } = this.props;
    return (
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={item.id}>
            <th scope="row">{index}</th>
            <td data-testid="shopping-cart-product-name">{item.title}</td>
            <td>{item.price}</td>
            <td data-testid="shopping-cart-product-quantity">{item.quantity}</td>
          </tr>
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
