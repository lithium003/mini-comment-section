import React, { useState } from 'react';

const AddComment = ({ onAddComment }) => {
    // This component identifies a new comment to be created.
    // The value of this newComment can be updated with setNewComment()
    const [newComment, setNewComment] = useState('');

    // Handles submission of the form
    // This is later called when the submit button "Add Comment" is pressed
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            onAddComment(newComment); // onAddComment is defined in App to equal handleAddComment
            setNewComment(''); // Reset the value of newComment once it is submitted
        }
    };
    // Where the actual html goes
    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a new comment"
                rows="3"
            />
            <br />
            <button type="submit">Add Comment</button>
        </form>
    );
};

export default AddComment;