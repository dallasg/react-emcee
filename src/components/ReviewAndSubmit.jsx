import React from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const ReviewAndSubmit = ({ data, onPrevious, onSubmit }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // On success, pass the data to the parent component's submit handler
      onSubmit();
    } catch (err) {
      setError("There was an error submitting your registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Review & Submit</h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
        <p><strong>First Name:</strong> {data.firstName}</p>
        <p><strong>Last Name:</strong> {data.lastName}</p>
        <p><strong>Email:</strong> {data.email}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Conference Details</h3>
        <p><strong>Attending Days:</strong> {data.attendingDays.join(', ')}</p>
        {data.isSpeaker && (
          <p><strong>Topic:</strong> {data.topic}</p>
        )}
      </div>
      {error && (
        <div className="flex items-center text-red-500 mb-4">
          <FaExclamationCircle className="mr-2" />
          <span>{error}</span>
        </div>
      )}
      <div className="flex justify-between">
        <button
          onClick={onPrevious}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          className={`bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ${loading && 'opacity-50 cursor-not-allowed'}`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default ReviewAndSubmit;
