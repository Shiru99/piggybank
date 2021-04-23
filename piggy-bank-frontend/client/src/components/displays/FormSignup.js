import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import GetRequest from "./GetRequest";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  function addFunds() {
    values.transcationMode = +1;
  }

  return (
    <div className="form-content-right">
      <GetRequest />
      <div style={{ height: 25 }}></div>
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">Amount</label>
          <input
            className="form-input"
            type="amount"
            name="amount"
            placeholder="Enter your amount in rupees"
            value={values.amount}
            onChange={handleChange}
          />
          {errors.amount && <p>{errors.amount}</p>}
        </div>
        <button className="form-input-btn" type="submit" onClick={addFunds()}>
          Add
        </button>
        <div style={{ height: 25 }}></div>
      </form>
    </div>
  );
};

export default FormSignup;

/**
 * 
 * import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import axios from "axios";
import "./Form.css";
import GetRequest from "./GetRequest";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );


  return (
    <div className="form-content-right">
      <GetRequest />
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">Amount</label>
          <input
            className="form-input"
            type="amount"
            name="amount"
            placeholder="Enter your amount in rupees"
            value={values.amount}
            onChange={handleChange}
          />
          {errors.amount && <p>{errors.amount}</p>}
        </div>
        <button
          className="form-input-btn"
          // type="submit"
          type="button"
          onClick={(values.transcationMode = 1)}
        >
          Add
        </button>
        <button
          className="form-input-btn"
          // type="submit"
          type="button"
          onClick={(values.transcationMode = -1)}
        >
          Withdraw
        </button>

        <div style={{ height: 25 }}></div>
      </form>
    </div>
  );
};

export default FormSignup;

 */
