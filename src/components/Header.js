import React from 'react'
import { LOGIN_LOGO } from '../utils/Constaints'
const Header = () => {
  return (
    <div className=' absolute p-2 mx-44 bg-gradient-to-b from-black z-10'>
        <img className='w-44' 
        src={LOGIN_LOGO}alt="logo" />
    </div>
  )
}

export default Header