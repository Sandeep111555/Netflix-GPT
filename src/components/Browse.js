import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
     navigate("/") 
    }).catch((error) => {
      // An error happened. //this is yet to be build.
    });
  }
  return (
    <div className='flex justify-between p-2'>
      <div><Header /></div>
      <div className='flex gap-2'>
        <div className="w-10">
          <img className="border rounded-lg" src={user?.photoURL} alt="profilePicture" />
        </div>
        <button onClick={handleSignout} className='font-bold text-red-600'>SignOut</button>
      </div>
    </div>
  )
}

export default Browse