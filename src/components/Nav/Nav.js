import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Nav = () => {
  return (
    <div>
    <button><Link to="/">Home</Link></button>
    <button><Link to="/post/:postid">New Post</Link></button>
    
    </div>
  )
}

function mapStateToProps(state) {
  const {username, profilePic} = state;
  return {username, profilePic}
}

export default connect(mapStateToProps)(Nav)

//<button><Link to="//">Logout</Link></button>