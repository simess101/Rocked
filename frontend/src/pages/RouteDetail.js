import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRouteById, submitFeedback } from '../services/routeService';
import LoadingSpinner from '../components/LoadingSpinner';

const RouteDetail = () => {
  const { id } = useParams();
  const [route, setRoute] = useState(null);
  const [feedback, setFeedback] = useState({ rating: '', comment: '', sent: false });
  const [loading, setLoading] = useState(true);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  useEffect(() => {
    getRouteById(id)
      .then((response) => {
        setRoute(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching route details', error);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitFeedback(id, feedback)
      .then(() => {
        setFeedbackSubmitted(true);
      })
      .catch((error) => {
        console.error('Error submitting feedback', error);
      });
  };

  if (loading) return <LoadingSpinner />;
  if (!route) return <p>Route not found</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{route.name}</h2>
      <p>Difficulty: {route.difficulty}</p>
      <p>{route.description}</p>
      <div>
        <h3>Submit Your Feedback</h3>
        {feedbackSubmitted ? (
          <p>Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Rating (1-5):</label>
              <input type="number" name="rating" value={feedback.rating} onChange={handleChange} min="1" max="5" required />
            </div>
            <div>
              <label>Comment:</label>
              <textarea name="comment" value={feedback.comment} onChange={handleChange} required></textarea>
            </div>
            <div>
              <label>
                <input type="checkbox" name="sent" checked={feedback.sent} onChange={(e) => setFeedback({ ...feedback, sent: e.target.checked })} />
                I sent it!
              </label>
            </div>
            <button type="submit" style={{ marginTop: '1rem' }}>Submit Feedback</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RouteDetail;
