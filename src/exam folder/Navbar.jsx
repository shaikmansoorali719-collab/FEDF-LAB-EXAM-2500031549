import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import Home from './Home';
import DepartmentRegistration from './DepartmentRegistration'
import RegisteredDepartmentUser from './RegisteredDepartmentUser'
import ApiDemo from './ApiDemo'

export default function Navbar() {
  return (
    <div>

    <nav>
        <Link to="/">Home</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/added">Added Department</Link>
        <Link to="/apidemo">Api Demo</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<DepartmentRegistration/>}/>
        <Route path="/added" element={<RegisteredDepartmentUser/>}/>
        <Route path="/apidemo" element={<ApiDemo/>}/>
      </Routes>
    </div>
  )
}
