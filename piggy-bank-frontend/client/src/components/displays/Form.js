import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import bankIMG from "./bank.jpg";

const Form = () => {
  var [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(!isSubmitted);
  }

  function reset() {
    setIsSubmitted(false);
  }
  return (
    <>
      <div className="form-container">
        <button className="close-btn" onClick={() => reset()}>
          ×
        </button>
        <div className="form-content-left">
          <img className="form-img" src={bankIMG} alt="Bank" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
