import React from 'react';
import {Link} from "react-router-dom";

import css from '../../App.module.css'

const Post = ({post}) => {
    const {id, title} = post || {};

    return (
        <div className={css.postsList}>
            <Link to={`/posts/${id}`}>{id} {title}</Link>
        </div>
    );
};

export default Post;