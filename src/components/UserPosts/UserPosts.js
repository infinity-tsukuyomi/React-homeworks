import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userPostsService} from "../../services/userPosts.service";
import UserPost from "../UserPost/UserPost";

const UserPosts = () => {
    const {id} = useParams();

    const [userPosts, setUserPosts] = useState(null)

    useEffect(() => {
        userPostsService.getById(id).then(value => setUserPosts([...value]))
    }, []);

    return (
        <div>
            {userPosts?.map(userPost => <UserPost key={userPost.id} userPost={userPost}/>)}
        </div>
    );
};

export default UserPosts;