import React from 'react';
// import { Tab, Nav, Row, Col, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Jumbotron = () => {
  return (
    <section className="jumbotron text-center">
      <div className="container">
        <h1 className="jumbotron-heading">GAT SKILLZ?</h1>
        <p className="lead text-muted">GAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZ</p>
        <Link to="/nonprofits" className="btn btn-primary">Search by opportunity </Link>
        <Link to="/users" className="btn btn-primary">Search by volunteer </Link>

      </div>
    </section>
  );
};

export default Jumbotron;
