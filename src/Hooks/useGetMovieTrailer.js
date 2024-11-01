import { useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constaints";
import { addTrailer } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useGetMovieTrailer = (videoId)=>{

    const dispatch = useDispatch();
    const movieTrailer = useSelector(store=>store.movies.trailer)

    const fetchVideoData = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+videoId+"/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        // const  trailers = json.results.filter((result)=>result.type==="Trailer");
        // const trailer = trailers.length?trailers[0]:json.results[0];
        dispatch(addTrailer(json?.results[0]));
      };


useState(()=>{
      !movieTrailer && fetchVideoData();
},[])
}

export default useGetMovieTrailer;