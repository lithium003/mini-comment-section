import React from 'react';

const CommentList = ({ comments }) => {
    return (
        <div>
            <h2>Comments</h2>
            {comments.map((comment, index) => (
                <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
                    <p>{comment}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;