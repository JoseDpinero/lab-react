import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const [show, setShow] = useState(false)

  return (
    <nav className="navBar">
      <button
        className="text-yellow-800 uppercase gap-3 self-end sm:hidden"
        onClick={() => setShow(!show)}
      >
        Button
      </button>
      <div className="nav__container self-center">
        <ul
          className={`list-none gap-2 sm:flex ${
            !show ? 'hidden' : 'items-center  '
          }`}
        >
          <li>
            <NavLink className="nav" to="/">
              Home
            </NavLink>
          </li>
          <li></li>
          <li>
            <NavLink className="nav" to="/contact">
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
