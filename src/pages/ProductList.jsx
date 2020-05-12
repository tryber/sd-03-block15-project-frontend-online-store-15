import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: true,
    };
    this.categoriesList = this.categoriesList.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        categories,
        loading: false,
      });
    });
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
    const { loading } = this.state;
    if (loading) return <p>loading</p>;
    return (
      <div>
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
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          Carrinho de compras
        </Link>
        {this.categoriesList()}
      </div>
    );
  }
}
