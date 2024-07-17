import { createSlice } from '@reduxjs/toolkit'
const initialState ={
    users:[]
}
export const UsersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        CreateUser:()=>{},
        addUser:()=>{},
        updateUser:()=>{},
        deleteUser:()=>{}
    }
})