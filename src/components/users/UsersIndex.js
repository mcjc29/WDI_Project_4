import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';

import MultiSelect from '../utility/MultiSelectField';

import { Grid, Thumbnail, Row, Col, Button } from 'react-bootstrap';

import Promise from 'bluebird';
class UsersIndex extends React.Component {
  state = {
    users: [],
    skills: [],
    value: [],
    errors: {}
  }
  // componentWillMount() {
  //   Axios
  //     .get('/api/users')
  //     // .then(res => console.log({ users: res.data }))
  //     .then(res => this.setState({ users: res.data }))
  //     .catch(err => console.log(err.response.data.errors));
  // }

  componentDidMount() {
    const promises = {
      skills: Axios.get('/api/skills').then(res => res.data),
      users: Axios.get('/api/users').then(res => res.data)
    };

    Promise.props(promises)
      .then(data => {
        const skillList = data.skills.map(skill => {
          return { label: skill.name, value: skill.id, id: skill.id };
        });

        this.setState({ skills: skillList, users: data.users });
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  handleSelectChange = (value) => {
    this.setState({ value });
  }

  runFilter() {
    if (!this.state.value.length) return this.state.users;

    return this.state.users.filter(user => {
      return user.skills.filter(skill => {
        return this.state.value.map(value => value.id).indexOf(skill.id) >= 0;
      }).length;
    });
  }

  render() {
    const users = this.runFilter();

    return (
      <div>
        <div className="row">
          <MultiSelect
            value={this.state.value}
            options={this.state.skills}
            handleSelectChange={this.handleSelectChange}
          />
          {users.map(user => {
            return(
              <Grid key={user.id}>
                <Row>
                  <Col xs={6} md={4}>
                    <Thumbnail src={user.image} alt="242x200">
                      <h3>{user.firstName}</h3>
                      <h4>  {user.skills.map(skill => {
                        return(
                          <div key={skill.id}>{skill.name}</div>);
                      })}</h4>
                      <Button bsStyle="default"><Link to={`/users/${user.id}`}>
                        <h4>View Profile</h4>
                      </Link></Button>
                    </Thumbnail>
                  </Col>
                </Row>
              </Grid>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UsersIndex;
