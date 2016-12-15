import React from 'react'

var Details = React.createClass({
	propTypes: {
    data: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
    	active: true
    };
  },
  componentDidMount: function(){
  	var self = this;
	  window.ee.addListener('details.active', function() {
	    self.setState({active: true});
	  });
	  window.ee.addListener('details.unActive', function() {
	    self.setState({active: false});
	  });
  },
  componentWillUnmount: function() {
	  window.ee.removeListener('details.active');
	  window.ee.removeListener('details.unActive');
	},
  render: function(){
    console.log('SpecSection');
    return(
       <div className={"tab-content " + (this.state.active ? "active" : "")}id="details">
       		{this.props.data.desc}
		</div>
      );
  }
});

module.exports = Details;