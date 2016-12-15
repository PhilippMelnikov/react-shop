import React from "react" 

var PutYourComment = React.createClass({
	propTypes: {

	},
	getInitialState: function(){
		return{};
	},
	render: function(){
		return(
			<div className="comment-container">
				<div className="user-info">
					<div className="nickname">Nigel</div>
					<div className="country">Alaska</div>
					<div className="reviews-number">reviews 3</div>
				</div>
				<form action="add-comment" className="comment-form">
					<div className="rating">
						<div className="inverse">
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>★</span>
							<span>★</span>
						</div>
					</div>
					<div className="add-comment-wrapper">
						<div className="add-comment" contentEditable={true}></div>
						<div className="button-container">
							<button className="send-but">Send</button>
						</div>
					</div>
				</form>
			</div>
			);
	}
}); 

module.exports = PutYourComment;