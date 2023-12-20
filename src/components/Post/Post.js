import React from 'react';

import css from "./Post.module.css"

const Post = ({post}) => {

    const {id, userId, title, body} = post;

    return (
        <div className={css.wrap}>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export default Post;