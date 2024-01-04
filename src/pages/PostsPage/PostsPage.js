import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import Post from "../../components/Post/Post";
import {postService} from "../../services/post.service";
import css from '../../App.module.css';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, []);

    return (
        <div>
            <div className={css.posts}>
                <div>
                    <h1>Posts</h1>
                    {posts.map(post => <Post key={post.id} post={post}/>)}
                </div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostsPage;