import React from 'react'
import AddToCartSection from './AddToCartSection'

var SpecSection = React.createClass({
	propTypes: {
    data: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
    	specs: this.props.data
    };
  },
  componentDidMount: function(){},
  render: function(){
    console.log('SpecSection');
    return(
        <div className="spec-row">
            <div className="spec-img">
              <img src={this.props.data.image} />
            </div>
            <div className="spec-container">
              <div className="category-container">
              {this.props.data.category}
              </div>
              <div className="spec-info">
                <div className="product-name">{this.props.data.name}</div>
                <div className="rating-info">
                  (2 customer reviews) <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <div className="product-price">
                  ${this.props.data.price}
                </div>
                <table className="specs">
                  <tbody>
                    <tr id="availablity">
                      <td>Availability</td>
                      <td>{(this.props.data.available ? "In stock" : "Not available")}</td>
                    </tr>
                    <tr id="model">
                      <td>Model</td>
                      <td>{this.props.data.model}</td>
                    </tr>
                    <tr id="manufacturer">
                      <td>Manufacturer</td>
                      <td>{this.props.data.manufacturer}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <AddToCartSection/>
            </div>
          </div>
      );
  }
});

module.exports = SpecSection;