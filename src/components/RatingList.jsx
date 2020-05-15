import React, { Component } from 'react';
import Rater from 'react-rater';

export class RatingList extends Component {
  render() {
    const { ratingList } = this.props;
    if (ratingList.length !== 0) {
      return (
        <div>
          {ratingList.map(({ rating, comment, email, id }) => (
            <div key={id} className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">{comment}</h1>
                <p className="lead">
                  <Rater total={5} rating={rating} interactive={false} />
                  {email}
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return <p>Cheguei aqui!</p>;
  }
}

export default RatingList;
