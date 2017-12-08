import React from 'react';

const RegisterForm = ({ handleChange, handleSubmit, user }) => {
  return (
    <form onSubmit={handleSubmit}>
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
          type="text"
          name="image"
          placeholder="Image"
          onChange={handleChange}
          value={user.image}
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
      <div className="form-group">
        <input
          type="text"
          name="charitableInterests"
          placeholder="Tell us about yourself..."
          onChange={handleChange}
          value={user.charitableInterests}
          className="form-control"
        />
      </div>
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

      <button className="btn btn-primary">Login</button>
    </form>
  );
};

export default RegisterForm;
