import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createComment} from "../../store/comment.slice";

const CommentForm = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createComment({data}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label><input type="text" placeholder={'name'} {...register('name')}/></label>
                <label><input type="email" placeholder={'email'} {...register('email')}/></label>
                <label><input type="text" placeholder={'body'} {...register('body')}/></label>
                <button>Add Comment</button>
            </form>
        </div>
    );
};

export default CommentForm;