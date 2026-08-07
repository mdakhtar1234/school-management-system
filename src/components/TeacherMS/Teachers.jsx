
import teachers from "../TeacherMS/TeacherData";

function Teachers() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Teachers List</h2>

      <div className="row">
        {teachers.map((teacher) => (
          <div className="col-md-4 mb-4" key={teacher.id}>
            <div className="card shadow p-3">
              <h4>{teacher.name}</h4>
              <p><strong>Subject:</strong> {teacher.subject}</p>
              <p><strong>Qualification:</strong> {teacher.qualification}</p>
              <p><strong>About:</strong> {teacher.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;