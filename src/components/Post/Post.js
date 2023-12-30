import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import css from "./Post.module.css"
import {postService} from "../../services/post.service";

const Post = ({post}) => {
    const {id, title} = post || {};

    return (
        <div className={css.wrap}>
            <Link to={`/posts/${id}`}>Title: {title}</Link>
        </div>
    );
};

export default Post;