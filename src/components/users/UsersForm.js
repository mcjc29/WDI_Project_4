import React from 'react';
// import Select from 'react-select';

import BackButton from '../utility/BackButton';
import PasswordEdit from '../Users/PasswordEdit';
// import MultiSelect from '../utility/MultiSelectField';
import { FormGroup, FormControl, Form, Col, ControlLabel, Button } from 'react-bootstrap';

function UsersForm({ handleSubmit, handleChange, user }) {

  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton history={history} />
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
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
          <label htmlFor="registration">registration</label>
          <input
            type="text"
            className="form-control"
            id="registration"
            name="registration"
            value={user.registration}
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
        <FormGroup>
          <label htmlFor="lat">lat</label>
          <input
            type="text"
            className="form-control"
            id="lat"
            name="lat"
            value={user.lat}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="lng">lng</label>
          <input
            type="text"
            className="form-control"
            id="lng"
            name="lng"
            value={user.lng}
            onChange={handleChange}
          />
        </FormGroup>
        {/* <MultiSelect
          userSkills={user.skills}
          handleChange={handleChange}
          removeSelected={removeSelected}
        /> */}
        <FormGroup>
          <label htmlFor="supporters">supporters</label>
          <input
            type="text"
            className="form-control"
            id="supporters"
            name="supporters"
            value={user.supporters}
            onChange={handleChange}
          />
        </FormGroup>
        <PasswordEdit
          user={this.state.user}
          errors={this.state.errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Button type="submit">
          <button className="save-button">Save</button>
        </Button>
      </form>
    </div>
  );
}

export default UsersForm;
