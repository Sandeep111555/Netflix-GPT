import React from 'react';
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({title,description}) => {
  return (
    <div className='absolute text-white w-screen aspect-video bg-gradient-to-b from-black'>
      <div className='mt-[20%] m-24'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='mt-5 text-xl w-96'>{description}</p>
        <div className='mt-5 flex gap-5'>
          <button className='font-bold bg-black text-white w-28 h-12 flex items-center justify-center'>
            <FaPlay className='mr-2'/> Play
          </button>
          <button className='font-bold bg-gray-300 w-28 h-12'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;
