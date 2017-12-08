import React from 'react';
// import Select from 'react-select';
import DragDrop from '../utility/DragDrop';

import BackButton from '../utility/BackButton';
import MultiSelect from '../utility/MultiSelectField';

function NonprofitsForm({ handleSubmit, handleChange, handleSelectChange, nonprofit, skills, removeSelected, value }) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
        <BackButton history={history} />
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
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
          <input
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
          <input
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
          <input
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
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={nonprofit.address}
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
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default NonprofitsForm;
