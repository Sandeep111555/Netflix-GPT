import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptToggleView: false,
        movieNames: null,
        movieResults: null,
    },
    reducers:{
        toggleGptView: (state)=>{
            state.gptToggleView = !state.gptToggleView
        },
        addGptMovies: (state,action)=>{
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const {toggleGptView, addGptMovies} = gptSlice.actions

export default gptSlice.reducer