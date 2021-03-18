import { useState, useEffect } from "react";

const useForm = (callback, validate, valuee) => {
  const [values, setValues] = useState(valuee);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log(values)
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    console.log(`${Object.keys(errors).length}`);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log('yes')
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
