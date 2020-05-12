import React, { Component } from 'react';
import Product from './Product';

export class ProductList extends Component {
  render() {
    const { products } = this.props;

    if (products.results) {
      return (
        <div className="row row-cols-1 row-cols-md-2">
          {products.results.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      );
    }
    return (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
  }
}

export default ProductList;
