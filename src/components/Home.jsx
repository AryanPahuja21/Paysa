import React from 'react';
import Navbar from './Navbar';
import Cover from '../Images/cover.png';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <>
    <Navbar/>
      <div className='w-[95vw] h-[80vh] mx-7 my-10 rounded-lg grid grid-cols-2 gap-3 bg-green-200'>
        <div className='w-[40vw]'>
            <h1 className='text-7xl font-bold p-4 mt-[70px] ml-[80px]'>Fastest Way to Send Money to Anyone, Anywhere, Anytime.</h1>
            <Link to='/dashboard'><button className='bg-orange-400 p-4 px-10 text-3xl font-semibold rounded-xl ml-[100px] my-10'>Get Started</button></Link>
            <button className='underline text-2xl mx-10'>Learn More</button>
        </div>
        <div>
        <img className='h-[40vw] absolute right-[50px]' src={Cover} alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
