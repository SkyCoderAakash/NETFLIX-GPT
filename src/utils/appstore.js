import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import moviesReducer from './movieSlice.js';
import gptReducer from './gptSlice.js'
import confirReducer from "./configSlice.js";

const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
            movies: moviesReducer,
            gpt : gptReducer,
            config : confirReducer, 
        },
    },
);
export default appStore;