import React, {useState} from 'react';

import css from './User.module.css'
import {Link, useParams} from "react-router-dom";

const User = ({user, getUser}) => {
    const {id, name} = user;

    let params = useParams();


    return (
        <div className={css.wrap}>
            <Link to={id}>{id} {name}</Link>
            {/*<button onClick={() => getUser(user)}>Details</button>*/}
        </div>
    );
};

export default User;