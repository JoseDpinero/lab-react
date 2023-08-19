import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const [show, setShow] = useState(false)

  return (
    <nav className="navBar">
      <button
        className="text-yellow-800 uppercase gap-3 sm:hidden"
        onClick={() => setShow(!show)}
      >
        Button
      </button>
      <div className="nav__container sm:flex">
        <ul
          className={`list-none flex gap-2 sm:flex ${show ? 'flex' : 'hidden'}`}
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
