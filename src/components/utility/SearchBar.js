import React from 'react';
import { Tab, Nav, Row, Col, NavItem } from 'react-bootstrap';
// import MultiSelect from '../utility/MultiSelectField';

const SearchBar = ({ NonprofitsIndex, UsersIndex }) => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="clearfix">
        <Col >
          <Nav bsStyle="pills">
            <NavItem eventKey="first">
              Search for a Charity
            </NavItem>
            <NavItem eventKey="second">
              Search for a Volunteer
            </NavItem>
          </Nav>
        </Col>
        <Col >
          <Tab.Content animation>
            <Tab.Pane eventKey="first">
              <NonprofitsIndex />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <UsersIndex />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default SearchBar;
