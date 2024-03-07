import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import IUser from '../../component/user/UserType'
import { RootState } from '../Index';

const initialState: IUser[] = [];

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers: {
        addUser:(state, action: PayloadAction<IUser>) => {
            console.log("Add user called")
        },
        addUserSuccess:(state, action: PayloadAction<IUser>) => {
            state.push(action.payload);
        },
        clearAll:(state) => {
            console.log("Clear All")
            state.splice(0, state.length);
        },
    }
})

export const {addUser, addUserSuccess, clearAll} = userSlice.actions;
export const slectUsers = (state: RootState) => state.users
export default userSlice.reducer;
