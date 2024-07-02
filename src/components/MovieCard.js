import React from 'react'
import { IMG_CDN_URL } from '../utils/Constaints'

const MovieCard = ({poster}) => {
  if(!poster)
    return null;
  return (
    <div className='md:w-44 w-36'>
        <img className="md:w-44 md:h-52 w-36 h-44" src={IMG_CDN_URL+poster} alt="movieCard" />
    </div>
  )
}

export default MovieCard