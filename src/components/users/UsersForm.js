import React from 'react';
// import Select from 'react-select';

import BackButton from '../utility/BackButton';
// import PasswordEdit from '../Users/PasswordEdit';
import MultiSelect from '../utility/MultiSelectField';
import { FormGroup, FormControl, Form, Col, ControlLabel, Button } from 'react-bootstrap';

function UsersForm({ handleSubmit, handleChange, user, handleSelectChange, removeSelected, value, skills, errors }) {
  const formInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton history={history} />
      </div>
      <form className="_form" onSubmit={handleSubmit} className="col-md-6">
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.firstName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={user.image}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={user.description}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="address">address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
        </FormGroup>
        <MultiSelect
          handleSelectChange={handleSelectChange}
          removeSelected={removeSelected}
          options={skills}
          value={value}
        />
        <FormGroup>
          <label htmlFor="supporters">Charities I support</label>
          <input
            type="text"
            className="form-control"
            id="supporters"
            name="supporters"
            value={user.supporters}
            onChange={handleChange}
          />
        </FormGroup>
        {/* <PasswordEdit
          user={this.state.user}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        /> */}
        <Button type="submit" disabled={formInvalid}>
          Save
        </Button>
      </form>
    </div>
  );
}

export default UsersForm;
