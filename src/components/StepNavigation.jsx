import React from "react";
import { FaStepForward, FaStepBackward } from "react-icons/fa";

const StepNavigation = ({ step, totalSteps }) => {
  return (
    <div className="flex justify-center mb-4">
      <div className="flex items-center">
        <FaStepBackward className={`text-gray-500 ${step === 1 ? "opacity-50" : ""}`} />
        <p className="text-lg mx-2">Step {step} of {totalSteps}</p>
        <FaStepForward className={`text-gray-500 ${step === totalSteps ? "opacity-50" : ""}`} />
      </div>
    </div>
  );
};

export default StepNavigation;
