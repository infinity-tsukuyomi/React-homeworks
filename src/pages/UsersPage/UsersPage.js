import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import User from "../../components/User/User";
import {getAllUsers} from "../../store/user.slice";
import UserForm from "../../components/UserForm/UserForm";

const UsersPage = () => {
    const {users, status, error} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, []);

    return (
        <div>
            <UserForm/>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;