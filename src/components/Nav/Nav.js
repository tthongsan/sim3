import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
    <button><Link to="/">Home</Link></button>
    <button><Link to="/post/:postid">New Post</Link></button>
    <button><Link to="//">Logout</Link></button>
    </div>
  )
}

export default Nav