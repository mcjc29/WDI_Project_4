import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';

import MultiSelect from '../utility/MultiSelectField';

import { Grid, Thumbnail, Row, Col, Image, Button } from 'react-bootstrap';

import Promise from 'bluebird';
class UsersIndex extends React.Component {
  state = {
    users: [],
    skills: [],
    value: [],
    errors: {}
  }

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
        return this.state.value.map(value => value.id).indexOf(skill.skill.id) >= 0;
      }).length;
    });
  }

  render() {
    const users = this.runFilter();

    return (
      <Row>
        <div className="container">
          <Col>
            <MultiSelect
              value={this.state.value}
              options={this.state.skills}
              handleSelectChange={this.handleSelectChange}
            />
            {users.map(user => {
              return(
                <div key={user.id} className="col-md-4 col-sm-6 col-xs-12">
                  <div className="bob">
                    <div style={{backgroundImage: `url(${user.imageSRC})`}} className="picture"></div>

                    <h3>{user.firstName} {user.lastName}</h3>

                    <div className="scrollskill">{user.skills.map(skill => <p key={skill.skill.id}>{skill.skill.name}</p>)}</div>
                    <Link to={`/users/${user.id}`} className="bob-button btn buton">View Profile</Link>
                  </div>
                </div>
              );
            })}
          </Col>
        </div>
      </Row>
    );
  }
}


export default UsersIndex;
