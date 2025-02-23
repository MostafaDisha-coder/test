import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ doctorName, doctorSpeciality, consultationDetails }) => {
  const [isFeedbackFormVisible, setIsFeedbackFormVisible] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    // Handle feedback submission logic here
    console.log('Feedback submitted:', feedback);
    setIsFeedbackFormVisible(false);
  };

  return (
    <div className="review-form-container">
      <h2>Consultation Review</h2>
      <div className="consultation-info">
        <p><strong>Doctor Name:</strong> {doctorName}</p>
        <p><strong>Speciality:</strong> {doctorSpeciality}</p>
        <p><strong>Consultation Details:</strong> {consultationDetails}</p>
      </div>

      {!isFeedbackFormVisible ? (
        <button onClick={() => setIsFeedbackFormVisible(true)}>Provide Feedback</button>
      ) : (
        <div className="feedback-form">
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback here..."
            rows="4"
          />
          <button onClick={handleSubmitFeedback}>Submit Feedback</button>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;