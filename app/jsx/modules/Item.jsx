import React from 'react'
import ReactCSSTransitionGroupAppear from './ReactCSSTransitionGroupAppear'

var Item = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      visible: false,
      rating: 0
    };
  },

  showDetails: function(){
     window.ee.emit('productDetails.show', this.props.data);
  },

  shouldComponentUpdate: function()
  {
    return true 
  },

  render: function() {
    var name = this.props.data.name,
    shortDesc = this.props.data.shortDesc,
    desc = this.props.data.desc,
    price = this.props.data.price,
    image = this.props.data.image,
    visible = this.state.visible;   
    console.log("Render Item");
    return (
     <ReactCSSTransitionGroupAppear 
     transitionName="example">
     <div className='product'>
     <div className='custom-thumbnail'>
     <div className='thumbnail-image'>
     <a onClick={this.showDetails} href="#">
     <img src={image} alt='prod-im'/>
     </a>
     </div>
     <div className="primary-info">
     <a onClick={this.showDetails} className="name">{name}</a>
     <div className="short-desc">{shortDesc}</div>
     </div>
     <div className="price">
     <div className="numb">{price}</div>
     <div className="currency">$</div>
     </div>
     <div className="sale-but-container">
     <button className="sale-but">Buy</button>
     </div>
     </div>
     </div>
     </ReactCSSTransitionGroupAppear>
     );
  }
});

module.exports = Item;