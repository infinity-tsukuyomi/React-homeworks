import React from 'react';
import {Link} from "react-router-dom";

import css from '../../App.module.css'

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div className={css.usersList}>
            <Link to={`/users/${id}`}>{id} {name}</Link>
        </div>
    );
};

export default User;