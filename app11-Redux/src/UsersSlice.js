import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: ["dine", "vijay","sai","reddy"]
}
 const UsersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {},
});


export default UsersSlice.reducer