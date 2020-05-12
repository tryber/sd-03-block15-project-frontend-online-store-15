import React, { Component } from 'react';

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <input id="search-input" className="form-control" type="search" placeholder="Search" aria-label="Search" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
