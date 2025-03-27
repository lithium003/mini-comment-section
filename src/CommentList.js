import React from 'react';
import DeleteComment from './DeleteComment';

const CommentList = ({ comments, onDeleteComment}) => {
    return (
        <div>
            <h2>Comments</h2>
            {comments.map((comment, index) => ( // Glorified for loop
                <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}> {/* key is a react thing */ }
                    <p>{comment}</p>
                    <DeleteComment onDeleteComment={() => onDeleteComment(comment)} />
                </div>
            ))}
        </div>
    );
};

export default CommentList;