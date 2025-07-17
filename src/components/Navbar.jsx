import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Message', path: '/message' },
  { name: 'Memories', path: '/memories' },
  { name: 'Surprise', path: '/surprise' },
  { name: 'Secret', path: '/secret' }
]

const Navbar = () => {
  const location = useLocation()

  return (
    <nav className="love-navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <h1 className="navbar-title">
            <span className="heart-icon">💚</span>
            My Love
            <span className="heart-icon">💚</span>
          </h1>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="floating-hearts">
        <div className="heart heart-1">💚</div>
        <div className="heart heart-2">💖</div>
        <div className="heart heart-3">💚</div>
        <div className="heart heart-4">💕</div>
        <div className="heart heart-5">💚</div>
      </div>
    </nav>
  )
}

export default Navbar
