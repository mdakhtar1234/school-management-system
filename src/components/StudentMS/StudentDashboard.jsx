import React, { useState, useEffect } from "react";
import Result from "./Result";

function StudentDashboard() {
    const [student, setStudent] = useState({});
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setStudent({
            name: "Ali",
            course: "Java Full Stack Development",
            attendance: "92%",
            marks: 85,
            progress: 75,
        });

        setCourses([
            {
                id: 1,
                title: "HTML & CSS",
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
                    <h3>Student Details</h3>
                    <hr />

                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Course:</strong> {student.course}</p>
                    <p><strong>Attendance:</strong> {student.attendance}</p>
                    <p><strong>Marks:</strong> {student.marks}</p>
                </div>

                {/* Progress Card */}
                <div className="card shadow p-4 mb-4">
                    <h3>Course Progress</h3>

                    <div className="progress mt-3" style={{ height: "25px" }}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${student.progress}%` }}
                        >
                            {student.progress}%
                        </div>
                    </div>
                </div>

                {/* Course Cards */}
                <h3 className="mb-3">My Courses</h3>

                <div className="row">
                    {courses.map((course) => (
                        <div className="col-md-4 mb-3" key={course.id}>
                            <div className="card shadow h-100">
                                <div className="card-body">
                                    <h5>{course.title}</h5>
                                    <p>
                                        Status:
                                        <span
                                            className={`ms-2 badge ${course.status === "Completed"
                                                    ? "bg-success"
                                                    : "bg-warning text-dark"
                                                }`}
                                        >
                                            {course.status}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Result />
        </>
    );
}

export default StudentDashboard;