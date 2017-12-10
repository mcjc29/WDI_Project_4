import React    from 'react';
import { Link } from 'react-router-dom';
import Axios    from 'axios';

import Auth       from '../../lib/Auth';
import BackButton from '../utility/BackButton';
// import UsersForm from './UsersForm';

class UsersShow extends React.Component {
  state = {
    user: null
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }


  deleteUser = () => {
    Axios
      .delete(`/api/users/${this.props.match.params.id}`, {
        headers: { 'Authorisation': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.user) return null;
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
          {this.state.user.skills.map(skill => <h4 key={skill.id}>{skill.name}</h4>)}
          {this.state.user.nonprofits.map(nonprofit => <h4 key={nonprofit.id}>{nonprofit.name}</h4>)}

          <BackButton />
          {Auth.isAuthenticated() && <Link to={`/users/${this.state.user.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
          </Link>}
          {' '}
          {Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteUser}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>}
        </div>
      </div>
    );
  }
}

export default UsersShow;
