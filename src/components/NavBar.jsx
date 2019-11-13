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
        <div className='dropdown-toggle'>
          <button className='btn' type='button' data-toggle='collapse' data-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
            Women
          </button>
          <button className='btn' type='button' data-toggle='collapse' data-target='#collapseExample2' aria-expanded='false' aria-controls='collapseExample'>
            Men
          </button>
          <button className='btn' type='button' data-toggle='collapse' data-target='#collapseExample3' aria-expanded='false' aria-controls='collapseExample'>
            About
          </button>
        </div>

        <div className='collapse' id='collapseExample'>
          <div className='card card-body'>
            <ul>
              <li>Sweaters</li>
              <li>Overalls</li>
              <li>Pants</li>
              <li>Jackets</li>
              <li>Hats</li>
              <li>Shoes</li>
            </ul>
          </div>
        </div>

        <div className='collapse' id='collapseExample2'>
          <div className='card card-body'>
            <ul>
              <li>Sweaters</li>
              <li>Overalls</li>
              <li>Pants</li>
              <li>Jackets</li>
              <li>Hats</li>
              <li>Shoes</li>
            </ul>
          </div>
        </div>

        <div className='collapse' id='collapseExample3'>
          <div className='card card-body'>
            Here at Everlane, we really care about making sure our sweaters are extremely expensive.
          </div>
        </div>


        </div>
        <div className='right-cluster'>
          <p>
            <button className='btn shopping-icon'><i className='fas fa-shopping-bag'></i></button>
          </p>
        </div>


      </div>







    </div>
  );
}

export default NavBar;
