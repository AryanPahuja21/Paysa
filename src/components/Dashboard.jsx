import React from 'react';
import Navbar from './Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Loan from '../Images/loan.png'
import Data from '../Images/data-visualization.jpg'
import Transactions from '../Images/Transactions.jpg'
import Comparison from '../Images/Comparison.png'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <div className='bg-green-200 w-[95vw] mx-6 rounded-lg'>
      <div>
        <h1 className='w-fit mx-auto text-7xl font-bold text-blue-900 pt-5 font-Dashboard'>Dashboard</h1>
      </div>
      <div className='grid grid-cols-2 w-fit mx-auto'>
      <Link to='/loan'><Card sx={{ maxWidth: 345 }} className='m-[50px]'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Loan}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Loan <br />Eligibility
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quickly determine loan eligibility with our user-friendly online tool, streamlining the application process.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Link>
    <Link to="/data"><Card sx={{ maxWidth: 345 }} className='m-[50px]'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Data}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Data Management and Visualization
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Efficiently manage and visually represent data to gain actionable insights and make informed decisions effortlessly.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Link>
    <Link to="/transactions"><Card sx={{ maxWidth: 345 }} className='m-[50px]'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Transactions}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Transactions
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Easily track, manage, and analyze transactions for a transparent and organized financial experience.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Link>
    <Link to="/comparison"><Card sx={{ maxWidth: 345 }} className='m-[50px]'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Comparison}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Yearly Comparison
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Visualize yearly financial data for easy comparison and informed decision-making.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Link>
    </div>

      </div>
    </div>
  )
}

export default Dashboard
