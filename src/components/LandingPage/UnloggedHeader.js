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
          <NavLink to='/' className='logo'>
            coterie
          </NavLink>
      </li>
  </ul>
      <ul className='navbar-nav pull-right linkTest'>
          <li className='nav-item'>
              <a className='nav-link' href='/#features'>Features</a>
          </li>
          <li className='nav-item'>
              <a className='nav-link' href='/#team'>Team</a>
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
