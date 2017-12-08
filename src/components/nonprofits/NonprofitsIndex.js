import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';

import Auth     from '../../lib/Auth';

class NonprofitsIndex extends React.Component {
  state = {
    nonprofits: []
  }

  componentWillMount() {
    Axios
      .get('/api/nonprofits')
      // .then(res => console.log({ nonprofits: res.data }))
      .then(res => this.setState({ nonprofits: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="page-banner col-md-12">
            {Auth.isAuthenticated() && <Link to="/nonprofits/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add Nonprofit
            </Link>}
          </div>
          {this.state.nonprofits.map(nonprofit => {
            return(
              <div key={nonprofit.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/nonprofits/${nonprofit.id}`}>
                  <h3>{nonprofit.name}</h3>
                </Link>
                <img src={nonprofit.imageSRC} className="img-responsive" />
                {nonprofit.skills.map(skill => <h4 key={skill.id}>{skill.name}</h4>)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NonprofitsIndex;
