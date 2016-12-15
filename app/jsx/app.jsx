// var products = [
// {
//   category: "hats",
//   name: 'The Coolest Hat Ever',
//   shortDesc: 'Cool hat, you can get for 255 bucks. Top quality materials. Fresh design. Just awesome.',
//   desc: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.',
//   price: '155',
//   image: 'img/thumbnails/300x200/hat1.png'
// },
// {
//   category: "hats",
//   name: 'Uber Cool Hat',
//   shortDesc: 'Ya know ma name!',
//   desc: 'А евро 42!',
//   price: '277',
//   image: 'img/thumbnails/300x200/hat2.png'
// },
// {
//   category: "hats",
//   name: 'Mega Hat',
//   shortDesc: 'What else do you need?',
//   desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
//   price: '355',
//   image: 'img/thumbnails/300x200/hat3.png'
// },
// {
//   category: "hats",
//   name: 'Mega Uber Hat',
//   shortDesc: 'Must have!',
//   desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
//   price: '105',
//   image: 'img/thumbnails/300x200/hat4.png'
// },
// {
//   category: "hats",
//   name: 'Killer Hat',
//   shortDesc: 'This hat is a killer!',
//   desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
//   price: '125',
//   image: 'img/thumbnails/300x200/hat5.png'
// },
// {
//   category: "boots",
//   name: 'Killer Boots',
//   shortDesc: 'Super cool boots.',
//   desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
//   price: '125',
//   image: 'img/thumbnails/300x200/boots/boots1.png'
// },
// {
//   category: "boots",
//   name: 'Killer Boots',
//   shortDesc: 'Dont stop me now!!',
//   desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
//   price: '125',
//   image: 'img/thumbnails/300x200/boots/boots2.png'
// },
// {
//   category: "boots",
//   name: 'Killer Boots',
//   shortDesc: 'Nice boots.',
//   desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
//   price: '125',
//   image: 'img/thumbnails/300x200/boots/boots3.png'
// },
// {
//   category: "boots",
//   name: 'Killer Boots',
//   shortDesc: 'Beautiful boots.',
//   desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
//   price: '125',
//   image: 'img/thumbnails/300x200/boots/boots4.png'
// }
// ];
window.ee = new EventEmitter();
import React from 'react'
import ReactDOM from 'react-dom'
// modules
import NavBar from './modules/NavBar'
import MainPart from './modules/MainPart'
import ProductDetails from './modules/productDetails'
import {products} from './modules/products'



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