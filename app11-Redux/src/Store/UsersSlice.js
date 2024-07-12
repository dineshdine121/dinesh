import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users:[],
}
 export const  UsersSlice=createSlice({
    name:'users',
    initialState:initialState,
    reducers:{},
});



export default UsersSlice.reducer
