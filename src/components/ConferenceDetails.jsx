import React from 'react';

const ConferenceDetails = ({ data, onChange, onNext, onPrevious }) => {
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    let tempErrors = {};
    if (!data.attendingDays || data.attendingDays.length === 0) {
      tempErrors.attendingDays = "At least one day must be selected";
    }
    if (data.isSpeaker && !data.topic) {
      tempErrors.topic = "Topic is required if you are a speaker";
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
      <h2>Conference Details</h2>
      <div>
        <label>Attending Days:</label>
        <select
          multiple
          value={data.attendingDays}
          onChange={(e) =>
            onChange(
              'attendingDays',
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          <option value="Day 1">Day 1</option>
          <option value="Day 2">Day 2</option>
          <option value="Day 3">Day 3</option>
        </select>
        {errors.attendingDays && <span>{errors.attendingDays}</span>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={data.isSpeaker}
            onChange={(e) => onChange('isSpeaker', e.target.checked)}
          />
          I am a speaker
        </label>
      </div>
      {data.isSpeaker && (
        <div>
          <label>Topic:</label>
          <input
            type="text"
            value={data.topic}
            onChange={(e) => onChange('topic', e.target.value)}
          />
          {errors.topic && <span>{errors.topic}</span>}
        </div>
      )}
      <button onClick={onPrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ConferenceDetails;
