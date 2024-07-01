import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const MovieSuggestions = () => {
    const {movieNames,movieResults} = useSelector(store=>store.gpt)
  return (
    <div className=' bg-black bg-opacity-80'>
        {movieNames?.map((movieName,index)=><MovieList key={movieName} title={movieName} movies={movieResults[index].results}/>)}
    </div>
  )
}

export default MovieSuggestions