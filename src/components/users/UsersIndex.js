import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';

import Auth     from '../../lib/Auth';

class UsersIndex extends React.Component {
  state = {
    users: []
  }

  componentWillMount() {
    Axios
      .get('/api/users')
      // .then(res => console.log({ users: res.data }))
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="page-banner col-md-12">
            {Auth.isAuthenticated() && <Link to="/users/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Add User
            </Link>}
          </div>
          {this.state.users.map(user => {
            return(
              <div key={user.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/users/${user.id}`}>
                  <h3>{user.name}</h3>
                </Link>
                <img src={user.image} className="img-responsive" />
                {user.skills.map(skill => <h4 key={skill.id}>{skill.name}</h4>)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UsersIndex;
