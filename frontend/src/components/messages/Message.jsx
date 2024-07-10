import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full '>
                <img src = "https://cdn.iconscout.com/icon/free/png-512/free-avatar-372-456324.png?f=webp&w=512" alt = "user logo"/>
            </div>
        </div>
        <div className='chat-bubble text-white bg-slate-500'>Hi! what's up </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:00</div>
    </div>
  )
}

export default Message