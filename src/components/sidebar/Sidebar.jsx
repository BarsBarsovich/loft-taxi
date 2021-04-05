import './Sidebar.css';
import logo from './logo.svg'
import React from "react";

const Sidebar = () => {
    return (
      <div className='sidebar' data-testid='sidebar'>
          <div className="sidebar__container">
              <img src={logo} alt=""/>
          </div>
      </div>
    );
}


export default Sidebar;
