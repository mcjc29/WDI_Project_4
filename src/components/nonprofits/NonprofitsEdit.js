import React from 'react';
import Axios from 'axios';

import NonprofitsForm from './NonprofitsForm';
import Auth from '../../lib/Auth';

import Promise from 'bluebird';

class NonprofitsEdit extends React.Component {
  state = {
    nonprofit: {
      name: '',
      image: '',
      description: '',
      registration: '',
      address: '',
      location: {
        lat: '',
        lng: ''
      },
      skills: [],
      supporters: [],
      website: '',
      email: ''
    },
    removeSelected: true,
    skills: [],
    value: [],
    errors: {}
  };

  componentDidMount() {
    const promises = {
      skills: Axios.get('/api/skills').then(res => res.data),
      nonprofit: Axios.get(`/api/nonprofits/${this.props.match.params.id}`).then(res => res.data)
    };

    Promise.props(promises)
      .then(data => {
        const skillList = data.skills.map(skill => {
          return { label: skill.name, value: skill.id, id: skill.id };
        });
        const ownedSkills = data.nonprofit.skills.map(skill => {
          return { label: skill.name, value: skill.id, id: skill.id };
        });

        console.log(ownedSkills);
        this.setState({ skills: skillList, nonprofit: data.nonprofit, value: ownedSkills });
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }


  handleChange = ({ target: { name, value } }) => {
    const nonprofit = Object.assign({}, this.state.nonprofit, { [name]: value });
    this.setState({ nonprofit });
  }

  handleSelectChange = (value) => {
    this.setState({ value });
  }

  handleLocationChange = (name, address, location, website) => {
    console.log('location changed!', 'NAME==>', name, 'ADDRESS==>', address, 'LOCATION==>', location, 'WEBSITE==>', website);
    const nonprofit = Object.assign({}, this.state.nonprofit, { name, address, location, website });
    this.setState({ nonprofit }, () => {
      console.log(this.state);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userSkills = this.state.value.map(skill => skill.id);
    const nonprofit = Object.assign({}, this.state.nonprofit, { skills: userSkills });
    console.log(nonprofit);
    this.setState({ nonprofit }, () => {
      Axios
        .put(`/api/nonprofits/${this.props.match.params.id}`, this.state.nonprofit, {
          headers: { 'authorization': `Bearer ${Auth.getToken()}`}
        })
        .then(res => this.props.history.push(`/nonprofits/${res.data.id}`))
        .catch(err => this.setState({ errors: err.response.data.errors }));
    });


  }

  render() {
    return (
      <NonprofitsForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleSelectChange={this.handleSelectChange}
        handleLocationChange={this.handleLocationChange}
        {...this.state}
        errors={this.state.errors}

      />
    );
  }
}

export default NonprofitsEdit;
