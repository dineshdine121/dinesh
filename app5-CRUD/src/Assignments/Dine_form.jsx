import React from "react";

const Dine_form = ({ handleChange, user, createUser, isEdit, updateUser }) => {
  return (
    <div>
      <form>

        <div className="mb-4">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.name}
            name="name"
            onChange={handleChange}
          />
        </div>



        <div className="mb-4">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={user.password}
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="" className="form-label">
            contact
          </label>
          <input
            type="number"
            className="form-control"
            value={user.number}
            name="contact"
            onChange={handleChange}
          />
        </div>
        {isEdit ? (
          <button
            type="button"
            className="btn btn-success"
            onClick={updateUser}
          >
            Update User
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-info"
            onClick={createUser}
          >
            Create User
          </button>
        )}
      </form>
    </div>
  );
};

export default Dine_form;
