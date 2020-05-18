import React, { Component } from 'react';

export class Categories extends Component {
  render() {
    const { selectedCategory, onCategoryClick, categories } = this.props;

    return categories.map(({ id, name }) => (
      <div key={id}>
        <input
          className="btn btn-link"
          data-testid="category"
          type="button"
          id={id}
          value={name}
          name="categories"
          checked={selectedCategory === id}
          onClick={onCategoryClick}
        />
      </div>
    ));
  }
}

export default Categories;
