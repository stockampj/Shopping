import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
// import DropDown from './DropDown';

function NavBar() {
  return (
    <div className="">
      <div className='row top-nav-row'>
        <ul>
          <li><Link className='btn home-button' to='/'>BURLYWOOD</Link></li>
        </ul>
      </div>


    <div className='row bottom-nav-row'>
      <div className='left-cluster'>

        {/* <div className='dropdown-toggle'>
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
        </div> */}


      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="">
          <a className="btn active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
        </li>
        <li className="">
          <a className="btn" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
        </li>
        <li className="">
          <a className="btn" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">stuff</div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">yes</div>
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">no</div>
      </div>





        </div>
        <div className='right-cluster'>
          <p>

          <Link className='btn shopping-icon' to='/HotPicks'><i className='fas fa-shopping-bag'></i></Link> 

          </p>
        </div>


      </div>




    </div>
  );
}

export default NavBar;