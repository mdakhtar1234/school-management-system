import React from 'react'
import students from '../assets/studentsData'
function Students() {
  
   



  return (



    






   <>


<div className="container mt-5">
      <div className="card shadow">
        <div className="card-header text-center">
          <h2>Student Registration Form</h2>
        </div>

        <div className="card-body">
          <form>
            {/* ID */}
            <div className="mb-3">
              <label className="form-label">Student ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student ID"
              />
            </div>

            {/* Student Name */}
            <div className="mb-3">
              <label className="form-label">Student Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student Name"
              />
            </div>

            {/* Class */}
            <div className="mb-3">
              <label className="form-label">Class</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Class"
              />
            </div>

            {/* Roll No */}
            <div className="mb-3">
              <label className="form-label">Roll No</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Roll Number"
              />
            </div>

            {/* Contact */}
            <div className="mb-3">
              <label className="form-label">Contact Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Enter Contact Number"
              />
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
        <div className="card-body">
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
    </div></>
  )
}

export default Students
