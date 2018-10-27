import React, { Component } from 'react'
import axios from 'axios';
import './Auth.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUsername, updateId, updateProfilePic} from '../../ducks/reducer';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }


getRegister = () => {
  const {username, password} = this.state;
  axios.post('/api/user', {username, password}).then(res => {
    console.log('got it', res)
  })
}

login = () => {
  const {username, password} = this.state;
  axios.post('/api/login', {username, password}).then(res => {
    console.log('got it again', res)
  })
}

handleUsername = (val) => {
  console.log(val)
  this.setState({username: val})
}

handlePass = (val) => {
  this.setState({password: val})
}


  render() {
    const {username, password} = this.state
    return (
      <div className="authbox">
        <img src="https://png.icons8.com/metro/1600/wink.png" alt=""/>
        <h1>helo</h1>
        Username:<input type="text" onChange={e => this.handleUsername(e.target.value)}/>
        Password:<input type="text" onChange={e => this.handlePass(e.target.value)}/>
        <button onClick={() => this.login({username, password})}><Link to="/dashboard"> Login </Link> </button>
        <button onClick={() => this.getRegister({username, password})}><Link to="/dashboard">Register</Link></button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  updateUsername, updateId, updateProfilePic
}


export default connect(null,mapDispatchToProps)(Auth);