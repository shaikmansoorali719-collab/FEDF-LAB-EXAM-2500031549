import React, { useState, useEffect } from "react";
import './registration.css'

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
    <div className="form-container">
      <h2>Department Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Department:</label>
          <select name="department" value={formData.department} onChange={handleChange}>
            <option value="">Select Department</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECH">MECH</option>
          </select>
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Year:</label>
          <select name="year" value={formData.year} onChange={handleChange}>
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>

        <button type="submit" className="form-btn">Register</button>
      </form>
    </div>
  );
}

export default DepartmentRegistration;