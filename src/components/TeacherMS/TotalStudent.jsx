import React, { useState } from "react";
import Footer from "../Footer";


function TotalStudent() {
     const initialStudents = [
    {
      id: 1,
      name: "Ankur Kumar",
      class: "10th",
      rollNo: 101,
      contact: "9876543210",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      class: "9th",
      rollNo: 102,
      contact: "9876543211",
    },
    {
      id: 3,
      name: "Priya Singh",
      class: "11th",
      rollNo: 103,
      contact: "9876543212",
    },
    {
      id: 4,
      name: "Nusrat Parween",
      class: "12th",
      rollNo: 104,
      contact: "9876543213",
    },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  const handleDelete = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );
    setStudents(updatedStudents);
  };

  const handleEdit = (student) => {
    setEditId(student.id);
  };

  const handleChange = (e, id, field) => {
    const updatedStudents = students.map((student) =>
      student.id === id
        ? { ...student, [field]: e.target.value }
        : student
    );

    setStudents(updatedStudents);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
    <div className="container mt-4">
      <h2 className="mb-3">Student Management System</h2>

      {/* Search */}
      <div className="mb-3 d-flex">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search Student Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Class</th>
            <th>Roll No</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>

              <td>
                {editId === student.id ? (
                  <input
                    value={student.name}
                    onChange={(e) =>
                      handleChange(e, student.id, "name")
                    }
                  />
                ) : (
                  student.name
                )}
              </td>

              <td>
                {editId === student.id ? (
                  <input
                    value={student.class}
                    onChange={(e) =>
                      handleChange(e, student.id, "class")
                    }
                  />
                ) : (
                  student.class
                )}
              </td>

              <td>
                {editId === student.id ? (
                  <input
                    value={student.rollNo}
                    onChange={(e) =>
                      handleChange(e, student.id, "rollNo")
                    }
                  />
                ) : (
                  student.rollNo
                )}
              </td>

              <td>
                {editId === student.id ? (
                  <input
                    value={student.contact}
                    onChange={(e) =>
                      handleChange(e, student.id, "contact")
                    }
                  />
                ) : (
                  student.contact
                )}
              </td>

              <td>
                {editId === student.id ? (
                  <button
                    className="btn btn-success me-2"
                    onClick={() => setEditId(null)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => handleEdit(student)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  <Footer/>
    </>
  )
}

export default TotalStudent;