import React from 'react';
// import Select from 'react-select';
import DragDrop from '../utility/DragDrop';

import BackButton from '../utility/BackButton';
import MultiSelect from '../utility/MultiSelectField';
import { FormGroup, FormControl, Form, Col, ControlLabel, Button } from 'react-bootstrap';

function NonprofitsForm({ handleSubmit, handleChange, handleSelectChange, nonprofit, skills, removeSelected, value, errors }) {
  const formInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton history={history} />
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <FormControl
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={nonprofit.name}
            onChange={handleChange}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="image">Image</label>
          <FormControl
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={nonprofit.image}
            onChange={handleChange}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <DragDrop
            onChange={handleChange}
            value={nonprofit.base64 || nonprofit.imageSRC}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">description</label>
          <FormControl
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={nonprofit.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="registration">registration</label>
          <FormControl
            type="text"
            className="form-control"
            id="registration"
            name="registration"
            value={nonprofit.registration}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">address</label>
          <FormControl
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={nonprofit.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="website">website</label>
          <FormControl
            type="text"
            className="form-control"
            id="website"
            name="website"
            value={nonprofit.website}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">email</label>
          <FormControl
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={nonprofit.email}
            onChange={handleChange}
          />
        </div>
        <MultiSelect
          handleSelectChange={handleSelectChange}
          removeSelected={removeSelected}
          options={skills}
          value={value}
        />
        <div>
          <button className="save-button" disabled={formInvalid}>Save</button>
        </div>
      </form>
    </div>
  );
}

export default NonprofitsForm;
