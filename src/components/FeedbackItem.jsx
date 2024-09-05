import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';

function FeedbackItem({ item: { id, rating, text }, item }) {
  const { deleteFeedback, editFeedback, feedbackEdit } =
    useContext(FeedbackContext);

  // to change style when editing
  // const isEditing = feedbackEdit.edit && feedbackEdit.item.id === id;


  return (
    <Card className="card" reverse={false}  >
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

export default FeedbackItem;
