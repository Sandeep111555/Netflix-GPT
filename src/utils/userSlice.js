import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;   //this add the user to the state variable
        },
        removeUser: (state, action) => {
            return null;
        }
    }
})

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;