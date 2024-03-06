import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import IUser from '../../component/user/UserType'
import { RootState } from '../Index';

const initialState: IUser[] = [];

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers: {
        addUser:(state, action: PayloadAction<IUser>) => {
            console.log(action.payload)
            state.push(action.payload);
        }
    }
})

export const { addUser } = userSlice.actions;
export const slectUsers = (state: RootState) => state.users
export default userSlice.reducer;
