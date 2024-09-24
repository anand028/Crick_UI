import React from 'react';
import './Summary.css'; // Import the CSS for Summary

const Summary = ({ formData, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Registration complete!');
  };

  return (
    <div className="summary-form-container opacity-95 flex items-center justify-center min-h-screen absolute inset-0 ">
      <form className="summary-form  p-6 w-60 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Summary</h2>
        <p className="mb-2"><strong>Name:</strong> {formData.name}</p>
        <p className="mb-2"><strong>Age:</strong> {formData.age}</p>
        <p className="mb-2"><strong>Team:</strong> {formData.team}</p>
        <p className="mb-2"><strong>Role:</strong> {formData.role}</p>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Summary;
