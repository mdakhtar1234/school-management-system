import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            School XYZ
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item" >
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/student">
                  Student
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/teacher">
                  Teacher
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/attendance">
                  Attendance
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/admission">
                  Admission
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/result">
                  Result
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/noticeboard">
                  Notice Board
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

       </>
  )
}

export default Navbar