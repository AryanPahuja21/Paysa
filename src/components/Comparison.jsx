import React from 'react'
import Navbar from './Navbar'
import Chart from '../Images/Chart.jpeg'
import Bar1 from '../Images/Bar1.jpeg'
import Bar2 from '../Images/Bar2.jpeg'
import Bar3 from '../Images/Bar3.jpeg'
import Bar4 from '../Images/Bar4.jpeg'
import Bar5 from '../Images/Bar5.jpeg'


const Comparison = () => {
  return (
    <div>
        <Navbar/>
      <div className='bg-green-300 mx-7 rounded-lg'>
        <h1 className='w-fit mx-auto text-7xl font-Heading underline'>Yearly Data Comparison</h1>
        <div className=''>
            <img className='h-[80vh] w-fit mx-auto' src={Chart} alt="Chart" />
            <p className='w-fit mx-auto text-2xl'>This is the graph plotted the total bill of each year in the duration of 2000-2018</p>
        </div>
        <div>
            <h1 className='w-fit mx-auto text-7xl font-Heading underline mt-24'>Month Wise Data Comparison</h1>
            <p className='w-fit mx-auto text-2xl'>These are the monthwise distributions of bill payments in a year</p>
            <div className='grid grid-cols-2'>
            <img className='my-5 mx-5' src={Bar1} alt="BarGraph" />
            <img className='my-5' src={Bar2} alt="BarGraph" />
            <img className='my-5 mx-5' src={Bar3} alt="BarGraph" />
            <img className='my-5' src={Bar4} alt="BarGraph" />
            <img className='my-5 mx-[25vw]' src={Bar5} alt="BarGraph" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Comparison
