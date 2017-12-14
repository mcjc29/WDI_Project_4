import React from 'react';
import MultiSelect from '../utility/MultiSelectField';
import AutoComplete from '../utility/AutoComplete';
import { FormGroup, FormControl, Form, Row, Col, Label } from 'react-bootstrap';

const RegisterForm = ({ handleChange, handleSubmit, user, handleSelectChange, skills, removeSelected, value, handleLocationChange, errors  }) => {
  const formInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <Row>
      <Col xs={6} md={4} mdOffset={4}>
        <form className="_form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <FormGroup>

            <FormControl
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={user.username}
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={user.firstName}
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={user.lastName}
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={user.email}
              className="form-control"
            />
          </FormGroup>

          <FormGroup>
            <FormControl
              type="Textarea"
              name="description"
              placeholder="Tell us about yourself..."
              onChange={handleChange}
              value={user.description}
              className="form-control"
            />
          </FormGroup>
          <MultiSelect
            handleSelectChange={handleSelectChange}
            removeSelected={removeSelected}
            options={skills}
            value={value}
          />
          <h3>Search for your address</h3>

          <AutoComplete
            findLocation={handleLocationChange}
          />
          <FormGroup>
            <FormControl
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              value={user.address}
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              name="linkedIn"
              placeholder="linkedIn"
              onChange={handleChange}
              value={user.linkedIn}
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
              className="form-control"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={user.passwordConfirmation}
              className="form-control"
            />
          </FormGroup>

          <button className="btn" disabled={formInvalid}>Login</button>
        </form>
      </Col>
    </Row>
  );
};

export default RegisterForm;
