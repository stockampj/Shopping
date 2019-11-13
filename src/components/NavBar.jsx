import React from 'react';
import './NavBar.css';
// import DropDown from './DropDown';

function NavBar() {
  return (
    <div className="nav-row">
      <div className='row top'>
        <ul>
          <li className='btn home-button'>EVERLANE</li>
        </ul>
      </div>
      <div className='row bottom nav-row'>
        <div className='left-cluster'>
          
        </div>
        <div className='right-cluster'>
          <p>
          <button className='btn shopping-icon'><i className='fas fa-shopping-bag'></i></button>
          </p>
        </div>


      </div>

<p>
  <button className='btn btn-primary' type='button' data-toggle='collapse' data-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
    Button with data-target
  </button>
</p>
<div className='collapse' id='collapseExample'>
  <div className='card card-body'>
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>





      
    </div>
  );
}

export default NavBar;
