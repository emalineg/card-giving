import React from 'react'
import { NavLink } from 'react-router-dom'
import './Title.css'
function Title() {
    return (
      <div>
        <div className="Title-Title">
        <h1>CardStamp</h1>
        </div>
        <div className="Title-Subtitle">
        <h2>Send a personalized virtual card!</h2>
        </div>
        <div>
        <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/">Cards</NavLink>
        <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/about">About</NavLink>
        </div>
      </div>
    )
  }
  
  export default Title