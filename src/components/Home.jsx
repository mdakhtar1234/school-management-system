import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">
            Welcome to School Management System
          </h1>
          <p className="lead">
            Manage Students, Teachers, Attendance, Results, and Admissions in
            one place.
          </p>

          <button className="btn btn-light btn-lg mt-3">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Features</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100">
               
              <div className="card-body text-center">
                <Link to="/StudentDashboard"><h4>👨‍🎓 Students</h4></Link>
               
                <p>
                  Manage student records, profiles, and academic details.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h4>👨‍🏫 Teachers</h4>
                <p>
                  Maintain teacher information and department records.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h4>📋 Attendance</h4>
                <p>
                  Track daily attendance of students and teachers easily.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h4>📝 Results</h4>
                <p>
                  Publish and manage examination results efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h4>📢 Notice Board</h4>
                <p>
                  Share important announcements and notices with everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h4>📚 Admissions</h4>
                <p>
                  Handle new admissions and student registrations smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2>About Our School</h2>
          <p className="mt-3">
            Our School Management System helps schools manage their daily
            operations efficiently. It provides a user-friendly dashboard for
            handling students, teachers, attendance, results, fees, and notices.
          </p>
        </div>
      </div>

 <Footer/>
     
    </></>
  )
}

export default Home