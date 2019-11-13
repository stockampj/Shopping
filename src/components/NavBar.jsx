import React from 'react';
import './NavBar.css';
// import DropDown from './DropDown';

function NavBar() {
  return (
    <div>
      <div className='row top'>
  
      </div>
      <div className='row bottom'>
        <ul>
          <li className='btn'>Home</li>
          <li className='btn'>Notifications</li>
          <li className='btn'>Messages</li>
        </ul>
        <form>
          <button className='btn tweet'>Post</button>
          <input type='text' placeholder='Whats on your mind?'/>
        </form>
      </div>
    </div>
  );
}

export default NavBar;