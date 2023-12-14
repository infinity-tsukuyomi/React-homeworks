import React, {useEffect, useState} from 'react';
import User from "./User";

const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                setUsers(users);
            });
    }, []);

    return (
        <div>
            <ul>
                {
                    users.map(users => <li key={users.id}><User item={users}/></li>)
                }
            </ul>
        </div>
    );
};

export default Users;