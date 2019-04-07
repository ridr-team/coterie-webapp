import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import '../../PageLayout.scss'
class Header extends Component {

  render() {
    return (
      <div className='wrapper text-center'>
  <nav className='navbar navbar-expand-lg navbar-light test navbar-toggleable-md'>
    <ul className='navbar-nav mr-auto'>
      <li className='nav-item'>
        <a>
          <NavLink to='/#' className='logo' href='#'>
            coterie
          </NavLink>
        </a>
      </li>
  </ul>
      { /*<li className='nav-item'>
        <a className='nav-link' href='#'>
          <Link to='/counter'>
            Counter
          </Link>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link disabled' href='#'>
          <Link to='/groups'>
            Groups
          </Link>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          <Link to='/tasks'>
            Tasks
          </Link>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          <Link to='/chat'>
            Chat
          </Link>
        </a>
      </li>*/}

      <ul className='navbar-nav pull-right linkTest'>
          <li className='nav-item'>
              <a className='nav-link' href='#features'>
                  <Link>
                      Features
                  </Link>
              </a>
          </li>
          <li className='nav-item'>
              <a className='nav-link' href='#team'>
                  <Link>
                      Team
                  </Link>
              </a>
          </li>
          {/*   <li className='nav-item'>
        <a className='nav-link' href='#'>
          <Link to='/users/login'>
            Login
          </Link>
        </a>
      </li>
      <li className='nav-item linkTest'>
        <a className='nav-link' href='#'>
          <Link to='/users/signup'>
            Signup
          </Link>
        </a>
      </li>*/}
    </ul>
  </nav>
</div>
    )
  }

}

export default Header;
