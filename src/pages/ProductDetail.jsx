import React, { Component } from 'react';
import * as api from '../services/api';

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    api.getProductFromId(id).then((product) =>
      this.setState({
        product,
        loading: false,
      })
    );
  }

  render() {
    const {
      product: { pictures, title, price },
      loading,
    } = this.state;
    if (loading) return <p>Loading</p>;
    return (
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={pictures[0].url} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5
                className="card-title"
                data-testid="product-detail-name"
              >{`${title} - R$${price}`}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
