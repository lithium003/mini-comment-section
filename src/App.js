import React, { useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const App = () => {
  const [comments, setComments] = useState([]);
  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };
  return (
      <div style={{ padding: '20px' }}>
        <h1>Mini Comment Section</h1>
        <AddComment onAddComment={handleAddComment} />
        <CommentList comments={comments} />
      </div>
  )
};

export default App;