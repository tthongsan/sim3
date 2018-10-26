import React, { Component } from 'react'

class Auth extends Component {
  render() {
    return (
      <div>
        <h1>auth</h1>
        Username:<input type="text"/>
        Password:<input type="text"/>
        <button>Login</button>
        <button>Register</button>
      </div>
    )
  }
}

export default Auth