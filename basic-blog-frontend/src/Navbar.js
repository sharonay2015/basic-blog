import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => (
  <nav>

    <ul className="navbar" role="navigation">
      <li className="left">
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/article-list">Articles</Link>
      </li>

      <li className="home social"><Link to="/"><i className="fa fa-home"></i></Link></li>
      <li className="social"><a href="http://www.twitter.com"> <i className="fa fa-twitter"></i></a></li>
      <li className="social"><a href="http://www.twitter.com" > <i className="fa fa-facebook"></i></a></li>
      <li className="social"><a href="http://www.twitter.com" > <i className="fa fa-github"></i></a></li>
    </ul>
  </nav>
);

export default Navbar;