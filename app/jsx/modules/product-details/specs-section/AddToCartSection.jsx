import React from 'react'

var AddToCartSection = React.createClass({
	propTypes: {
    
  },
  getInitialState: function(){
    return {
    	number: 1
    };
  },
  componentDidMount: function(){},
  plusItem: function()
  {
    let numb = this.state.number;
    numb+=1;
    this.setState({"number" : numb});
  },
  minusItem: function()
  {
    let numb = this.state.number;
    if(numb>1)
    {
      numb-=1;
      this.setState({"number" : numb});
    }
  },
  render: function(){
    console.log('AddToCartSection');
    return(
      <div className="add-to-cart-container">
        <div className="amount-input-container">
          <input ref='author' type="number" className="amount-of-products" value={this.state.number.toString()} />
          <div onClick={this.plusItem} className="plus-item">+</div>
          <div onClick={this.minusItem} className="minus-item">-</div>
        </div>
        <div className="add-to-cart-button">
          <div className="main-txt">Add to cart</div>
        </div>
      </div>
      );
  }
});

module.exports = AddToCartSection;