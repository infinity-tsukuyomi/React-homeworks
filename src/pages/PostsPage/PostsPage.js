import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import Post from "../../components/Post/Post";
import {postService} from "../../services/post.service";

const PostsPage = () => {
    const [posts, setPosts] = useState([])
    // const [user, setUser] = useState(null);
    // const [postUserId, setPostUserId] = useState(null);
    //
    // const getUser = (user) => {
    //     setUser(user)
    //     setPostUserId(null)
    // }
    //
    // const getUserId = (id) => {
    //     setPostUserId(id)
    // }

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            <Outlet/>
        </div>
    );
};

export default PostsPage;