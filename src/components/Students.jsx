import React, { useState } from 'react'
import students from '../assets/studentsData'
import { useForm } from 'react-hook-form'
import Footer from './Footer'

function Students() {

  const { register,
    handleSubmit,
    formState: { errors } } = useForm()

  const submitHandle = (data) => {
    console.log(data)
  }
  return (

    <>
      <div className="container mt-5 bg-light">
        <div className="card shadow">
          <div className="card-header text-center">
            <h2>Student Registration Form</h2>
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
                  type="tel"
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






      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Student Management</h2>

          <button className="btn btn-primary">
            Add Student
          </button>
        </div>

        <div className="card shadow">
          <div className="card-body"
            style={
              {
                maxHeight: "400px",
                overflowY: "auto",
                overflowX: "auto",
              }}
          >
            <table className="table table-bordered table-hover text-center">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Student Name</th>
                  <th>Class</th>
                  <th>Roll No</th>
                  <th>Contact</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.class}</td>
                    <td>{student.rollNo}</td>
                    <td>{student.contact}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2">
                        Edit
                      </button>

                      <button className="btn btn-danger btn-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default Students
