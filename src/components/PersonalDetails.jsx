import React from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';

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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">First Name:</label>
        <div className="flex items-center">
          <FaUser className="mr-2 text-gray-500" />
          <input
            type="text"
            value={data.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Last Name:</label>
        <div className="flex items-center">
          <FaUser className="mr-2 text-gray-500" />
          <input
            type="text"
            value={data.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email:</label>
        <div className="flex items-center">
          <FaEnvelope className="mr-2 text-gray-500" />
          <input
            type="email"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>
      <button
        onClick={handleNext}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

export default PersonalDetails;
