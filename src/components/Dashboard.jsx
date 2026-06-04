import React from 'react'

function Dashboard() {
  return (
    <>
     <div className="container mt-4">
      <h2 className="text-center mb-4">School Management Dashboard</h2>

      <div className="row g-4">

        <div className="col-md-3">
          <div className="card text-center shadow border-0 bg-primary text-white">
            <div className="card-body">
              <h5>Total Students</h5>
              <h2>500</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow border-0 bg-success text-white">
            <div className="card-body">
              <h5>Total Teachers</h5>
              <h2>50</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow border-0 bg-warning text-dark">
            <div className="card-body">
              <h5>Attendance</h5>
              <h2>95%</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow border-0 bg-danger text-white">
            <div className="card-body">
              <h5>Notices</h5>
              <h2>12</h2>
            </div>
          </div>
        </div>

      </div>

      <div className="row mt-5">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              Recent Activities
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  New Student Admission Completed
                </li>
                <li className="list-group-item">
                  Monthly Attendance Updated
                </li>
                <li className="list-group-item">
                  Exam Results Published
                </li>
                <li className="list-group-item">
                  New Notice Added
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header bg-info text-white">
              Quick Information
            </div>
            <div className="card-body">
              <p><strong>Principal:</strong> Mr. Sharma</p>
              <p><strong>Classes:</strong> 1st - 12th</p>
              <p><strong>Session:</strong> 2026-27</p>
              <p><strong>School Timing:</strong> 8:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard