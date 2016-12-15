import React from 'react'

var ItemCategory = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      category: React.PropTypes.string.isRequired
    })
  },

  onBtnClickHandler: function(e) {
    e.preventDefault();
    var categ = this.props.data.category;
    window.ee.emit('ItemList.filter', categ);
  },  

  render: function() {
   var category = this.props.data.category
   return(
    <a onClick={this.onBtnClickHandler}
    ref="categ" href="#">{category}</a>
    );
 }
});

module.exports = ItemCategory;