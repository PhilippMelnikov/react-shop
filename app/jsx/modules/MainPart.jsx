import React from 'react'
import SideBar from './sidebar/SideBar'
import ItemList from './item-list/ItemList'
import {products} from './data/products'

var MainPart = React.createClass({
  getInitialState: function() {
    return {
      prods: products
    };
  },

  componentDidMount: function() {
  },

  componentWillUnmount: function() {
    console.log("UnMountApp");
  },

  render: function() {
    console.log('render');
    return (
      <div className="main">
      <SideBar data={this.state.prods} />
      <ItemList data={this.state.prods} />
      </div>
      );
  }
});

module.exports = MainPart;