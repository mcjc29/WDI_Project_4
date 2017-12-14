import React    from 'react';
import { Link } from 'react-router-dom';
import Axios    from 'axios';

import Auth       from '../../lib/Auth';
import BackButton from '../utility/BackButton';
import Sign from '../icons/Sign';
import Website from '../icons/Website';

import GoogleMap from '../utility/GoogleMap';
import { Row, Col } from 'react-bootstrap';

class NonprofitsShow extends React.Component {
  state = {
    nonprofit: null
  }

  componentWillMount() {
    Axios
      .get(`/api/nonprofits/${this.props.match.params.id}`)
      .then(res => this.setState({ nonprofit: res.data }))
      .catch(err => console.log(err));
  }

  deleteNonprofit = () => {
    Axios
      .delete(`/api/nonprofits/${this.props.match.params.id}`, {
        headers: { 'authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  nonprofitsSupport = () => {
    Axios
      .post(`/api/nonprofits/${this.props.match.params.id}/support`, null, {
        headers: { 'authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        const nonprofit = Object.assign({} , this.state.nonprofit, { supporters: this.state.nonprofit.supporters.concat(res.data)});
        this.setState({nonprofit});
        const user = Object.assign({} , this.state.user, { supporters: this.state.user.supporters.concat(res.data)});
        this.setState({user});
      })
      .catch(err => console.log(err));
  }

  nonprofitsUnsupport = () => {
    Axios
      .delete(`/api/nonprofits/${this.props.match.params.id}/support`, {
        headers: { 'authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        const nonprofit = Object.assign({} , this.state.nonprofit, { supporters: this.state.nonprofit.supporters.filter(user => user.id !== res.data.id )});
        this.setState({nonprofit});
        const user = Object.assign({} , this.state.user, { supporters: this.state.user.supporters.filter(user => user.id !== res.data.id )});
        this.setState({user});
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.nonprofit) return null;
    const supporter = this.state.nonprofit.supporters.find(user => user.id === Auth.getPayload().userId) ? true : false;

    return (
<div className="container">
      <Row>
        <BackButton />
        <Col>
          <Row className="show-rows">
            <div style={{backgroundImage: `url(${this.state.nonprofit.imageSRC})`}} className="show-picture"></div>
          </Row>
          <Row className="show-rows">
            {/* <Col xs={12} md={8} mdOffset={2}> */}
              <h2>Who are {this.state.nonprofit.name} and what do we do?</h2>
              <p>{this.state.nonprofit.description}</p>
            {/* </Col> */}
          </Row>
          <Row className="show-rows">
            <h2>What skills are we currently seeking?</h2>
            {this.state.nonprofit.skills.map(skill => <Col key={skill.id} xs={3} md={3}><h4 >{skill.name}</h4></Col>)}
          </Row>
          <Row className="show-rows">
            <h2>Our supporters</h2>
            {this.state.nonprofit.supporters.map(supporter =>
              <Col key={supporter.id} xs={2} md={2}><div style={{backgroundImage: `url(${supporter.imageSRC})`}} className="picture supporter"></div></Col>)
          }


            {!Auth.isAuthenticated() && <Link to={'/login'} className="btn button">Login to support {this.state.nonprofit.name}</Link>}
            {!supporter &&  Auth.isAuthenticated() && <button className="btn button" onClick={this.nonprofitsSupport} aria-hidden="true">
              Support {this.state.nonprofit.name}
            </button>}
            {supporter &&  Auth.isAuthenticated() && <button className="btn button" onClick={this.nonprofitsUnsupport} aria-hidden="true">
              Unsupport {this.state.nonprofit.name}
            </button>}
          </Row>
          <Row className="show-rows">
            <h2>Get in touch</h2>
            <Col xs={6} md={4}>
              <h3>Website</h3>
              <Website/>
              <a href={this.state.nonprofit.website}>{this.state.nonprofit.website}</a>
            </Col>
            <Col xs={6} md={4}>
              <h3>Registered charity</h3>
              <h4>{this.state.nonprofit.registration}</h4>
            </Col>

            <Col xs={6} md={4}>
              <h3>Email</h3>
              <h4>{this.state.nonprofit.email}</h4>
            </Col>
          </Row>
          <Row className="show-rows">
            <Col xs={6} md={4} mdOffset={2}>
              <h3>Address</h3>
              <Sign />
              <h4>{this.state.nonprofit.address}</h4>
            </Col>
            <Col xs={6} md={4}>
              {this.state.nonprofit.location && <GoogleMap center={this.state.nonprofit.location} />}
            </Col>
          </Row>
          {Auth.isAuthenticated() && <Link to={`/nonprofits/${this.state.nonprofit.id}/edit`} className="btn button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
          </Link>}
          {' '}
          {Auth.isAuthenticated() && <button className="btn button" onClick={this.deleteNonprofit}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>}
        </Col>

      </Row>
</div>
    );
  }
}

export default NonprofitsShow;
