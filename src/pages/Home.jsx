import React, { useState } from 'react'
import { forfoll } from '../../constants'
import Post from '../components/Post'
import Tweet from '../components/Tweet'

const Home = () => {


  return (
    <div className='w-1/3 border border-gray-200'>
      <h1 className='font-bold text-xl my-2'>Home</h1>
      <div className='flex flex-row'>
        {forfoll.map((two) => (
          <div id={two.id} className='w-full hover:bg-gray-200 transition'> 
            <p className='p-3 text-center'>{two.name}</p>
          </div>
        ))}
      </div>
      <hr/>
      <div className='p-2 flex flex-row'>
        <Post />
        <Tweet />
      </div>
    </div>
  )
}

export default Home
