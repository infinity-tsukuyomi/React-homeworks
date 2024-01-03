import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <div>
                <h2>Comment</h2>
                <div>PostId: {comment.postId}</div>
                <div>Id: {comment.id}</div>
                <div>Name: {comment.name}</div>
                <div>Email: {comment.email}</div>
                <div>Body: {comment.body}</div>
            </div>
        </div>
    );
};

export default Comment;