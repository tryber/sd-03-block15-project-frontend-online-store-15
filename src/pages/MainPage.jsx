import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import SearchBox from '../components/SearchBox';
import ProductList from '../components/ProductList';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: true,
      callAPI: false,
      searchText: '',
      products: [],
    };
    this.categoriesList = this.categoriesList.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categories,
        loading: false,
      });
    });
  }

  componentDidUpdate() {
    const { callAPI, searchText } = this.state;
    if (callAPI) {
      api.getProductsFromCategoryAndQuery('MLB5672', searchText)
        .then((products) => this.setState({
          products,
          callAPI: false,
        }));
    }
  }

  searchProducts() {
    this.setState({ callAPI: true });
  }

  categoriesList() {
    const categories = this.state.categories;

    return categories.map(({ id, name }) => (
      <div key={id} data-testid="category">
        <input type="radio" id={id} value={id} name="categories" />
        <label htmlFor={id}>{name}</label>
      </div>
    ));
  }

  render() {
    const { loading, searchText, products } = this.state;
    if (loading) return <p>loading</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">{this.categoriesList()}</div>
          <div className="col">
            <SearchBox
              handleClick={() => this.searchProducts}
              searchText={searchText}
              onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
            />
            <Link to="/shoppingCart" data-testid="shopping-cart-button">
              Carrinho de compras
            </Link>
            <ProductList products={products} />
          </div>
        </div>
      </div>
    );
  }
}
