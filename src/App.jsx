import React from 'react';
import PersonalDetails from './components/PersonalDetails';
import ConferenceDetails from './components/ConferenceDetails';
import ReviewAndSubmit from './components/ReviewAndSubmit';
import StepNavigation from './components/StepNavigation';

const App = () => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    attendingDays: [],
    isSpeaker: false,
    topic: ''
  });

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log('Registration Submitted', formData);
    // Reset form or navigate to a success page
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Conference Registration</h1>
      <StepNavigation step={step} totalSteps={3} />
      {step === 1 && (
        <PersonalDetails
          data={formData}
          onChange={handleChange}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <ConferenceDetails
          data={formData}
          onChange={handleChange}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      {step === 3 && (
        <ReviewAndSubmit
          data={formData}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default App;
