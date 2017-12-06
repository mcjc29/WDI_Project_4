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
      <Nav pullRight>
        { !Auth.isAuthenticated() && <LinkContainer to="/login">
          <NavItem className="nav-link">Login</NavItem>
        </LinkContainer>}
        {' '}
        { !Auth.isAuthenticated() && <LinkContainer to="/register"><NavItem>Register</NavItem>
        </LinkContainer>}
        {' '}
        { Auth.isAuthenticated() && <LinkContainer to="#"><NavItem onClick={logout}>Logout</NavItem>
        </LinkContainer>}
      </Nav>

    </Navbar>
  );
};

export default withRouter(NavMain);
