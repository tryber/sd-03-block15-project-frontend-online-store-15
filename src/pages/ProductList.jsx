import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">Carrinho de compras</Link>
        <input
          id="search-input"
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
