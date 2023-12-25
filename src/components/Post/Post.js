import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;

    return (
        <div>
{/* В данном случае нам будет выводить строку ссылки, поэтому айди надо сделать стрингой */}
            <Link to={id.toString()} state={post}>{title}</Link>
        </div>
    );
};

export default Post;