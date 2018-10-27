import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Nav = (props) => {
  const {username, profilePic} = props;
  return (
    <div>
    <h1>{username}</h1>
    <button><Link to="/">Home</Link></button>
    <button><Link to="/post/:postid">New Post</Link></button>
    
    </div>
  )
}

function mapStateToProps(state) {
  const {username, profilePic} = state;
  return {username, profilePic}
}

export default connect(mapStateToProps, {})(Nav)

//<button><Link to="//">Logout</Link></button>