import React     from 'react';
import LoginForm from './LoginForm';
import Axios     from 'axios';
import Auth      from '../../lib/Auth';

class Login extends React.Component {
  state = {
    user: {
      email: '',
      password: ''
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    console.log(e, 'hit');
    e.preventDefault();

    Axios
      .post('/api/login', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
        this.setState({ errors: err.response.data });
      });
  }

  render() {
    return (
      <LoginForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        errors={this.state.errors}

      />
    );
  }
}

export default Login;
