import React, { Component } from 'react';
import Rating from '../components/Rating';
import CrudCartItem from '../components/CrudCartItem';
import Navbar from '../components/Navbar';
import ShoppingCartButton from '../components/ShoppingCartButton';

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    const cartSize = JSON.parse(localStorage.getItem('cartItems')).length;
    this.state = { cartSize };
    this.updateCartItems = this.updateCartItems.bind(this);
  }

  updateCartItems() {
    const cartSize = JSON.parse(localStorage.getItem('cartItems')).length;
    this.setState({ cartSize });
  }

  render() {
    const {
      location: {
        state: { price, thumbnail, title, free_shipping },
      },
      match: {
        params: { id },
      },
    } = this.props;
    const { cartSize } = this.state;

    return (
      <div>
        <Navbar>
          <ShoppingCartButton cartSize={cartSize} />
        </Navbar>
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
                  {free_shipping ? (
                    <p className="text-danger" data-testid="free-shipping">
                      Frete grátis
                    </p>
                  ) : null}
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CrudCartItem product={{ id, price, title }} updateCartSize={this.updateCartItems} />
          <Rating productId={id} />
        </div>
      </div>
    );
  }
}

export default ProductDetail;
