import React from 'react'
import './sidebar.scss'
import { sidebar } from '../../../data'

const Sidebar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`sidebar ${menuOpen ? 'sidebarOpen' : 'sidebarClose'}`}>
      <ul>
        {sidebar.map((list) => (
          <li key={list.id} onClick={() => setMenuOpen(false)}>
            <a href={list.link}>{list.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
