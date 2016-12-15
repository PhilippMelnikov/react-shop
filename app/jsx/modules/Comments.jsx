import React from "react" 

var Comments = React.createClass({
	propTypes: {

	},
	getInitialState: function(){
		return{};
	},
	render: function(){
		return(
			
				<ul>
					<li>
						<div className="comment-container">
							<div className="user-info">
								<div className="nickname">Raul</div>
								<div className="country">Cuba</div>
								<div className="reviews-number">reviews 2</div>
							</div>
							<div className="review-container">
								<div className="rating">★★★★★</div>
								<div className="review-text">I'm so happy I bought it. You wouldn't believe it. When I first saw it I thought to myself: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus enim et, quasi impedit deleniti iste laborum explicabo distinctio quae esse sint vitae, iusto aliquid. Placeat eligendi asperiores blanditiis et quaerat.?"</div>
							</div>
						</div>
					</li>
					<li>
						<div className="comment-container">
							<div className="user-info">
								<div className="nickname">Esteban</div>
								<div className="country">Cuba</div>
								<div className="reviews-number">reviews 2</div>
							</div>
							<div className="review-container">
								<div className="rating">★★★★★</div>
								<div className="review-text">I'm so happy I bought it. You wouldn't believe it. When I first saw it I thought to myself: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde commodi cumque perspiciatis beatae ipsam, sit iusto autem laborum blanditiis itaque, repellat, et! Id laborum voluptatem nam repellendus voluptates iusto dolorem.?"</div>
							</div>
						</div>
					</li>
					<li>
						<div className="comment-container">
							<div className="user-info">
								<div className="nickname">Pedro</div>
								<div className="country">Cuba</div>
								<div className="reviews-number">reviews 2</div>
							</div>
							<div className="review-container">
								<div className="rating">★★★★★</div>
								<div className="review-text">I'm so happy I bought it. You wouldn't believe it. When I first saw it I thought to myself: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde commodi cumque perspiciatis beatae ipsam, sit iusto autem laborum blanditiis itaque, repellat, et! Id laborum voluptatem nam repellendus voluptates iusto dolorem.?"</div>
							</div>
						</div>
					</li>
					<li>
						<div className="comment-container">
							<div className="user-info">
								<div className="nickname">Javier</div>
								<div className="country">Cuba</div>
								<div className="reviews-number">reviews 2</div>
							</div>
							<div className="review-container">
								<div className="rating">★★★★★</div>
								<div className="review-text">I'm so happy I bought it. You wouldn't believe it.</div>
							</div>
						</div>
					</li>
				</ul>
			
			);
	}
}); 

module.exports = Comments;