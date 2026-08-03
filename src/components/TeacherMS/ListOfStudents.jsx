
 import React from 'react'
 import students from "../TeacherMS/ListOfStudent"
 function ListOfStudents() {
   return (
     <div className="container mt-4">
      <h2>Student List</h2>

      <h4>Total Students: {students.length}</h4>

      <ul className="list-group mt-3">
        {students.map((student, index) => (
          <li key={index} className="list-group-item">
            {index + 1}. {student}
          </li>
        ))}
      </ul>
    </div>
   )
 }
 
 export default ListOfStudents