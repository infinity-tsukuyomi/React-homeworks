import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services/user.service";

const initialState = {
    users: [],
    status: null,
    error: null
}

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await userService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createUser = createAsyncThunk(
    'userSlice/createUser',
    async ({data}, {dispatch}) => {
        try {
            const newUser = await userService.create(data);
            dispatch(addUser({data: newUser}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const deleteUserThunk = createAsyncThunk(
    'userSlice/deleteUserThunk',
    async ({id}, {dispatch}) => {
        try {
            await userService.deleteById(id)
            dispatch(deleteUser({id}))
        } catch (e) {
            console.log(e);
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload.data)
        },

        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.pending, (state) => {
            state.status = 'pending'
            state.error = null
        });

        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload
        });

        builder.addCase(getAllUsers.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        });
    }
})

const userReducer = userSlice.reducer;

export default userReducer;
export const {addUser, deleteUser} = userSlice.actions;
