import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector(store=>store.movies?.popularMovies);
  const topRatedMovies = useSelector(store=>store.movies?.topRatedMovies);
  const trendingMovies = useSelector(store=>store.movies?.trendingMovies);
  const upcomingMovies = useSelector(store=>store.movies?.upcomingMovies);
  return (
    //movie list
    //movie cards
    <div className='bg-black w-screen'>

    <div className='-mt-36'>
      <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={popularMovies} />
      <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />
      <MovieList title={"Trending Movies"} movies={trendingMovies} />
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
    </div>
    </div>
  )
}

export default SecondaryContainer