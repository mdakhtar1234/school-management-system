import React, { useState } from 'react'
import students from '../assets/studentsData'
import { useForm } from 'react-hook-form'
import Footer from './Footer'
import StudentDashboard from './StudentMS/StudentDashboard'

function Students() {

  const { register,
    handleSubmit,
    formState: { errors } } = useForm()

  const submitHandle = (data) => {
    console.log(data)
  }


  
  return (

    <>

    
      <div className="container mt-5 bg-light ">
        <div className="card shadow">
          <div className="card-header text-center bg-primary">
            <h2 className='text-light'>Student Registration Form</h2>
          </div>

          <div className="card-body"
            style={
              {
                maxHeight: "400px",
                overflowY: "auto",
                overflowX: "auto",
              }}
          >
            <form onSubmit={handleSubmit(submitHandle)}>
              {/* ID */}
              <div className="mb-3">

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Student ID"
                  {...register("number", {
                    required: "your id is required",
                    minLength: {
                      value: 5,
                      message: " invalid your message",
                    }

                  })}
                />
                {errors.number && <small className='text-danger'>{errors.number.message}</small>}
              </div>

              {/* Student Name */}
              <div className="mb-3">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Student Name"
                  {...register("name", {
                    required: "your name is required",
                    minLength: {
                      value: 10,
                      message: " invalid your message",
                    }

                  })}
                />
                {errors.name && <small className='text-danger'>{errors.name.message}</small>}
              </div>

              {/* Class */}
              <div className="mb-3">

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Class"


                  {...register("class", {
                    required: "Please required your Class name!",

                  })}
                />
                

                {errors.class && <small className='text-danger'>{errors.class.message}</small>}
              </div>

              {/* Roll No */}
              <div className="mb-3">

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Roll Number"
                  {...register("numberRoll", {
                    required: "Please required your Roll Number!",

                  })}
                />
                {errors.numberRoll && <small className='text-danger'>{errors.numberRoll.message}</small>}
              </div>

              {/* Contact */}
              <div className="mb-3">

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Contact Number"
                  {...register("contactNumber", {
                    required: "Please required your Contact Number!",
                    minLength: {
                      value: 10,
                      message: "required 10 digital of number !",
                    }

                  })}

                />
                {errors.contactNumber && <small className='text-danger'>{errors.contactNumber.message}</small>}
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              <button
                type="reset"
                className="btn btn-secondary ms-2"
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Students
