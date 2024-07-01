import { useState } from 'react'
import { API_OPTIONS } from '../utils/Constaints'
import { useDispatch } from 'react-redux'
import { addTopRatedMovies } from '../utils/moviesSlice';

const useGetTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    } 
    
    useState(()=>{
        getTopRatedMovies();
    },[])
    
}
export default useGetTopRatedMovies;