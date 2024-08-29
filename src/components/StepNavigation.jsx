import React from 'react';

const StepNavigation = ({ step, totalSteps }) => {
  return (
    <div>
      <p>Step {step} of {totalSteps}</p>
    </div>
  );
};

export default StepNavigation;
