import React, { useState } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';


const App = () => {
    // The app has a list of comments.
    // You can update the list with setComments()
    const [comments, setComments] = useState([]);

    // Function to add a new comment.
    // This works by appending a newComment to the comments list
    const handleAddComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    // Function to delete a comment
    // This works by filtering out comments that match the comment to be deleted.
    // Also deletes all duplicates of the target comment
    const handleDeleteComment = (commentToDelete) => {
        setComments(comments.filter(comment => comment !== commentToDelete));
    };

    // Where the actual page layout goes
    return (
      <div style={{ padding: '20px' }}>
        <h1>Mini Comment Section</h1>
        <AddComment onAddComment={handleAddComment} />
        <CommentList comments={comments} onDeleteComment={handleDeleteComment} />
      </div>
    )
};

export default App;