import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUsername, updateId, updateProfilePic} from '../../ducks/reducer';

class Auth extends Component {



getRegister = () => {
  axios.post('/api/user').then(res => {
    console.log('got it', res)
  })
}

handleUsername = (val) => {
  this.setState({username: ''})
}

handlePass = (val) => {
  this.setState({password: ''})
}


  render() {
    return (
      <div>
        <h1>auth</h1>
        Username:<input type="text" onChange={e => this.handleUsername(e.target.value)}/>
        Password:<input type="text" onChange={e => this.handlePass(e.target.value)}/>
        <button>Login</button>
        <button onClick={this.getRegister()}><Link to="/dashboard">Register</Link></button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  updateUsername, updateId, updateProfilePic
}


export default connect(null,mapDispatchToProps)(Auth);