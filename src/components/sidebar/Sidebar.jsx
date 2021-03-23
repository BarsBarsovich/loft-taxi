import './Sidebar.css';
import logo from './logo.svg'
const Sidebar = () => {
    return (
      <div className='sidebar'>
          <div className="sidebar__container">
              <img src={logo} alt=""/>
          </div>
          {/*<h1>I am sidebar</h1>*/}

      </div>
    );
}


export default Sidebar;
