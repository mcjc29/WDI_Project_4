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
    removeSelected: true,
    skills: [],
    value: [],
    errors: {}
  }

  componentDidMount() {
    Axios
      .get('/api/skills')
      .then(res => {
        const skills = res.data.map(skill => {
          return { label: skill.name, value: skill.name, id: skill.id };
        });
        this.setState({skills});
      })
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const nonprofit = Object.assign({}, this.state.nonprofit, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ nonprofit, errors });
  }


  handleSelectChange = (value) => {
    this.setState({ value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userSkills = this.state.value.map(skill => skill.id);
    const nonprofit = Object.assign({}, this.state.nonprofit, { skills: userSkills });
    this.setState({ nonprofit });

    Axios
      .post('/api/nonprofits', this.state.nonprofit, {
        headers: { 'Authorisation': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
      
  }

  render() {
    return (
      <NonprofitsForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleSelectChange={this.handleSelectChange}
        errors={this.state.errors}
        // nonprofit={this.state.nonprofit}
        // options={this.state.skills}
        {...this.state}
        // removeSelected={this.state.removeSelected}
      />
    );
  }
}

export default NonprofitsNew;
