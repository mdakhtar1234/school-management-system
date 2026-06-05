import React from 'react'
import students from '../assets/studentsData'
function Students() {
  

  return (
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
    </div>
  )
}

export default Students
