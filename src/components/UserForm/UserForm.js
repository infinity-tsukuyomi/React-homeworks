import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createUser} from "../../store/user.slice";

const UserForm = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createUser({data}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label><input type="text" placeholder={'name'} {...register('name')}/></label>
                <label><input type="text" placeholder={'username'} {...register('username')}/></label>
                <label><input type="email" placeholder={'email'} {...register('email')}/></label>
                <button>Add User</button>
            </form>
        </div>
    );
};

export default UserForm;