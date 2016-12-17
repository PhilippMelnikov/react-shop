
window.ee = new EventEmitter();
import ReactDOM from 'react-dom'
import React from 'react'
// modules
import NavBar from './modules/navbar/NavBar'
import MainPart from './modules/MainPart'
import ProductDetails from './modules/product-details/productDetails'
import {products} from './modules/data/products'



// var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


var App = React.createClass({
  getInitialState: function() {
    return {
     
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
      <div ref="appRoot">
      <ProductDetails/>
      <header className="main-container">
      <NavBar/>
      </header>
      <MainPart/>
      </div>
      );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
  );