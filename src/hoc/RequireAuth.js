import React from 'react';

import {Navigate, useLocation} from 'react-router-dom'
import {useAuth} from "../hooks/useAuth";

const RequireAuth = ({children}) => {
    const location = useLocation();

    const {user} = useAuth();

    // Если юзера нет, то веди нас на логинацию
    if (!user) {
        return <Navigate to={'/login'} state={location}/>
    }

    // Если юзер залогинен, то отрисовываем того самого children
    return children
};

export default RequireAuth;