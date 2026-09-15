import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isLoading:true
    },
    reducers:{
        addUser:(state,action) => {
            state.user = action.payload
            state.isLoading  = false
        },
        removeUser:(state,action) => {
            state.isLoading = false
        }
    }
})

export const {addUser , removeUser} = authSlice.actions

export default authSlice