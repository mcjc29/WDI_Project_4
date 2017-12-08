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
      lat: '',
      lng: '',
      skills: [],
      supporters: []
    },
    removeSelected: true,
    skills: [],
    value: []
  };

  // componentDidMount() {
  //   Axios
  //     .get(`/api/nonprofits/${this.props.match.params.id}`)
  //     .then(res => {
  //       const skills = res.data.map(skill => {
  //         return { label: skill.name, value: skill.name, id: skill.id };
  //       });
  //       this.setState({skills});
  //       this.setState({ nonprofit: res.data });
  //     })
  //     .catch(err => console.log(err));
  // }
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

  handleSelectChange = (value) => {
    this.setState({ value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userSkills = this.state.value.map(skill => skill.id);
    const nonprofit = Object.assign({}, this.state.nonprofit, { skills: userSkills });
    this.setState({ nonprofit });

    Axios
      .put(`/api/nonprofits/${this.props.match.params.id}`, this.state.nonprofit, {
        headers: { 'Authorisation': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.props.history.push(`/nonprofits/${res.data.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <NonprofitsForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleSelectChange={this.handleSelectChange}
        nonprofit={this.state.nonprofit}
        {...this.state}

      />
    );
  }
}

export default NonprofitsEdit;
