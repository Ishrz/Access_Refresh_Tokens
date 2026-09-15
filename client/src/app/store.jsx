import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../state/authReducer";



export const store = configureStore({
    reducer:{
        auth: authReducer.reducer
    }
})