import React, { Component } from 'react';
import Rating from '../components/Rating';
import CrudCartItem from '../components/CrudCartItem';

export class ProductDetail extends Component {
  render() {
    const {
      location: { state: { price, thumbnail, title } },
      match: { params: { id } },
    } = this.props;

    return (
      <div className="container">
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={thumbnail} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title" data-testid="product-detail-name">
                  {`${title} - R$${price}`}
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CrudCartItem product={{ id, price, title }} />
        <Rating productId={id} />
      </div>
    );
  }
}

export default ProductDetail;
