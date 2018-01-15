import React from 'react';
import Axios from 'axios';

import RegisterForm from '../auth/RegisterForm';
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
      location: {
        lat: '',
        lng: ''
      },
      linkedIn: '',
      skills: [],
      nonprofits: [],
      password: '',
      passwordConfirmation: ''
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
        Axios.get(`/api/users/${this.props.match.params.id}`)
      ])
      .then(Axios.spread((skills, user) => {
        console.log(user.data);
        const skillList = skills.data.map(skill => {
          return { label: skill.name, value: skill.name, id: skill.id };
        });
        const ownedSkills = user.data.skills.map(skill => {
          return { label: skill.name, value: skill.name, id: skill.id };
        });
        this.setState({skills: skillList, user: user.data, value: ownedSkills});
      }))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }
  handleSelectChange = (value) => {
    this.setState({ value });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const userSkills = this.state.value.map(skill => skill.id);
    const user = Object.assign({}, this.state.user, { skills: userSkills });
    console.log(user);
    this.setState({ user }, () => {
      Axios
        .put(`/api/users/${this.props.match.params.id}`, this.state.user, {
          headers: { 'authorization': `Bearer ${Auth.getToken()}`}
        })
        .then(res => this.props.history.push(`/users/${res.data.id}`))
        .catch(err => this.setState({ errors: err.response.data.errors }));
    });

  }


  render() {
    if (!this.state.user) return null;
    return (
      <RegisterForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleSelectChange={this.handleSelectChange}
        {...this.state}
        errors={this.state.errors}
      />
    );
  }
}

export default UsersEdit;
