import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Form, Row, Col, Label } from 'react-bootstrap';

const LoginForm = ({ handleChange, handleSubmit, user, errors }) => {
  const formInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <Row>
      <Col xs={6} md={4} mdOffset={4}>
        <Form className="_form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <FormGroup>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={user.email}
              className="form-control"
            />
            {errors.message && <Label bsStyle="danger">{errors.message}</Label>}

          </FormGroup>
          <FormGroup>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
              className="form-control"
            />
            {errors.message && <Label bsStyle="danger">{errors.message}</Label>}

          </FormGroup>
          {/* <Button disabled={formInvalid}>Login</Button> */}
          <button className="btn" disabled={formInvalid}>Login</button>

          <Link to={'/register'} className="standard-button">Don't have an account?</Link>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginForm;
