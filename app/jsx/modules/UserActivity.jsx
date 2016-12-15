import React from 'react'

var UserActivity = React.createClass({
  getInitialState: function(){
    return{

    };
  },

  render: function()
  {
    return(
     <div className="user-buttons">

     <a href="#"><i className="fa fa-shopping-basket" aria-hidden="true"></i></a>
     <a href="#"><i className="fa fa-user" aria-hidden="true"></i></a>

     </div>
     );
  }
});

module.exports = UserActivity;