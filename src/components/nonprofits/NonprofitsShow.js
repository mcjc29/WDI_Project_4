import React    from 'react';
import { Link } from 'react-router-dom';
import Axios    from 'axios';

import Auth       from '../../lib/Auth';
import BackButton from '../utility/BackButton';

class NonprofitsShow extends React.Component {
  state = {
    nonprofit: null
  }

  componentWillMount() {
    Axios
      .get(`/api/nonprofits/${this.props.match.params.id}`)
      .then(res => this.setState({ nonprofit: res.data }))
      .catch(err => console.log(err));
  }

  deleteNonprofit = () => {
    Axios
      .delete(`/api/nonprofits/${this.props.match.params.id}`, {
        headers: { 'Authorisation': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.nonprofit) return null;
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <img src={this.state.nonprofit.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{this.state.nonprofit.name}</h3>
          <h4>{this.state.nonprofit.description}</h4>
          <h4>{this.state.nonprofit.registration}</h4>
          {this.state.nonprofit.skills.map(skill => <h4 key={skill.id}>{skill.name}</h4>)}
          {this.state.nonprofit.supporters.map(supporter => <h4 key={supporter.id}>{supporter.firstName}</h4>)}

          <BackButton />
          {Auth.isAuthenticated() && <Link to={`/nonprofits/${this.state.nonprofit.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
          </Link>}
          {' '}
          {Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteNonprofit}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>}
        </div>
      </div>
    );
  }
}

export default NonprofitsShow;