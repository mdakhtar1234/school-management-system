import React from 'react'
import teachers from '../assets/TeacherData';
import Footer from './Footer';
import TeacherDashboard from './TeacherMS/TeacherDashboard';
function Teacher() {

  return (
   <>

   
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Teacher Management</h2>

        <button className="btn btn-success">
          Add Teacher
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
                <th>Name</th>
                <th>Subject</th>
                <th>Qualification</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.qualification}</td>
                  <td>{teacher.contact}</td>
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
    <Footer/></>
  );
}

export default Teacher
