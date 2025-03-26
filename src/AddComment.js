import React, { useState } from 'react';

const AddComment = ({ onAddComment }) => {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            onAddComment(newComment);
            setNewComment('');
        }
     };

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