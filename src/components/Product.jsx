import React, { Component } from 'react';

export class Product extends Component {
  render() {
    console.log(this.props);
    const {
      product: { title, price, thumbnail },
    } = this.props;
    return (
      <div className="col mb-3">
        <div className="card" style={{ width: '18rem' }}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
