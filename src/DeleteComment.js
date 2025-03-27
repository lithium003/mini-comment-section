import React from 'react';

const DeleteComment = ({ onDeleteComment }) => {
    return (
        <button onClick={onDeleteComment}>DEL</button> // onDeleteComment is defined in App to equal handleDeleteComment
    );
};

export default DeleteComment;