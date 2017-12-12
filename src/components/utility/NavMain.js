import React from 'react';
import { withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

import { LinkContainer } from 'react-router-bootstrap';
import { NavItem, Navbar, Nav } from 'react-bootstrap';

const NavMain = ({history}) => {
  function logout(e) {
    e.preventDefault();

    Auth.logout();
    history.push('/');
  }

  return(
    <Navbar inverse collapseOnSelect>
      <Nav>
        <LinkContainer to="/">
          <NavItem className="nav-link">Home</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        { (Auth.isAuthenticated() || !Auth.isAuthenticated()) && <LinkContainer to="/nonprofits">
          <NavItem className="nav-link">Charities</NavItem>
        </LinkContainer>}

        { (Auth.isAuthenticated() || !Auth.isAuthenticated()) && <LinkContainer to="/users">
          <NavItem className="nav-link">Volunteers</NavItem>
        </LinkContainer>}
        { Auth.isAuthenticated() && <LinkContainer exact to="/nonprofits/new">
          <NavItem href="#">Create Charity</NavItem>
        </LinkContainer>}
        { !Auth.isAuthenticated() && <LinkContainer to="/login">
          <NavItem className="nav-link">Login</NavItem>
        </LinkContainer>}
        { !Auth.isAuthenticated() && <LinkContainer to="/register"><NavItem className="nav-link">Register</NavItem>
        </LinkContainer>}
        { Auth.isAuthenticated() && <LinkContainer to="#"><NavItem className="nav-link" onClick={logout}>Logout</NavItem>
        </LinkContainer>}
      </Nav>
    </Navbar>
  );
};

export default withRouter(NavMain);
