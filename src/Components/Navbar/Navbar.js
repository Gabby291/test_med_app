import React from 'react';
import './Navbar.css';  // Import the CSS for styling
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
     <nav>
  {/* Navigation logo section */}
  <div className="nav__logo">
    {/* Link to the home page */}
    <a href="/">
      <span> StayHealthy </span>
      {/*  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="75" height="75" viewBox="0 0 256 256" style="fill:#3685fb">
     <g>
      <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(94.33151750972763 94.3315175097276) scale(0.74 0.74)">
          <path d="M 51.786 73.662 H 38.214 c -1.657 0 -3 -1.343 -3 -3 v -8.351 h -8.35 c -1.657 0 -3 -1.343 -3 -3 V 45.739 c 0 -1.657 1.343 -3 3 -3 h 8.35 v -8.35 c 0 -1.657 1.343 -3 3 -3 h 13.572 c 1.657 0 3 1.343 3 3 v 8.35 h 8.351 c 1.657 0 3 1.343 3 3 v 13.572 c 0 1.657 -1.343 3 -3 3 h -8.351 v 8.351 C 54.786 72.319 53.443 73.662 51.786 73.662 z M 41.214 67.662 h 7.572 v -8.351 c 0 -1.657 1.343 -3 3 -3 h 8.351 v -7.572 h -8.351 c -1.657 0 -3 -1.343 -3 -3 v -8.35 h -7.572 v 8.35 c 0 1.657 -1.343 3 -3 3 h -8.35 v 7.572 h 8.35 c 1.657 0 3 1.343 3 3 V 67.662 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(40,52,138); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path d="M 77.343 84.195 H 12.657 c -1.657 0 -3 -1.343 -3 -3 V 30.653 c 0 -1.657 1.343 -3 3 -3 s 3 1.343 3 3 v 47.542 h 58.686 v -47.78 c 0 -1.657 1.343 -3 3 -3 s 3 1.343 3 3 v 50.78 C 80.343 82.853 79 84.195 77.343 84.195 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(40,52,138); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path d="M 3.003 40.025 c -0.975 0 -1.93 -0.474 -2.507 -1.348 c -0.913 -1.383 -0.531 -3.244 0.852 -4.156 l 42.77 -28.22 c 1.018 -0.672 2.34 -0.661 3.347 0.028 l 41.229 28.22 c 1.367 0.936 1.717 2.803 0.781 4.17 s -2.804 1.716 -4.17 0.781 L 45.739 12.419 L 4.652 39.528 C 4.144 39.864 3.57 40.025 3.003 40.025 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(40,52,138); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
      </g>
  </g>
      </svg> */}
    </a>
  </div>
  {/* Navigation icon section with an onClick event listener */}
  <div className="nav__icon" onclick="{handleClick}">
    {/* Font Awesome icon for bars (hamburger menu) */}
    <i className="fa fa-times fa fa-bars" />
  </div>
  {/* Unordered list for navigation links with 'active' class */}
  <ul className="nav__links active">
    {/* List item for the 'Home' link */}
    <li className="link">
    <Link to="/">Home</Link>
    </li>
    {/* List item for the 'Appointments' link */}
    <li className="link">
      <Link to="/booking-consultation">Appointments</Link>
    </li>
    {/* List item for the 'Health Blog' link */}
    <li className="link">
      <a href="#">Health Blog</a>
    </li>
    {/* List item for the 'Reviews' link */}
    <li className="link">
      <Link to="/reviews">Reviews</Link>
    </li>
     {/*<li><p>welcome, Gabby</p></li>*/}
    {/* List item for the 'Sign Up' link with a button */}
   <li className="link">
    <Link to="/signup">
        <button className="btn1">Sign Up</button>
        </Link>
    </li> 
    {/* List item for the 'Login' link with a button */}
    <li className="link">
    <Link to="/profile">
        <button className="btn1">Login</button>
      </Link>
    </li>
  </ul>
</nav>
</div>
  );
}

export default Navbar;