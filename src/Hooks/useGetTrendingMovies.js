import { useState } from 'react'
import { API_OPTIONS } from '../utils/Constaints'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../utils/moviesSlice';

const useGetTrendingMovies = () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US',API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    } 
    
    useState(()=>{
        getTrendingMovies();
    },[])
    
}
export default useGetTrendingMovies;