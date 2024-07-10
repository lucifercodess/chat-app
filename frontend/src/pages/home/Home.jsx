import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex'>
        <Sidebar/>  
        <MessageContainer/>  
    </div>
  )
}

export default Home