import React, { useState, useEffect } from "react";

function DepartmentRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    gender: "",
    year: ""
  });

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("students"));
    if (savedData) {
      setStudents(savedData);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudents = [...students, formData];
    setStudents(newStudents);
    localStorage.setItem("students", JSON.stringify(newStudents));

    alert("Registration Successful");

    setFormData({
      name: "",
      email: "",
      department: "",
      gender: "",
      year: ""
    });
  };

  return (
    <div>
      <h2>Department Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} /><br /><br />

        <label>Email:</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />

        <label>Department:</label><br />
        <select name="department" value={formData.department} onChange={handleChange}>
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="MECH">MECH</option>
        </select><br /><br />

        <label>Gender:</label><br />
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
        <br /><br />

        <label>Year:</label><br />
        <select name="year" value={formData.year} onChange={handleChange}>
          <option value="">Select Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default DepartmentRegistration;