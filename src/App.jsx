import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideNav from './components/SideNav'
import Home from './pages/Home'
import TweetDetail from './pages/TweetDetail'
import Explore from './pages/Explore'
import Notifications from './pages/Notifications'
import Messages from './pages/Messages'
import Bookmarks from './pages/Bookmarks'
import Profile from './pages/Profile'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <SideNav/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/notifications' element={<Notifications />}/>
          <Route path='/messages' element={<Messages />}/>
          <Route path='/bookmarks' element={<Bookmarks />}/>
          <Route path='/:user' element={<Profile/>}/>
          <Route path='/:user/status/:id' element={<TweetDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
