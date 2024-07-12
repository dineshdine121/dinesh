import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: ["dine", "vijay","sai","reddy"]
}
 const UsersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        createuser:(state,action)=>{
            state.users.push(action.payload)
        },
        readuser:()=>{},
        updateuser:()=>{},
        deleteuser:(state,action)=>{
            state.users = state.users.filter((usr)=> usr !== action.payload)        },
    },
});


export default UsersSlice.reducer;
export const {createuser,deleteuser} = UsersSlice.actions