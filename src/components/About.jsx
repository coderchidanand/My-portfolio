import React, { useState } from 'react'
import './style.css';
import Ract from '../assets/React.png';
import js from '../assets/js.jpg';
import sql from '../assets/sql.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
const About = () => {

    return (
        <>
            <div className="container">
                <h1 className="skill text-center mt-[10vh] text-white text-5xl mb-10">SKILLS</h1>
                <div className="skills mt-0">

                    <div className="card bg-red" >
                        <div className="circle">
                            <div className="con">
                                <h3 className='font-bold text-[#00d8ff] text-4xl mb-2'>ReactJs</h3>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam possimus libero rem repellat eos autem fugit odit, perferendis quos r.</p>
                            </div>
                            <div className="img-cont ">
                                <img src={Ract} alt="" />

                            </div>
                        </div>
                    </div>

                    <div className="card bg-red" >
                        <div className="circle">
                            <div className="con">
                                <h3 className='font-bold text-[#00d8ff] text-4xl mb-2'>Javascript</h3>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam possimus libero rem repellat eos autem fugit odit, perferendis quos r.</p>
                            </div>
                            <div className="img-cont">
                                <img src={js} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="card bg-red" >
                        <div className="circle">
                            <div className="con">
                                <h3 className='font-bold text-[#00d8ff] text-4xl mb-2'>MySQL</h3>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam possimus libero rem repellat eos autem fugit odit, perferendis quos r.</p>
                            </div>
                            <div className="img-cont ">
                                <img src={sql} alt="" />

                            </div>
                        </div>
                    </div>

                    <div className="card bg-red" >
                        <div className="circle">
                            <div className="con">
                                <h3 className='font-bold text-[#00d8ff] text-4xl mb-2'>HTML</h3>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam possimus libero rem repellat eos autem fugit odit, perferendis quos r.</p>
                            </div>
                            <div className="img-cont ">
                                <img src={html} alt="" />

                            </div>
                        </div>
                    </div>

                    <div className="card bg-red" >
                        <div className="circle">
                            <div className="con">
                                <h3 className='font-bold text-[#00d8ff] text-4xl mb-2'>CSS</h3>
                                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam possimus libero rem repellat eos autem fugit odit, perferendis quos r.</p>
                            </div>
                            <div className="img-cont">
                                <img src={css} alt="" />
                            </div>
                        </div>
                    </div>





                </div >
            </div >





        </>
    )
}

export default About
