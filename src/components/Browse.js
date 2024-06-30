import React, { useEffect } from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import useGetNowPlayingMovies from '../Hooks/useGetNowPlayingMovies'
import PrimaryContainer from './PrimaryContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  const user = useSelector(store => store.user);
  useGetNowPlayingMovies();

  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened. //this is yet to be build
    });
  }
  return (
      <>
      <div className='absolute'>
        
      <div><Header /></div>
    <div className=' w-screen flex justify-end'>
      <div className='flex gap-2 m-5'>
        <div className="w-10">
          <img className="border rounded-lg" src={user?.photoURL} alt="profilePicture" />
        </div>
        <button onClick={handleSignout} className='font-bold text-red-600 z-10'>SignOut</button>
      </div>
    </div>

      </div>
    <PrimaryContainer/>
    <SecondaryContainer/>
      </>
  )
}

export default Browse