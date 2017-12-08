import React from 'react';
import Axios from 'axios';

import UsersForm from './UsersForm';
import Auth from '../../lib/Auth';

class UsersEdit extends React.Component {
  state = {
    nonprofit: {
      name: '',
      image: '',
      description: '',
      registration: '',
      createdBy: '',
      address: '',
      lat: '',
      lng: '',
      skills: [],
      supporters: []
    }
  };

  componentDidMount() {
    Axios
      .get(`/api/nonprofits/${this.props.match.params.id}`)
      .then(res => this.setState({ nonprofit: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const nonprofit = Object.assign({}, this.state.nonprofit, { [name]: value });
    this.setState({ nonprofit });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/nonprofits/${this.props.match.params.id}`, this.state.nonprofit, {
        headers: { 'Authorisation': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.props.history.push(`/nonprofits/${res.data.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <UsersForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        nonprofit={this.state.nonprofit}
      />
    );
  }
}

export default UsersEdit;
