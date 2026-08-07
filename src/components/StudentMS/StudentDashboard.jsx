import React, { useState, useEffect } from "react";
import Result from "./Result";
import { Link } from "react-router-dom";
import StudentImages from '../StudentMS/StudentImages/developerImage.jpg';

function StudentDashboard() {

  const courses2 = [
    { id: 1, title: "Web Development 10.0", progress: 100 },
    { id: 2, title: "ReactJS Mastery", progress: 75 },
    { id: 3, title: "Java Full Stack", progress: 50 },
    { id: 4, title: "JavaScript Basics", progress: 30 },
    { id: 5, title: "SQL Practice", progress: 90 },
    { id: 6, title: "NodeJS API", progress: 60 }
  ];
  const [student, setStudent] = useState({});
  const [courses, setCourses] = useState([]);



  useEffect(() => {
    setStudent({
      name: "MD AKHTAR ALI",
      course: "Java Full Stack Development",
      attendance: "92%",
      marks: 85,
      progress: 75,
    });

    setCourses([
      {
        id: 1,
        title: "HTML & CSS",
        description: "Types of Heading",
        status: "Completed",
      },
      {
        id: 2,
        title: "JavaScript",
        status: "Completed",
      },
      {
        id: 3,
        title: "React JS",
        status: "In Progress",
      },
    ]);
  }, []);




  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4 bg-primary text-light">Student Dashboard</h1>

        {/* Student Details */}
        <div className="card shadow p-4 mb-4">
          <div
            className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
            style={{
              width: "100px",
              height: "100px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <img
              src={ StudentImages}
              alt="Profile"
              className="w-100 h-100 object-fit-cover rounded-circle"
            />
          </div>
          <hr />

          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Attendance <span className="text-primary">Score :</span></strong> {student.attendance}</p>
          <p><strong>Marks:</strong> {student.marks}</p>
        </div>



        {/** learnCard */}

        <h3 className="mb-3">My Courses</h3>
        <div className="container mt-5">
          <div
            className="card shadow-md border-0 rounded-4"
            style={{ background: "white" }}
          >
            <div className="card-body p-4">

              <h4 className="fw-bold mb-3">
                Web Development Essentials 10.0
              </h4>

              {/* Badges */}

              <div className="d-flex flex-wrap gap-2 mb-4">

                <span className="badge bg-white text-dark border px-3 py-2">
                  📁 26 Topics
                </span>

                <span className="badge bg-white text-dark border px-3 py-2">
                  ▶️ 21 Videos
                </span>

                <span className="badge bg-white text-dark border px-3 py-2">
                  📝 6 Assignments
                </span>

                <span className="badge bg-white text-dark border px-3 py-2">
                  ✔️ 1 Test
                </span>

              </div>

              {/* Progress */}

              <div className="d-flex justify-content-between mb-2">
                <h6 className="mb-0">Progress</h6>
                <span className="fw-semibold">100%</span>
              </div>

              <div
                className="progress"
                style={{ height: "12px", borderRadius: "10px" }}
              >
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "100%" }}
                ></div>
              </div>

              <small className="text-muted">Completed</small>

              {/* Button */}

              <button className="btn btn-success w-100 mt-4 py-3 fw-bold rounded-3">
                Continue Learning
              </button>

            </div>
          </div>
        </div>

        <hr />
        {/** another card */}
        <div className="container mt-5">
          <div
            className="card shadow-md border-0 rounded-4"
            style={{ background: "white" }}
          >
            <div className="card-body p-4">

              <h4 className="fw-bold mb-3">
                React Essentials 10.0
              </h4>

              {/* Badges */}

              <div className="d-flex flex-wrap gap-2 mb-4">

                <span className="badge bg-white text-dark border px-3 py-2">
                  📁 26 Topics
                </span>

                <span className="badge bg-white text-dark border px-3 py-2">
                  ▶️ 21 Videos
                </span>

                <span className="badge bg-white text-dark border px-3 py-2">
                  📝 6 Assignments
                </span>

                <span className="badge bg-white text-dark border px-3 py-2">
                  ✔️ 1 Test
                </span>

              </div>

              {/* Progress */}

              <div className="d-flex justify-content-between mb-2">
                <h6 className="mb-0">Progress</h6>
                <span className="fw-semibold">100%</span>
              </div>

              <div
                className="progress"
                style={{ height: "12px", borderRadius: "10px" }}
              >
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "100%" }}
                ></div>
              </div>

              <small className="text-muted">Completed</small>

              {/* Button */}

              <button className="btn btn-success w-100 mt-4 py-3 fw-bold rounded-3">
                Continue Learning
              </button>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default StudentDashboard;