import React from 'react';

import css from '../../App.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className={css.header}>
                <Link to={'users'}>Users</Link>
                <Link to={'posts'}>Posts</Link>
            </div>
        </div>
    );
};

export default Header;