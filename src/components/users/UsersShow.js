import React    from 'react';
import { Link } from 'react-router-dom';
import Axios    from 'axios';

import Auth       from '../../lib/Auth';
import BackButton from '../utility/BackButton';
import Rating     from 'react-rating';

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

  handleChange = (rating, skill) => {
    Axios
      .post(`/api/users/${this.props.match.params.id}/skills/${skill.id}/rating`, { rating }, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then((res) => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.user);
    if (!this.state.user) return null;

    // const { userId } = Auth.getPayload();
    // const isCurrentUser = userId === this.state.user.id;
    return (

      <div className="container">
        <div className="image-tile col-md-6 ">
          <img src={this.state.user.image} className="img-responsive " />
        </div>
        <div className="col-md-6">
          <h1>{this.state.user.firstName}{this.state.user.lastName}</h1>
          <h3>aka {this.state.user.username}</h3>
          <h3>Who am I and what do I do?</h3>
          <p>{this.state.user.description}</p>

          <a href={this.state.user.linkedIn}>{this.state.user.linkedIn}</a>
          <h3>I am ready to volunteer my services in:</h3>
          {this.state.user.skills.map(skill => {
            return (
              <div key={skill.skill.id}>
                <h4 >{skill.skill.name}</h4>
                Average Rating: {skill.averageRatings}
                <div>
                  <Rating
                    onChange={(rating) => this.handleChange(rating, skill)}
                    initialRate={skill.averageRatings}
                    readonly={!Auth.getPayload() || Auth.getPayload() === this.state.user.id}
                  />
                </div>

              </div>
            );
          })}
        </div>
        <div className="col-md-12">
          <h3>I currently support:</h3>
          {this.state.user.nonprofits.map(nonprofit => <div key={nonprofit.id}style={{backgroundImage: `url(${nonprofit.imageSRC})`}} className="show-picture"></div>)}
          <BackButton />
          {!Auth.isAuthenticated() && <Link to={'/login'} className="btn button">Login to rate this volunteer</Link>}
          {Auth.isAuthenticated() && Auth.getPayload() === this.props.match.params.id &&
            <div>
              <Link to={`/users/${this.state.user.id}/edit`} className="btn button">
                <i className="fa fa-pencil" aria-hidden="true"></i>Edit
              </Link>
              <button className="btn button" onClick={this.deleteUser}>
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
