import React, { Component } from 'react';

export class SearchBox extends Component {
  render() {
    const { handleClick, searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <input
          id="search-input"
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          data-testid="query-input"
          value={searchText}
          onChange={onSearchTextChange}
        />
        <button
          className="btn btn-danger"
          type="submit"
          data-testid="query-button"
          onClick={handleClick()}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchBox;
