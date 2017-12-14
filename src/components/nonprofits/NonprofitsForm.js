import React from 'react';
// import Select from 'react-select';
import DragDrop from '../utility/DragDrop';
import AutoComplete from '../utility/AutoComplete';

import BackButton from '../utility/BackButton';
import MultiSelect from '../utility/MultiSelectField';
import { FormGroup, FormControl, Form, Row, Col, ControlLabel, Button, Label } from 'react-bootstrap';

function NonprofitsForm({ handleSubmit, handleChange, handleSelectChange, nonprofit, skills, removeSelected, value, errors, handleLocationChange }) {

  const formInvalid = Object.keys(errors).some(key => errors[key]);

  return (
    <div className="container">
      <div className="page-banner col-md-12">
        <BackButton history={history} />
      </div>
      <Row className="_form" onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <h2>Create a charity</h2>
          </Col>

          <Col xs={6} md={4} mdOffset={2}>

            <FormGroup>
              <label htmlFor="image">Upload a logo</label>
              <DragDrop
                onChange={handleChange}
                value={nonprofit.base64 || nonprofit.imageSRC}
              />
              {errors.image && <Label bsStyle="danger">{errors.image}</Label>}
            </FormGroup>

          </Col>

          <Col xs={6} md={4}>
            <label>Search for your Charity</label>
            <AutoComplete
              findLocation={handleLocationChange}
            />
            <FormGroup>
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

            <FormGroup>

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

            <FormGroup>
              <label htmlFor="registration">Registration No.</label>
              <FormControl
                type="text"
                className="form-control"
                id="registration"
                name="registration"
                value={nonprofit.registration}
                onChange={handleChange}
              />
              {errors.registration && <Label bsStyle="danger">{errors.registration}</Label>}
            </FormGroup>

            <FormGroup>
              <label htmlFor="website">Website</label>
              <FormControl
                type="text"
                className="form-control"
                id="website"
                name="website"
                value={nonprofit.website}
                onChange={handleChange}
              />
              {errors.website && <Label bsStyle="danger">{errors.website}</Label>}
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Email</label>
              <FormControl
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={nonprofit.email}
                onChange={handleChange}
              />
              {errors.email && <Label bsStyle="danger">{errors.email}</Label>}
            </FormGroup>
          </Col>
        </Row>
        <Col xs={12} md={8} mdOffset={2} className="no-pad-col">
          <label htmlFor="MultiSelect">Select the skills that your charity is looking for</label>

          <MultiSelect
            handleSelectChange={handleSelectChange}
            removeSelected={removeSelected}
            options={skills}
            value={value}
          />
          <FormGroup>
            <label htmlFor="description">Describe the work your charity does</label>
            <FormControl
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={nonprofit.description}
              onChange={handleChange}
              componentClass="textarea"
              placeholder="Add a description"
            />
            {errors.description && <Label bsStyle="danger">{errors.description}</Label>}

          </FormGroup>
          <div>
            <Button disabled={formInvalid}>Save</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NonprofitsForm;
