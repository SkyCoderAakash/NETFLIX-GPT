import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        trailerVideo : null,
        nowPlayingMovies : null,
        // addPopularMovies : null,
    },
    reducers : {
        addTrailerVideo : (state,action)=>{
            state.trailerVideo = action.payload;
        },
        addNowPlayingMovies : (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addUpcomingMovies : (state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state,action)=>{
            state.topRatedMovies = action.payload;
        }
    },
});

export const { addTrailerVideo,addNowPlayingMovies,addUpcomingMovies,addPopularMovies,addTopRatedMovies } = movieSlice.actions;

export default movieSlice.reducer;