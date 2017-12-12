import React from 'react';
// import Select from 'react-select';
import DragDrop from '../utility/DragDrop';
import AutoComplete from '../utility/AutoComplete';

import BackButton from '../utility/BackButton';
import MultiSelect from '../utility/MultiSelectField';
import { FormGroup, FormControl, Form, Col, ControlLabel, Button, Label } from 'react-bootstrap';

function NonprofitsForm({ handleSubmit, handleChange, handleSelectChange, nonprofit, skills, removeSelected, value, errors, handleLocationChange }) {

  const formInvalid = Object.keys(errors).some(key => errors[key]);



  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton history={history} />
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <label>Search for your Charity</label>
        <AutoComplete
          findLocation={handleLocationChange}
        />
        <FormGroup validationState={errors.name ? "error" : "success" }>
          <label htmlFor="name">Name</label>
          <FormControl
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={nonprofit.name}
            onChange={handleChange}
          />
          <Label bsStyle="danger">{errors.name}</Label>
        </FormGroup>

        <FormGroup validationState={errors.name ? "error" : "success" }>

          <label htmlFor="address">Address</label>
          <FormControl
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={nonprofit.address}
            onChange={handleChange}
          />
          {errors.address && <Label bsStyle="danger">{errors.address}</Label>}
        </FormGroup>

        <FormGroup validationState={errors.name ? "error" : "success" }>

          <label htmlFor="image">Image</label>
          <DragDrop
            onChange={handleChange}
            value={nonprofit.base64 || nonprofit.imageSRC}
          />
          {errors.image && <Label bsStyle="danger">{errors.image}</Label>}

        </FormGroup>

        <FormGroup validationState={errors.name ? "error" : "success" }>

          <label htmlFor="description">description</label>
          <FormControl
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={nonprofit.description}
            onChange={handleChange}
          />
          {errors.description && <Label bsStyle="danger">{errors.description}</Label>}

        </FormGroup>
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
          {errors.registration && <Label bsStyle="danger">{errors.registration}</Label>}

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
          {errors.website && <Label bsStyle="danger">{errors.website}</Label>}

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
          {errors.email && <Label bsStyle="danger">{errors.email}</Label>}

        </div>
        Select the skills your charity is looking for
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
