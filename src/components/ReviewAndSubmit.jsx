import React from 'react';

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
    <div>
      <h2>Review & Submit</h2>
      <div>
        <h3>Personal Details</h3>
        <p><strong>First Name:</strong> {data.firstName}</p>
        <p><strong>Last Name:</strong> {data.lastName}</p>
        <p><strong>Email:</strong> {data.email}</p>
      </div>
      <div>
        <h3>Conference Details</h3>
        <p><strong>Attending Days:</strong> {data.attendingDays.join(', ')}</p>
        {data.isSpeaker && (
          <p><strong>Topic:</strong> {data.topic}</p>
        )}
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={onPrevious}>Previous</button>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};

export default ReviewAndSubmit;
