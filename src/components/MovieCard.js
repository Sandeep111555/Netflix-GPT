import React from 'react'
import { IMG_CDN_URL } from '../utils/Constaints'

const MovieCard = ({poster}) => {
  if(!poster)
    return null;
  return (
    <div className='w-44'>
        <img className="w-44 h-52" src={IMG_CDN_URL+poster} alt="movieCard" />
    </div>
  )
}

export default MovieCard