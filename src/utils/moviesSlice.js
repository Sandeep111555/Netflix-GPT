import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({

    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        popularMovies: null,
        topRatedMovies: null,
        trendingMovies: null,
        upcomingMovies: null,
    },
    reducers:{
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies =  action.payload;
        },
        addTrailer: (state,action)=>{
            state.trailer = action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addTrendingMovies: (state,action)=>{
            state.trendingMovies = action.payload;
        },
        addUpComingMovies: (state,action)=>{
            state.upcomingMovies = action.payload;
        }
    }
})

export const{addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addTrendingMovies,addUpComingMovies} = movieSlice.actions;
export default movieSlice.reducer;