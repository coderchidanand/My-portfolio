import React from 'react';
import './style.css';
import Prof from '../assets/Prof.jpg';

const main1 = () => {
    return (
        <>
            <div className=' relative mt-[20vh]'>
                <div className='circle1 bg-red-500 w-[30vh] h-[30vh] rounded-full absolute -top-[10vh] left-[15vh]  '></div>
                <div className='circle2 bg-blue-500 w-[30vh] h-[30vh] rounded-full absolute -bottom-[10vh] right-[15vh]'></div>

                <div className='glass flex flex-col justify-around max-w-[90%] m-auto h-[50vh] md:flex-row '>

                    <div className="c_img  ">
                        <div className="pic scale-75 md:scale-100">
                            <div className="immg ">

                                <img src={Prof} alt="" srcset="" className='rounded-2xl items-center' />

                            </div>
                        </div>
                    </div>

                    <div className="content flex flex-col text-xs md:text-xl text-white">
                        <h2>Hello I'm </h2>
                        <h1>Chidanand Wadeyar</h1>
                        <div className='btn border-blue border-t border-b text-white font-josefin rounded-full font-bold mt-3 w-fit
                        flex'>
                            <button className='bg-transparent p-4'>Hire Me</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default main1
