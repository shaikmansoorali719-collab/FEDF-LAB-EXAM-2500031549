import React, { useState, useEffect } from "react";
import './table.css'

function AddedDepartment() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("students"));
    if (savedData) {
      setStudents(savedData);
    }
  }, []);

  return (
    <div className="data-container">
      <h2>Added Departments / Registered Students</h2>
      {students.length === 0 ? (
        <p className="empty-state">No students registered yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Gender</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td>{student.gender}</td>
                <td>{student.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AddedDepartment;
