import React from 'react';
import {useDispatch} from "react-redux";

import {deletePostThunk} from "../../store/post.slice";

const Post = ({post}) => {
    const {userId, id, title, body} = post;

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>UserId: {userId}</div>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
            <button onClick={() => dispatch(deletePostThunk({id}))}>Delete</button>
        </div>
    );
};

export default Post;