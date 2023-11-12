import { createSlice } from "@reduxjs/toolkit";
import { posts } from "./api/data";


const userSlice = createSlice({
    name: "post",
    initialState: posts,
    reducers: {
        addPost: (state,action) => {
            state.push(action.payload)
        }
    }
})

export const {addPost} = userSlice.actions
export default userSlice.reducer