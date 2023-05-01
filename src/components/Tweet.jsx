import React, { useState } from 'react'

const Tweet = () => {

    const [tweet, setTweet] = useState('');

    const handleTweet = (event) => {
        event.preventDefault();
        setTweet('')
        //POST REQUEST TO TWITTER
    }

    return (
        <form className='flex flex-col p-2 w-full' onSubmit={handleTweet}>
            <select className=' text-[#1c9bee] font-bold rounded-full text-sm border border-[#1c9bee] w-1/4'>
                <option>Everyone</option>
                <option>Twitter Circle</option>
            </select>
            <input className='text-black text-xl focus:outline-none border-none py-5' placeholder={`What's happening?`} value={tweet} onChange={event => setTweet(event.target.value)}/>
            <p className=' text-[#1c9bee] font-bold text-sm'>Everyone can reply</p>
            <hr className='w-full my-3' />
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row'>Icon</div>
                <button className={`text-white px-4 py-1 rounded-full font-bold ${tweet === ''?'bg-[#99cdf8]':'bg-[#1c9bee]'}`} type='submit'>Tweet</button>
            </div>
        </form>
    )
}

export default Tweet
