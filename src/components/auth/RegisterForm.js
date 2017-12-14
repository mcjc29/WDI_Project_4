import React from 'react';
import MultiSelect from '../utility/MultiSelectField';
import AutoComplete from '../utility/AutoComplete';
import { FormGroup, Form, Row, Col, Label } from 'react-bootstrap';

const RegisterForm = ({ handleChange, handleSubmit, user, handleSelectChange, skills, removeSelected, value, handleLocationChange, errors  }) => {
  const formInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <Row>
      <Col xs={6} md={4} mdOffset={4}>
        <form className="_form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={user.username}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={user.firstName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={user.lastName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={user.email}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <input
              type="Textarea"
              name="description"
              placeholder="Tell us about yourself..."
              onChange={handleChange}
              value={user.description}
              className="form-control"
            />
          </div>
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
          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              value={user.address}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="linkedIn"
              placeholder="linkedIn"
              onChange={handleChange}
              value={user.linkedIn}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={user.password}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={user.passwordConfirmation}
              className="form-control"
            />
          </div>

          <button className="btn" disabled={formInvalid}>Login</button>
        </form>
      </Col>
    </Row>
  );
};

export default RegisterForm;
