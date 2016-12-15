import React from 'react'
import Categories from './Categories'

var SideBar = React.createClass({

  getInitialState: function() {
    return {
      prods: this.props.data,
      slideIn: false 
    };
  },

  componentDidMount: function(){
    var self=this;
    window.ee.addListener('SideBar.slide-in', function(){
      self.setState({slideIn: !self.state.slideIn});
    });
  },
  componentWillUnmount: function(){
   window.ee.removeListener('SideBar.slide-in');
 },

 render: function(){
  console.log("sidebar_rendering");
  console.log("slide-in: ",this.state.slideIn);
  return(
    <div>
    <div className={'sidebar ' + (this.state.slideIn ? 'slide-in': '') }>
    <Categories data={this.state.prods}/>
    </div>
    </div>
    );

}

});

module.exports = SideBar;