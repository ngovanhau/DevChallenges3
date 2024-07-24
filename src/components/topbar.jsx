import React from 'react';
import { NavLink } from 'react-router-dom';
import './topbar.css';

const Sidebar = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-item">
          <NavLink exact to="/" activeClassName="active">All</NavLink>
        </div>
        <div className="topbar-item">
          <NavLink to="/active" activeClassName="active">Active</NavLink>
        </div>
        <div className="topbar-item">
          <NavLink to="/completed" activeClassName="active">Completed</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
