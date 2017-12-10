import React from 'react';
import Axios from 'axios';

import UsersForm from './UsersForm';
import Auth from '../../lib/Auth';

class UsersEdit extends React.Component {
  state = {
    user: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      image: '',
      description: '',
      address: '',
      linkedIn: '',
      skills: [],
      nonprofits: [],
      password: '',
      passwordConfirmation: ''
    }
  };

  // componentDidMount() {
  //   Axios
  //     .get(`/api/users/${this.props.match.params.id}`)
  //     .then(res => this.setState({ user: res.data }))
  //     .catch(err => console.log(err));
  // }

  componentDidMount() {
    const { userId } = Auth.getPayload();
    Axios
      .get(`/api/users/${userId}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.error(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //   Axios
  //     .put(`/api/users/${this.props.match.params.id}`, this.state.user, {
  //       headers: { 'Authorisation': `Bearer ${Auth.getToken()}`}
  //     })
  //     .then(res => this.props.history.push(`/users/${res.data.id}`))
  //     .catch(err => console.log(err));
  // }
  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/users/${this.state.user.id}`, this.state.user)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }
  render() {
    return (
      <UsersForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        user={this.state.user}
      />
    );
  }
}

export default UsersEdit;
