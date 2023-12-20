import React from 'react';

import css from "./UserDetails.module.css"

const UsersDetails = ({user, getUserId}) => {

    const {id, name, username, email} = user;

    return (
        <div className={css.wrap}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <button onClick={() => getUserId(id)}>Posts</button>
        </div>
    );
};

export default UsersDetails;