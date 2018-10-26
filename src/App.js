import React, { Component } from 'react';
// import Auth from './components/Auth/Auth';
// import Dashboard from './components/Dashboard/Dashboard';
// import Form from './components/Form/Form';
// import Port from './components/Post/Post';
import routes from './route';
import Nav from './components/Nav/Nav';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
        <Nav />
      </div>
    );
  }
}

export default App;

// <Auth/>
// <Dashboard/>
// <Form/>
// <Port/>