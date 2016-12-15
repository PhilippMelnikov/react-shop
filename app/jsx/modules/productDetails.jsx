import React from 'react'
import ReactDOM from 'react-dom'
import SpecSection from './SpecSection'
import Details from './Details'
import CommentSection from './CommentSection'


var ProductDetails = React.createClass({
	propTypes: {
    // data: React.PropTypes.object.isRequired,
    // visible: React.PropTypes.boolean.isRequired
  },

  getInitialState: function(){
    return {
    	item: {
		  category: "hats",
		  name: 'The Coolest Hat Ever',
		  shortDesc: 'Cool hat, you can get for 255 bucks. Top quality materials. Fresh design. Just awesome.',
		  desc: 'В четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.',
		  price: '155',
		  image: 'img/thumbnails/300x200/hat1.png',
		  available: true,
		  model: "380440",
		  manufacturer: "Duche"
		}
    };
  },
  componentDidMount: function(){
    var self = this;
    window.ee.addListener('productDetails.show', function(item) {
      self.setState({item: item});
      var overlay = ReactDOM.findDOMNode(self.refs.overlay);
      overlay.className = "detail-overlay";
      var body = document.getElementById('body')
      body.className = "unscrollable";
    });
  },
  componentWillUnmount: function() {
    window.ee.removeListener('productDetails.show');
  },

  CancelClick: function(){
  	var overlay = ReactDOM.findDOMNode(this.refs.overlay);
      overlay.className = "detail-overlay invis";
    var body = document.getElementById('body')
      body.className = "";
  },

  tabClick: function(tab,e)
  {
  	console.log("click");
  	if(tab=='reviews')
  	 {
  	 	console.log("reviews");
  	 	window.ee.emit('details.unActive');
  	 	window.ee.emit('comments.active');
  	 }
  	else
  	{
  		console.log("details");
  	 	window.ee.emit('comments.unActive');
  	 	window.ee.emit('details.active');
  	}
  },
  render: function(){
    console.log('productDetails');
    return(
    	<div className="detail-overlay invis" ref="overlay">
    		<div className="detail-wrapper">
    			<div className="detail-container">
    				<div onClick={this.CancelClick} className="cancel-button">
						<img src="img/cancel.svg" alt="cancel"/>
					</div>
					 <SpecSection data={this.state.item} ref="specs" />
					<div className="wrapper">
						<div className="tabs">
							<ul>
								<li>
									<input type="radio" name="css-tabs" id="details" onChange={this.tabClick.bind(this, 'details')} className="tab-switch" />
									<label htmlFor="details" className="tab-label">Product Details</label>
								</li>
								<li> 
									<input type="radio" onChange={this.tabClick.bind(this, 'reviews')} name="css-tabs" id="reviews" className="tab-switch" />
									<label htmlFor="reviews" className="tab-label">Product Reviews</label>
								</li>
							</ul>
						</div>
						<div className="tab-content-container">
							<Details data={this.state.item} ref="details" />
							<CommentSection/>
						</div>
					</div>
    			</div>
    		</div>
    	</div>
    );
  }
});

module.exports = ProductDetails;