import React from 'react'
import Navbar from './Navbar'
import Chart1 from '../Images/Chart1.jpeg'
import Chart2 from '../Images/Chart2.jpeg'

const Data = () => {
  return (
    <div>
        <Navbar/>
        <div>
        <div>
            <h1 className='w-fit mx-auto text-7xl my-10 font-Heading underline'>Data Management and Visualization</h1>
        </div>
      <div className='grid grid-cols-2 gap-[200px] w-fit mx-auto p-[50px]'>
        <img src={Chart1} alt="Chart1" />
        <img src={Chart2} alt="Chart2" />
      </div>
      </div>
    </div>
  )
}

export default Data
