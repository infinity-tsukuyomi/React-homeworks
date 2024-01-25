import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/post.slice";
import Post from "../../components/Post/Post";
import PostForm from "../../components/PostForm/PostForm";

const PostsPage = () => {
    const {posts, status, error} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, []);

    return (
        <div>
            <PostForm/>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;