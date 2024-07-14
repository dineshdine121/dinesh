import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: ["dine", "vijay","sai","reddy"]
}
const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        
        createuser: (state, action) => {
            state.users.push(action.payload);
        },

        readuser: (state, action) => {
            state.users = action.payload;
        },

        updateuser: (state, action) => {
        
            const { index, newUser} = action.payload; 
            if (index >= 0 && index < state.users.length) {  
                state.users[index] = newUser;
            }
           
        },
        
        deleteuser: (state, action) => {
            const userId = action.payload; 
            state.users = state.users.filter(user => user.id !== userId);  
        },
    },
});


export default UsersSlice.reducer;
export const {createuser,deleteuser,updateuser} = UsersSlice.actions