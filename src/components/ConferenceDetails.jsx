import React from 'react';
import { FaCalendarAlt, FaMicrophone } from 'react-icons/fa';

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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Conference Details</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Attending Days:</label>
        <div className="flex items-center">
          <FaCalendarAlt className="mr-2 text-gray-500" />
          <select
            multiple
            value={data.attendingDays}
            onChange={(e) =>
              onChange(
                'attendingDays',
                Array.from(e.target.selectedOptions, (option) => option.value)
              )
            }
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="Day 1">Day 1</option>
            <option value="Day 2">Day 2</option>
            <option value="Day 3">Day 3</option>
          </select>
        </div>
        {errors.attendingDays && <span className="text-red-500 text-sm">{errors.attendingDays}</span>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 flex items-center">
          <input
            type="checkbox"
            checked={data.isSpeaker}
            onChange={(e) => onChange('isSpeaker', e.target.checked)}
            className="mr-2"
          />
          I am a speaker
        </label>
      </div>
      {data.isSpeaker && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Topic:</label>
          <div className="flex items-center">
            <FaMicrophone className="mr-2 text-gray-500" />
            <input
              type="text"
              value={data.topic}
              onChange={(e) => onChange('topic', e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {errors.topic && <span className="text-red-500 text-sm">{errors.topic}</span>}
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
          onClick={handleNext}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConferenceDetails;
