import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import RatingList from './RatingList';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem('ratingList')) {
      localStorage.setItem('ratingList', '[]');
    }

    this.state = {
      ratingList: JSON.parse(localStorage.getItem('ratingList')),
      rate: 0,
      email: '',
      comment: '',
      id: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.addRating = this.addRating.bind(this);
    this.commentRating = this.commentRating.bind(this);
  }

  handleChange(event) {
    const { id, value } = event;
    this.setState({ [id]: value });
  }

  handleRating(rating) {
    this.setState({ rate: rating });
  }

  addRating() {
    const { rating, ratingList, comment, email, id } = this.state;
    this.setState({ ratingList: [...ratingList, { rating, comment, email, id: id + 1 }] });
    localStorage.setItem(
      'ratingList',
      JSON.stringify([...ratingList, { rating, comment, email, id: id + 1 }]),
    );
  }

  commentRating() {
    return (
      <div>
        <textarea
          data-testid="product-detail-evaluation"
          name="comment"
          id="comment"
          cols="60"
          rows="5"
          placeholder="Mensagem(opcional)"
          onChange={(event) => this.handleChange(event.target)}
        />
      </div>
    );
  }

  render() {
    const { ratingList, rate } = this.state;

    return (
      <div>
        <fieldset>
          Avaliações
          <div>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              onChange={(event) => this.handleChange(event.target)}
            />
          </div>
          <Rater total={5} rating={rate} onRate={({ rating }) => this.handleRating(rating)} />
          {this.commentRating()}
          <div className="button">
            <button type="submit" onClick={this.addRating}>
              Avaliar
            </button>
          </div>
        </fieldset>
        <RatingList ratingList={ratingList} />
      </div>
    );
  }
}

export default Rating;
