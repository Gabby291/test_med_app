import React, { useState } from 'react';
import './ReviewForm.css';

function ReviewForm() {
  // State to hold the review text
  const [review, setReview] = useState('');
  // State to hold the rating value
  const [rating, setRating] = useState(0);
  // State to show a submission confirmation message
  const [submittedMessage, setSubmittedMessage] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the submitted data, e.g., send it to an API or update state
    setSubmittedMessage(`Thank you for your review: "${review}" with rating ${rating}`);
    // Clear the form inputs
    setReview('');
    setRating(0);
  };

  return (
    <div className="review-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            <option value={0}>Select rating</option>
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedMessage && (
        <div className="submitted-message">
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;