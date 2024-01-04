import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import UserPost from "../UserPost/UserPost";

const UserPosts = () => {
    const {id} = useParams();

    const [userPosts, setUserPosts] = useState(null);

    useEffect(() => {
        postService.getByUserId(id).then(value => setUserPosts([...value]))
    }, []);

    return (
        <div>
            {userPosts?.map(userPost => <UserPost key={userPost.id} userPost={userPost}/>)}
        </div>
    );
};

export default UserPosts;