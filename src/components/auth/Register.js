import React        from 'react';
import RegisterForm from './RegisterForm';
import Axios        from 'axios';
import Auth         from '../../lib/Auth';

class Register extends React.Component {
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
    },
    removeSelected: true,
    skills: [],
    value: []
  };

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

  handleChange = ({ target: { name, value }}) => {
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
    this.setState({ user });

    Axios
      .post('/api/register', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <RegisterForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleSelectChange={this.handleSelectChange}

        {...this.state}

      />
    );
  }
}

export default Register;
