import React from 'react'
import { NavLink } from 'react-router-dom'
function Title() {
    return (
      <div>
        <div className="Title-Title">
        <h1>CardStamp</h1>
        </div>
        <div className="Title-Subtitle">
        <h2>Send a virtual card signed by many!</h2>
        </div>
        <div>
        <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/">List</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/about">About</NavLink>
        </div>
      </div>
    )
  }
  
  export default Title