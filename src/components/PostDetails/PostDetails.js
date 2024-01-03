import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const PostDetails = () => {
    const {id} = useParams();

    const [post, setPost] = useState(null)

    useEffect(() => {
        postService.getByUserId(id).then(value => setPost({...value}))
    }, [id]);

    return (
        <div>
            {post && (
                <div>
                    <h2>Post Details</h2>
                    <div>UserId: {post.userId}</div>
                    <div>Id: {post.id}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            )}
            <Link to={`/posts/${id}/comments`}>
                <button>Comments</button>
            </Link>
            <Outlet/>
        </div>
    );
};

export default PostDetails;