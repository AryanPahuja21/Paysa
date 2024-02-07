import React from 'react'
import Navbar from './Navbar'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";

const Loan = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-fit mx-auto bg-green-200 p-5 rounded-md'>
      <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Loan Eligibility Form
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Check if you are eligibile to avail for a loan.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Loan ID
          </Typography>
          <Input
            size="lg"
            placeholder="Enter Loan ID"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Gender
          </Typography>
          <Input
            size="lg"
            placeholder="Male/Female"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Married or not
          </Typography>
          <Input
            size="lg"
            placeholder="Yes/No"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Education
          </Typography>
          <Input
            size="lg"
            placeholder="Graduate/Not Graduate"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Self-Employed
          </Typography>
          <Input
            size="lg"
            placeholder="Yes/No"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Applicant Income
          </Typography>
          <Input
            size="lg"
            placeholder="Enter Income"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Co-Applicant Income
          </Typography>
          <Input
            size="lg"
            placeholder="Enter Co-Applicant Income"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Loan Amount
          </Typography>
          <Input
            size="lg"
            placeholder="Enter Loan Amount"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Loan Amount Term
          </Typography>
          <Input
            size="lg"
            placeholder="Enter Loan Amount Term"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Credit History
          </Typography>
          <Input
            size="lg"
            placeholder="Enter Credit History"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Property Area
          </Typography>
          <Input
            size="lg"
            placeholder="Urban/Rural"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          </div>
 
        <button className="mt-6 w-full text-black bg-green-500 rounded-xl">
          Check Eligibility
        </button>
      </form>
    </Card>
      </div>
    </div>
  )
}

export default Loan
