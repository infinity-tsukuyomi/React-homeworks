import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createPost} from "../../store/post.slice";

const PostForm = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createPost({data}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label><input type="text" placeholder={'title'} {...register('title')}/></label>
                <label><input type="text" placeholder={'body'} {...register('body')}/></label>
                <button>Add Post</button>
            </form>
        </div>
    );
};

export default PostForm;