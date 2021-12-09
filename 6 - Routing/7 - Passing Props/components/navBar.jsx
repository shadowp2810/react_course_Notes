/*
All anchors a are replaces with Link.
So no need to redownload the bundle 
everytime user navigates to different page.
*/

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/Linkdmin">Admin</Link>
      </li>
    </ul>
  );
};
