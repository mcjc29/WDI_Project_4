import React from 'react';
// import { Tab, Nav, Row, Col, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Jumbotron = () => {
  return (

    <section className="jumbotron text-center">
      <div className="container homejumbo ">
        <h1 className="jumbotron-heading">Are you <span className="logo">Charit<span>Able</span></span>?</h1>
        <p className="lead">Connecting skilled volunteers eager to make an impact <br/> helping charities thrive.</p>
        <Link to="/nonprofits" className="btn">Search by <span className="blue">Opportunity</span></Link>
        <Link to="/users" className="btn">Search by <span className="lightBlue">Volunteer</span></Link>
      </div>
    </section>
  );
};

export default Jumbotron;
