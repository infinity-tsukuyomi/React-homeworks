import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const PostDetails = () => {
    const {id} = useParams();

    const [post, setPost] = useState(null)

    useEffect(() => {
        postService.getByUserId(id).then(value => setPost({...value}))
    }, []);

    return (
        <div>
            {post && (
                <div>
                    <div>Id: {post.id}</div>
                    <div>UserId: {post.userId}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            )}
        </div>
    );
};

export default PostDetails;