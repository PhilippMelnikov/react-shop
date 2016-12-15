import React from 'react'
import Search from './Search'
import UserActivity from './UserActivity'

var NavBar = React.createClass({

 getInitialState: function(){
  return{

    };
  },

  render: function()
  {
    return(
     <div className="nav-container">
     <Search/>
     <UserActivity/>
     </div>
     );
  }

});

module.exports = NavBar;