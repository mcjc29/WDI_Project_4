import React    from 'react';
import { Link } from 'react-router-dom';
import Axios    from 'axios';

import Auth       from '../../lib/Auth';
import BackButton from '../utility/BackButton';
// import UsersForm from './UsersForm';

class UsersShow extends React.Component {
  state = {
    user: null,
    rating: 0
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      // .then(res => console.log(res.data ))
      .catch(err => console.log(err));
  }


  deleteUser = () => {
    Axios
      .delete(`/api/users/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  submitRating = (skill) => {
    Axios
      .post(`/api/users/${this.props.match.params.id}/skills/${skill.id}/rating`, { rating: this.state.rating }, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(() => {
        this.props.history.push(`/api/users/${this.props.match.params.id}`);
      })
      .catch(err => console.log(err));
  }

  handleChange = rating => this.setState({ rating });

  render() {
    if (!this.state.user) return null;
    console.log(this.state.user);
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <img src={this.state.user.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{this.state.user.userName}</h3>
          <h3>{this.state.user.firstName}</h3>
          <h4>{this.state.user.lastName}</h4>
          <h4>{this.state.user.description}</h4>
          <a href={this.state.user.linkedIn}>{this.state.user.linkedIn}</a>

          {this.state.user.skills.map(skill =>
            <div key={skill.skill.id}>
              <h4 >{skill.skill.name}</h4>
              Average Rating: {skill.averageRatings}
              <div className="star-rating">
                <div className="star-rating__wrap">
                  <input className="star-rating__input"
                    id="star-rating-5"
                    type="radio"
                    name="rating"
                    value="5"
                    onChange={() => this.handleChange(5)}
                  />
                  <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-5" title="5 out of 5 stars"></label>
                  <input className="star-rating__input"
                    id="star-rating-4"
                    type="radio"
                    name="rating"
                    value="4"
                    onChange={() => this.handleChange(4)}
                  />
                  <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-4" title="4 out of 5 stars"></label>
                  <input className="star-rating__input"
                    id="star-rating-3"
                    type="radio"
                    name="rating"
                    value="3"
                    onChange={() => this.handleChange(3)}
                  />
                  <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-3" title="3 out of 5 stars"></label>
                  <input className="star-rating__input"
                    id="star-rating-2"
                    type="radio"
                    name="rating"
                    value="2"
                    onChange={() => this.handleChange(2)}
                  />
                  <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-2" title="2 out of 5 stars"></label>
                  <input className="star-rating__input"
                    id="star-rating-1"
                    type="radio"
                    name="rating"
                    value="1"
                    onChange={() => this.handleChange(1)}
                  />
                  <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-1" title="1 out of 5 stars"></label>
                </div>
              </div>
              <button onClick={() => this.submitRating(skill)}>Rate ME</button>

            </div>)}
          {this.state.user.nonprofits.map(nonprofit => <h4 key={nonprofit.id}>{nonprofit.name}</h4>)}

          <BackButton />
          {Auth.isAuthenticated() && Auth.getPayload().userId === this.props.match.params.id &&
            <div>
              <Link to={`/users/${this.state.user.id}/edit`} className="standard-button">
                <i className="fa fa-pencil" aria-hidden="true"></i>Edit
              </Link>
              <span>{' '}</span>
              <button className="main-button" onClick={this.deleteUser}>
                <i className="fa fa-trash" aria-hidden="true"></i>Delete
              </button>
            </div>
          }

        </div>
      </div>
    );
  }
}

export default UsersShow;
