import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      searchList: []
    }
  }


  
  render() {
    return (
      <div className="DASH"> 
        <input type="text"/>
        <button>Search</button>
        <button>Reset</button>
          <ul>
            
            <li><img src="http://cdn.onlinewebfonts.com/svg/img_532944.png" alt=""/></li>
            <li><img src="https://image.flaticon.com/icons/svg/63/63813.svg" alt=""/></li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Simpleicons_Business_note-black-paper-with-text-lines.svg/2000px-Simpleicons_Business_note-black-paper-with-text-lines.svg.png" alt=""/></li>
          </ul>


         <div>powerbutton</div>
      </div>
    )
  }
}

export default Dashboard;
