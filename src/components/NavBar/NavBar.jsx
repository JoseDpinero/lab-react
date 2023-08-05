import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <ul className="list-none flex gap-2">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-active' : 'nav')}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li></li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'nav-active' : 'nav')}
            to="/contact"
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
