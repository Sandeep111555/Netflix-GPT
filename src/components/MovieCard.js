import React from 'react'
import { IMG_CDN_URL } from '../utils/Constaints'

const MovieCard = ({poster}) => {
  return (
    <div className='w-44'>
        <img src={IMG_CDN_URL+poster} alt="movieCard" />
    </div>
  )
}

export default MovieCard