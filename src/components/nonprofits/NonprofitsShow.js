import React    from 'react';
import { Link } from 'react-router-dom';
import Axios    from 'axios';

import Auth       from '../../lib/Auth';
import BackButton from '../utility/BackButton';
import GoogleMap from '../utility/GoogleMap';

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
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.nonprofit) return null;
    const supporter = this.state.nonprofit.supporters.find(user => user.id === Auth.getPayload().userId) ? true : false;

    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <img src={this.state.nonprofit.imageSRC} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{this.state.nonprofit.name}</h3>
          <h4>{this.state.nonprofit.description}</h4>
          <h4>{this.state.nonprofit.registration}</h4>
          <a href={this.state.nonprofit.website}>{this.state.nonprofit.website}</a>
          {this.state.nonprofit.skills.map(skill => <h4 key={skill.id}>{skill.name}</h4>)}
          <div>Supporters of {this.state.nonprofit.name}
            {this.state.nonprofit.supporters.map(supporter => <h4 key={supporter.id}>{supporter.firstName} {supporter.lastName}<img src={supporter.image} className="img-responsive" /></h4>)}
          </div>
          <BackButton />
          {!Auth.isAuthenticated() && <Link to={'/login'} className="standard-button">Login to support {this.state.nonprofit.name}</Link>}

          {Auth.isAuthenticated() && <Link to={`/nonprofits/${this.state.nonprofit.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
          </Link>}
          {' '}
          {Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteNonprofit}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>}
          {' '}
          {!supporter &&  Auth.isAuthenticated() && <button className="main-button" onClick={this.nonprofitsSupport} aria-hidden="true">
            Support {this.state.nonprofit.name}
          </button>}
          {supporter &&  Auth.isAuthenticated() && <button className="main-button" onClick={this.nonprofitsUnsupport} aria-hidden="true">
            Unsupport {this.state.nonprofit.name}
          </button>}
          {this.state.nonprofit.location && <GoogleMap center={this.state.nonprofit.location} />}
        </div>
      </div>
    );
  }
}

export default NonprofitsShow;
