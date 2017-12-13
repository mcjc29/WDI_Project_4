import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';

import Auth     from '../../lib/Auth';
import MultiSelect from '../utility/MultiSelectField';
import { Grid, Thumbnail, Row, Col, Image, Button } from 'react-bootstrap';

import Promise from 'bluebird';

class NonprofitsIndex extends React.Component {
  state = {
    nonprofits: [],
    skills: [],
    value: [],
    errors: {}
  }

  componentDidMount() {
    const promises = {
      skills: Axios.get('/api/skills').then(res => res.data),
      nonprofits: Axios.get('/api/nonprofits').then(res => res.data)
    };

    Promise.props(promises)
      .then(data => {
        const skillList = data.skills.map(skill => {
          return { label: skill.name, value: skill.id, id: skill.id };
        });

        this.setState({ skills: skillList, nonprofits: data.nonprofits });
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  handleSelectChange = (value) => {
    this.setState({ value });
  }

  runFilter() {
    if (!this.state.value.length) return this.state.nonprofits;

    return this.state.nonprofits.filter(nonprofit => {
      return nonprofit.skills.filter(skill => {
        return this.state.value.map(value => value.id).indexOf(skill.id) >= 0;
      }).length;
    });
  }

  render() {
    const nonprofits = this.runFilter();

    return (
      <div>
        <Row>
          <div className="page-banner col-md-12">
            {Auth.isAuthenticated() && <Link to="/nonprofits/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Nonprofit
            </Link>}
          </div>
          <MultiSelect
            value={this.state.value}
            options={this.state.skills}
            handleSelectChange={this.handleSelectChange}
          />
          {nonprofits.map(nonprofit => {
            return(
              <div key={nonprofit.id} className="col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                  <div style={{backgroundImage: `url(${nonprofit.imageSRC})`}} className="picture"></div>
                  <h3>{nonprofit.name}</h3>

                  {nonprofit.skills.map(skill => <p key={skill.id}>{skill.name}</p>)}
                  <Link to={`/nonprofits/${nonprofit.id}`} className="btn btn-primary">View Profile</Link>
                </div>
              </div>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default NonprofitsIndex;
