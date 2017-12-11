import React from 'react';
import Axios from 'axios';

import NonprofitsForm from './NonprofitsForm';
import Auth from '../../lib/Auth';

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
      supporters: []
    },
    removeSelected: true,
    skills: [],
    value: [],
    errors: {}
  };

  componentDidMount() {
    Axios
      .all([
        Axios.get('/api/skills'),
        Axios.get(`/api/nonprofits/${this.props.match.params.id}`)
      ])
      .then(Axios.spread((skills, nonprofit) => {
        console.log(nonprofit.data);
        const skillList = skills.data.map(skill => {
          return { label: skill.name, value: skill.name, id: skill.id };
        });
        const ownedSkills = nonprofit.data.skills.map(skill => {
          return { label: skill.name, value: skill.name, id: skill.id };
        });
        this.setState({skills: skillList, nonprofit: nonprofit.data, value: ownedSkills});
      }))
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
          headers: { 'Authorisation': `Bearer ${Auth.getToken()}`}
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
