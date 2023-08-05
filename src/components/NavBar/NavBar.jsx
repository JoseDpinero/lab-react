import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navBar">
      <ul className="list-none flex gap-2">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-active nav' : 'nav')}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li></li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-active nav' : 'nav')}
            to="/contact"
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
