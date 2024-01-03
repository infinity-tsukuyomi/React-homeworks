import React from 'react';

const UserPost = ({userPost}) => {


    return (
        <div>
            <div>
                <h2>User Post</h2>
                <div>UserId: {userPost.userId}</div>
                <div>Id: {userPost.id}</div>
                <div>Title: {userPost.title}</div>
                <div>Body: {userPost.body}</div>
            </div>
        </div>
    );
};

export default UserPost;