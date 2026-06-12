import React from 'react'
import results from '../assets/ResultData';
import Footer from './Footer';
function Result() {


  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Student Results</h2>


        </div>

        <div className="container-fluid-py-4">
          <div className="card shadow-lg">
            <div className="card-body  "
              style={
                {
                  maxHeight: "400px",
                  overflowY: "auto",
                  overflowX: "auto",
                }}
            >
              <table className="table table-responsive-sm table-bordered table-hover text-center">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Marks</th>
                    <th>Total Marks</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {results.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.class}</td>
                      <td>{student.marks}</td>
                      <td>{student.total}</td>
                      <td>{student.percentage}</td>
                      <td>
                        <span className="badge bg-success">
                          {student.grade}
                        </span>
                      </td>
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

      </div>
      <Footer/>
    </>

  );
}

export default Result
