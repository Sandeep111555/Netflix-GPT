import React, { useEffect } from 'react'
import { LOGIN_LOGO } from '../utils/Constaints'
import { Link, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { removeUser, addUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;  //we get all the details of the validated user just signed in.
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))  //it will trigger the adduser reducer function and adds the user to the userSlice
        navigate('/browse');
      } else {
        // User is signed out
        // ...
        dispatch(removeUser()) //this will be called when there is logout event

        navigate('/');  
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Link to='/'>
      <div className=' absolute p-2 mx-44 bg-gradient-to-b from-black z-10'>
        <img className='w-44'
          src={LOGIN_LOGO} alt="logo" />
      </div>
    </Link>
  )
}

export default Header;