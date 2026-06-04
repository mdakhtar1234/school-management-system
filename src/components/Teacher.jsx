import React from 'react'

function Teacher() {
  const teachers = [
    {
      id: 1,
      name: "Rajesh Sharma",
      subject: "Mathematics",
      qualification: "M.Sc",
      contact: "9876543210",
    },
    {
      id: 2,
      name: "Priya Verma",
      subject: "Science",
      qualification: "M.Ed",
      contact: "9876543211",
    },
    {
      id: 3,
      name: "Amit Kumar",
      subject: "English",
      qualification: "M.A",
      contact: "9876543212",
    },
    {
      id: 4,
      name: "Neha Singh",
      subject: "Computer",
      qualification: "MCA",
      contact: "9876543213",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Teacher Management</h2>

        <button className="btn btn-success">
          Add Teacher
        </button>
      </div>

      <div className="card shadow">
        <div className="card-body">
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
  );
}

export default Teacher
