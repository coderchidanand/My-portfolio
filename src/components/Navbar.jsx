import React from 'react';
import './style.css'

const Navbar = () => {
    return (
        <div className='flex w-full h-15 justify-between  font-josefin items-center text-white mt-3 '>
            <div>
                <h1 className='port text-white'>Portfolio</h1>
            </div>

            <ul className="flex items-center relative justify-between space-x-16 font-rem cursor-pointer text-lg">
                <li>Home</li>
                <li className='px-4'>About Me</li>
                <li>Contact</li>
            </ul>
            <div>
                <button className='border-2 border-white rounded-full p-3 px-6  font-semibold m-3 text-base'><p>Let's Chat</p></button>
            </div>

        </div>
    )
}

export default Navbar
