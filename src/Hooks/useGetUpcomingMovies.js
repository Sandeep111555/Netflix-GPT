import { useState } from 'react'
import { API_OPTIONS } from '../utils/Constaints'
import { useDispatch } from 'react-redux'
import { addUpComingMovies } from '../utils/moviesSlice';

const useGetUpComingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addUpComingMovies(json.results));
    } 
    
    useState(()=>{
        getUpcomingMovies();
    },[])
    
}
export default useGetUpComingMovies;