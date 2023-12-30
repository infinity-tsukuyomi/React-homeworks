import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post || {};

    return (
        <div>
            <Link to={`/posts/${id}`}>{title}</Link>
        </div>
    );
};

export default Post;