import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCommentThunk} from "../../store/comment.slice";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>PostId: {postId}</div>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Body: {body}</div>
            </div>
            <button onClick={() => dispatch(deleteCommentThunk({id}))}>Delete</button>
        </div>
    );
};

export default Comment;