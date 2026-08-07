import React, { useState, useEffect } from "react";
import TotalStudent from "./TotalStudent";
import Attendance from "./Attendance";
import Result from "../StudentMS/Result";
import img2 from '../TeacherMS/image/developerImage.jpg';
import { Link } from "react-router-dom";



function TeacherDashboard() {
    const [teacher, setTeacher] = useState({});
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setTeacher({
            name: "Ankur Kumar",
            subject: "Full Stack Development",
            students: 120,
            attendance: "95%",
            courses: 4,
        });

        setCourses([
            {
                id: 1,
                name: "HTML & CSS",
                students: 35,
            },
            {
                id: 2,
                name: "JavaScript",
                students: 30,
            },
            {
                id: 3,
                name: "React JS",
                students: 28,
            },
            {
                id: 4,
                name: "Node JS",
                students: 27,
            },
        ]);
    }, []);

    return (
        <>
            <div className="container mt-4">
                <h1 className="text-center mb-4">Teacher Dashboard</h1>

                {/* Teacher Profile */}
                <div className="card shadow p-4 mb-4">
                    <h3>Teacher Profile</h3>
                    <hr />

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
                            src={img2}
                            alt="Profile"
                            className="w-100 h-100 object-fit-cover rounded-circle"
                        />
                    </div>


                    <p>
                        <strong>Name:</strong> {teacher.name}
                    </p>

                    <p>
                        <strong>Subject:</strong> {teacher.subject}
                    </p>
                </div>

                {/* Dashboard Cards */}
                <div className="row mb-4">
                    <div className="col-md-4 mb-3">
                        <div className="card bg-primary text-white shadow">
                            <div className="card-body">
                                <h5>Total Students</h5>
                                <h2>{teacher.students}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card bg-success text-white shadow">
                            <div className="card-body">
                                <h5>Total Courses</h5>
                                <h2>{teacher.courses}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="card bg-warning shadow">
                            <div className="card-body">
                                <h5>Attendance Rate</h5>
                                <h2>{teacher.attendance}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Courses */}
                <h3 className="mb-3">Assigned Courses</h3>

                <div className="row">
                    {courses.map((course, index) => (
                        <div className="col-md-3 mb-3" key={course.id}>
                            <div className="card shadow h-100">
                                <div className="card-body">
                                    <h5>{course.name}</h5>

                                    <p>
                                        <strong>Students:</strong> {course.students}
                                    </p>

                                    <Link to={`/students/${index}`}>
                                        <button className="btn btn-primary">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    );
}

export default TeacherDashboard;