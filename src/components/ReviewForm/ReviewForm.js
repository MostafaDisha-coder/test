import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ doctorName, doctorSpeciality, appointmentDetails }) => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form Data Submitted:', formData);
    // You can add logic here to send the data to a server or handle it as needed
  };

  return (
    <div className="review-form-container">
      <h2>Give Your Review</h2>
      {!showForm ? (
        <button className="feedback-button" onClick={handleButtonClick}>
          Click Here to Provide Feedback
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              className="form-select"
            >
              <option value="0">Select Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {/* Display Doctor and Appointment Details */}
          <div className="context-info">
            <h3>Appointment Details</h3>
            <p><strong>Doctor:</strong> {doctorName}</p>
            <p><strong>Speciality:</strong> {doctorSpeciality}</p>
            <p><strong>Date:</strong> {appointmentDetails.date}</p>
            <p><strong>Time:</strong> {appointmentDetails.time}</p>
          </div>
          <button type="submit" disabled={submitted} className="submit-button">
            {submitted ? 'Submitted' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ReviewForm;