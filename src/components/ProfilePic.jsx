import React, { useEffect } from 'react'
import logo from '../assets/logo.svg'

const ProfilePic = () => {

    // const getProfilePic = async() => {

    // }

    // useEffect(() => {
    //     getProfilePic()
    // },[])

  return (
    <div>
        <img src={logo} height={40} width={40} className='rounded-full'/>
    </div>
  )
}

export default ProfilePic
