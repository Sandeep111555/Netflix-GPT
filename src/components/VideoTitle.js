import React from 'react';
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({title,description}) => {
  return (
    <div className='absolute text-white w-screen aspect-video bg-gradient-to-b from-black'>
      <div className='md:mt-[17%] mx-4'>
        <h1 className='font-bold md:text-5xl text-lg md:pt-0 pt-14'>{title}</h1>
        <p className='hidden md:block mt-5 md:w-96 w-52 '>{description}</p>
        <div className='md:mt-5 mt-3 flex gap-5'>
          <button className='font-bold md:text-md text-sm bg-white text-black rounded-lg md:w-28 md:h-12   flex items-center justify-center hover:bg-gray-500 w-20 h-19'>
            <FaPlay className='mr-2'/> Play
          </button>
          <button className='font-bold md:text-md text-sm bg-gray-600 md:w-28 md:h-12 w-20 h-9 rounded-lg hover:bg-gray-900'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;
