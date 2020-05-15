import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import RatingList from './RatingList';

class Rating extends React.Component {
  constructor(props) {
    super(props);

    const { productId } = props;
    if (!localStorage.getItem(productId)) {
      localStorage.setItem(productId, '[]');
    }

    const ratingList = JSON.parse(localStorage.getItem(productId));

    let id = 0;
    if (ratingList[ratingList.length - 1]) {
      id = ratingList[ratingList.length - 1].id;
    }

    this.state = {
      ratingList,
      rate: 0,
      email: '',
      comment: '',
      id,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.addRating = this.addRating.bind(this);
    this.commentTextArea = this.commentTextArea.bind(this);
  }

  handleChange(event) {
    const { id, value } = event;
    this.setState({ [id]: value });
  }

  handleRating(rate) {
    this.setState({ rate });
  }

  addRating() {
    const { rate, ratingList, comment, email, id } = this.state;
    const { productId } = this.props;
    this.setState({
      ratingList: [...ratingList, { rate, comment, email, id: id + 1 }], id: id + 1,
    });
    localStorage.setItem(
      productId,
      JSON.stringify([...ratingList, { rate, comment, email, id: id + 1 }]),
    );
  }

  commentTextArea() {
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
          {this.commentTextArea()}
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
