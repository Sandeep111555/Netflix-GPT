import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/Constaints";
import { useSelector } from "react-redux";

const useGetNowPlayingMovies = ()=>{

    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }
    
    useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies();
    },[]);
}

  export default useGetNowPlayingMovies;