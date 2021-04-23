import React, { useContext,useState, useEffect } from "react";
import axios from "axios";
import UserProvider from "../../contexts/UserProvider";
import _, { toInteger } from "lodash";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // var userData = useContext(UserProvider.context);
  // var id = _.isEmpty(userData) ? 0 : userData["id"];

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);

    console.log(values);

    const body = {
      balance: toInteger(values.amount),
    };


    // Simple PUT request with a JSON body using axios
    await axios
      .put(`https://piggybankbackend.mybluemix.net/addFunds/113403933642326679347`, body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
