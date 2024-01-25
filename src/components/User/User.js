import React from 'react';
import {useDispatch} from "react-redux";

import {deleteUserThunk} from "../../store/user.slice";

const User = ({user}) => {
    const {id, name, username, email} = user;
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Username: {username}</div>
                <div>Email: {email}</div>
            </div>
            <button onClick={() => dispatch(deleteUserThunk({id}))}>Delete</button>
        </div>
    );
};

export default User;