import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Login-Reducer";

export const Store = configureStore({
    reducer: {
        user: userSlice
    }
})