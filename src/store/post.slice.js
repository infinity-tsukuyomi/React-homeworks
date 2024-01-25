import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../services/post.service";

const initialState = {
    posts: [],
    status: null,
    error: null
}

export const getAllPosts = createAsyncThunk(
    'users/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            return await postService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createPost = createAsyncThunk(
    'postSlice/createPost',
    async ({data}, {dispatch}) => {
        try {
            const newPost = await postService.create(data);
            dispatch(addPost({data: newPost}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const deletePostThunk = createAsyncThunk(
    'postSlice/deletePostThunk',
    async ({id}, {dispatch}) => {
        try {
            await postService.deleteById(id)
            dispatch(deletePost({id}))
        } catch (e) {
            console.log(e);
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload.data)
        },

        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.pending, (state) => {
            state.status = 'pending'
            state.error = null
        });

        builder.addCase(getAllPosts.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.posts = action.payload
        });

        builder.addCase(getAllPosts.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        });
    }
})

const postReducer = postSlice.reducer;

export default postReducer
export const {addPost, deletePost} = postSlice.actions;
