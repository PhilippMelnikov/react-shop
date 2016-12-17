import React from "react" 
import PutYourComment from "./PutYourComment" 
import Comments from "./Comments"

var CommentSection = React.createClass({
	propTypes: {

	},
	getInitialState: function(){
		return{
			active: false
		};
	},
    componentDidMount: function() {
	  var self = this;
	  window.ee.addListener('comments.active', function() {
	    self.setState({active: true});
	  });
	  window.ee.addListener('comments.unActive', function() {
	    self.setState({active: false});
	  });
	},

	componentWillUnmount: function() {
	  window.ee.removeListener('comments.active');
	  window.ee.removeListener('comments.unActive');
	},

	render: function(){
		return(
			<div className={"tab-content " + (this.state.active ? "active" : "")} id="reviews">
				<PutYourComment/>
				<Comments/>
			</div>
			);
	}
}); 

module.exports = CommentSection;