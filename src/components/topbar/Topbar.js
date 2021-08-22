import React, { useState } from 'react'
import { sidebar } from '../../data'
import Sidebar from './sidebar/Sidebar'
import './topbar.scss'
const Topbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className={`header ${menuOpen && 'active'}`}>
        <figure className='logo'>
          <img src='assets/Logo.png' alt='logo' />
          <figcaption>COVID-19</figcaption>
        </figure>
        <nav className='nav'>
          <ul className='navItem'>
            {sidebar.map((list) => (
              <li key={list.id}>
                <a href={list.link}>{list.text}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='right'>
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </header>
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        className={`backdrop ${menuOpen && 'backdropOpen'}`}
        onClick={() => setMenuOpen(false)}></div>
    </>
  )
}

export default Topbar
