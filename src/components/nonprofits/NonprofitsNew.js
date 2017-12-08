import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import NonprofitsForm from './NonprofitsForm';

class NonprofitsNew extends React.Component {
  state = {
    nonprofit: {
      name: '',
      image: '',
      description: '',
      registration: '',
      address: '',
      lat: '',
      lng: '',
      skills: [],
      supporters: []
    },
    removeSelected: true
  };

  componentDidMount() {
    Axios
      .get('/api/skills')
      .then(res => console.log(res.data));
  }

  handleChange = ({ target: { name, value } }) => {
    const nonprofit = Object.assign({}, this.state.nonprofit, { [name]: value });
    this.setState({ nonprofit });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/nonprofits', this.state.nonprofit, {
        headers: { 'Authorisation': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <NonprofitsForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        nonprofit={this.state.nonprofit}
        removeSelected={this.state.removeSelected}
      />
    );
  }
}

export default NonprofitsNew;
