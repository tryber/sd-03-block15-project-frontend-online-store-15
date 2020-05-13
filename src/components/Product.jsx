import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Product extends Component {
  render() {
    console.log(this.props);
    const {
      product: { title, price, thumbnail, id },
    } = this.props;
    return (
      <div className="col mb-3" data-testid="product">
        <div className="card text-center" style={{ width: '18rem' }}>
          <img
            src={thumbnail}
            alt={`${title} thumbnail`}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              R$
              {price}
            </p>
            <Link
              to={{ pathname: `/product/${id}`, state: { title, thumbnail, price } }}
              className="btn btn-danger"
              data-testid="product-detail-link"
            >
              Detalhes
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
