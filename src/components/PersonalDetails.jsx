import React from 'react';

const PersonalDetails = ({ data, onChange, onNext }) => {
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    let tempErrors = {};
    if (!data.firstName) tempErrors.firstName = "First name is required";
    if (!data.lastName) tempErrors.lastName = "Last name is required";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      tempErrors.email = "Valid email is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div>
      <h2>Personal Details</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={data.firstName}
          onChange={(e) => onChange('firstName', e.target.value)}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={data.lastName}
          onChange={(e) => onChange('lastName', e.target.value)}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PersonalDetails;
