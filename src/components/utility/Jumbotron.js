import React from 'react';
import { Tab, Nav, Row, Col, NavItem } from 'react-bootstrap';
// import MultiSelect from '../utility/MultiSelectField';

const Jumbotron = ({ NonprofitsIndex, UsersIndex }) => {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">GAT SKILLZ?</h1>
        <p className="lead text-muted">GAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZ</p>
        <p>
          <a href="#" className="btn btn-primary">Search by opportunity </a>
          <a href="#" className="btn btn-secondary">Search by volunteer</a>
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
