import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux';

const PrimaryContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies==null) return;
    const mainMovie = movies[0];
    const {id,original_title,overview} = mainMovie;
  return (    
    <div>
        <VideoTitle title={original_title} description={overview}/>
        <BackgroundVideo videoId={id} />
    </div>
  )
} 

export default PrimaryContainer