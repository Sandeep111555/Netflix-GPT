import React from 'react';
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({title,description}) => {
  return (
    <div className='absolute text-white w-screen aspect-video bg-gradient-to-b from-black'>
      <div className='mt-[20%] mx-4'>
        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className='mt-5 w-96'>{description}</p>
        <div className='mt-5 flex gap-5'>
          <button className='font-bold bg-white text-black rounded-sm w-28 h-12 flex items-center justify-center hover:opacity-90'>
            <FaPlay className='mr-2'/> Play
          </button>
          <button className='font-bold bg-gray-900 w-28 h-12 rounded-sm hover:opacity-90'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;
