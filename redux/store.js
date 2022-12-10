import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movie"
import appReducer from "./app"

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        app: appReducer
    },
})