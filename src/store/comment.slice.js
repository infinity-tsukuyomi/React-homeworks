import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../services/comment.service";

const initialState = {
    comments: [],
    status: null,
    error: null
}

export const getAllComments = createAsyncThunk(
    'users/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            return await commentService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createComment = createAsyncThunk(
    'commentSlice/createComment',
    async ({data}, {dispatch}) => {
        try {
            const newComment = await commentService.create(data);
            dispatch(addComment({data: newComment}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const deleteCommentThunk = createAsyncThunk(
    'commentSlice/deleteCommentThunk',
    async ({id}, {dispatch}) => {
        try {
            await commentService.deleteById(id)
            dispatch(deleteComment({id}))
        } catch (e) {
            console.log(e);
        }
    }
)

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload.data)
        },

        deleteComment: (state, action) => {
            state.comments = state.comments.filter(comment => comment.id !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllComments.pending, (state) => {
            state.status = 'pending'
            state.error = null
        });

        builder.addCase(getAllComments.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.comments = action.payload
        });

        builder.addCase(getAllComments.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        });
    }
})

const commentReducer = commentSlice.reducer;

export default commentReducer
export const {addComment, deleteComment} = commentSlice.actions;
