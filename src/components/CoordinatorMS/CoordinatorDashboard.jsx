import React, { useState, useEffect } from "react";

function CoordinatorDashboard() {
  const [coordinator, setCoordinator] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setCoordinator({
      name: "Ali Khan",
      department: "Computer Science",
      students: 350,
      teachers: 20,
      courses: 15,
    });

    setEvents([
      {
        id: 1,
        title: "React Workshop",
        date: "10 July 2026",
      },
      {
        id: 2,
        title: "Java Mock Interview",
        date: "15 July 2026",
      },
      {
        id: 3,
        title: "Project Presentation",
        date: "20 July 2026",
      },
    ]);
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">
        Coordinator Dashboard
      </h1>

      {/* Profile Card */}
      <div className="card shadow p-4 mb-4">
        <h3>Coordinator Profile</h3>
        <hr />

        <p>
          <strong>Name:</strong> {coordinator.name}
        </p>

        <p>
          <strong>Department:</strong> {coordinator.department}
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="card bg-primary text-white shadow">
            <div className="card-body">
              <h5>Total Students</h5>
              <h2>{coordinator.students}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card bg-success text-white shadow">
            <div className="card-body">
              <h5>Total Teachers</h5>
              <h2>{coordinator.teachers}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card bg-warning shadow">
            <div className="card-body">
              <h5>Total Courses</h5>
              <h2>{coordinator.courses}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <h3 className="mb-3">Upcoming Events</h3>

      <div className="row">
        {events.map((event) => (
          <div className="col-md-4 mb-3" key={event.id}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5>{event.title}</h5>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>

                <button className="btn btn-primary">
                  View Event
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoordinatorDashboard;