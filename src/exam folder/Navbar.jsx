import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import DepartmentRegistration from './DepartmentRegistration'
import ApiDemo from './ApiDemo'
import AddedDepartment from './AddedDepartment'
import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/registration" className="nav-link">Department Registration</Link>
        <Link to="/added" className="nav-link">Added Department</Link>
        <Link to="/apidemo" className="nav-link">Api Demo</Link>
      </nav>
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<DepartmentRegistration />} />
          <Route path="/added" element={<AddedDepartment />} />
          <Route path="/apidemo" element={<ApiDemo />} />
        </Routes>
      </div>
    </div>
  )
}
