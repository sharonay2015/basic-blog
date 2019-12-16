import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => (
  <nav>

    <ul class="navbar" role="navigation">
      <li class="left">
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/article-list">Articles</Link>
      </li>

      <li class="home social"><Link to="/"><i class="fa fa-home"></i></Link></li>
      <li class="social"><a href="http://www.twitter.com"> <i class="fa fa-twitter"></i></a></li>
      <li class="social"><a href="http://www.twitter.com" > <i class="fa fa-facebook"></i></a></li>
      <li class="social"><a href="http://www.twitter.com" > <i class="fa fa-github"></i></a></li>
    </ul>
  </nav>
);

export default Navbar;