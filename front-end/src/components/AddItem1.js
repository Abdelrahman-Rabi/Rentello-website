import React from "react";

const AddItem1 = () => {
  return (
    <div className="Register-container">
      <form onSubmit={handleSubmit}>
        <h1>Add your Item here</h1>
        <div className="form-input">
          <label>Your Item Name </label>
          <br />
          <input
            type="text"
            name="title"
            placeholder="Your Item Name"
            value={values.title}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div className="form-input">
          <label>Descripe Your Item </label>
          <br />
          <input
            type="text"
            name="description"
            placeholder="Descripe Your Item"
            value={values.description}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div className="form-input">
          <label>Price </label>
          <br />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={values.price}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div className="form-input">
          <label>Select Category </label>
          <br />
          <input
            type="password"
            name="password2"
            placeholder="confirm password"
            value={values.password2}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div className="form-input">
          <label>City </label>
          <br />
          <input
            type="text"
            name="city"
            placeholder="your City"
            value={values.city}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div className="form-input">
          <label>Address </label>
          <br />
          <input
            type="text"
            name="address"
            placeholder="your address"
            value={values.address}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <div className="form-input">
          <label>Date Of Birth </label>
          <br />
          <input
            type="date"
            name="dob"
            value={values.password}
            onChange={handleChange}
          ></input>
        </div>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AddItem1;
