import React from 'react';
import Select from 'react-select';

import BackButton from '../utility/BackButton';
// import MultiSelect from '../utility/MultiSelectField';

function UsersForm({ handleSubmit, handleChange, user }) {
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
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={user.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={user.description}
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
            value={user.registration}
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
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lat">lat</label>
          <input
            type="text"
            className="form-control"
            id="lat"
            name="lat"
            value={user.lat}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lng">lng</label>
          <input
            type="text"
            className="form-control"
            id="lng"
            name="lng"
            value={user.lng}
            onChange={handleChange}
          />
        </div>
        {/* <MultiSelect
          userSkills={user.skills}
          handleChange={handleChange}
          removeSelected={removeSelected}
        /> */}
        <div className="form-group">
          <label htmlFor="supporters">supporters</label>
          <input
            type="text"
            className="form-control"
            id="supporters"
            name="supporters"
            value={user.supporters}
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default UsersForm;
