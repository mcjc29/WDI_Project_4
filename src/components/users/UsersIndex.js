import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';


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

          {this.state.users.map(user => {
            return(
              <div key={user.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/users/${user.id}`}>
                  <h3>{user.firstName}</h3>
                </Link>
                <img src={user.image} className="img-responsive" />
                {user.skills.map(skill => {
                  return(
                    <h4 key={skill.id}>{skill.name}</h4>);
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UsersIndex;
