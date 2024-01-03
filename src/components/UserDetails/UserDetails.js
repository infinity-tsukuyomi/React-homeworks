import React, {useEffect, useState} from 'react';

import {Link, Outlet, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";

const UserDetails = () => {
    const {id} = useParams();

    const [user, setUser] = useState(null)

    useEffect(() => {
        userService.getById(id).then(value => setUser({...value}))
    }, [id]);

    return (
        <div>
            {user && (
                <div>
                    <h2>User Details</h2>
                    <div>Id: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>Username: {user.username}</div>
                    <div>Email: {user.email}</div>
                </div>
            )}
            <Link to={`/users/${id}/posts`}>
                <button>Posts</button>
            </Link>
            <Outlet/>
        </div>
    );
};

export default UserDetails;