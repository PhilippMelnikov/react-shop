(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _products = require('./modules/products');

window.ee = new EventEmitter(); // var products = [
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

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
console.log("lalala", ReactCSSTransitionGroup);

var ReactCSSTransitionGroupAppear = React.createClass({
  displayName: 'ReactCSSTransitionGroupAppear',


  propTypes: {
    transitionName: React.PropTypes.string.isRequired,
    transitionEnter: React.PropTypes.bool,
    transitionLeave: React.PropTypes.bool,
    transitionAppear: React.PropTypes.bool
  },

  getInitialState: function getInitialState() {
    return { mounted: false };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      transitionEnter: true,
      transitionLeave: true,
      transitionAppear: true
    };
  },

  componentDidMount: function componentDidMount() {
    this.setState({ mounted: true });
  },

  render: function render() {

    var children;

    if (!this.props.transitionAppear) {
      children = this.props.children;
    } else {
      if (this.state.mounted) {
        children = this.props.children;
      }
    }

    return React.createElement(
      ReactCSSTransitionGroup,
      {
        transitionName: this.props.transitionName,
        transitionEnter: this.props.transitionEnter,
        transitionLeave: this.props.transitionLeave,
        transitionAppear: this.props.transitionAppear,
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 300,
        transitionAppearTimeout: 500
      },
      children
    );
  }
});

var ItemCategory = React.createClass({
  displayName: 'ItemCategory',

  propTypes: {
    data: React.PropTypes.shape({
      category: React.PropTypes.string.isRequired
    })
  },

  onBtnClickHandler: function onBtnClickHandler(e) {
    e.preventDefault();
    var categ = this.props.data.category;
    window.ee.emit('ItemList.filter', categ);
  },

  render: function render() {
    var category = this.props.data.category;
    return React.createElement(
      'a',
      { onClick: this.onBtnClickHandler,
        ref: 'categ', href: '#' },
      category
    );
  }
});

var Categories = React.createClass({
  displayName: 'Categories',

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render: function render() {
    var data = this.props.data;
    var CategoriesList;

    if (data.length > 0) {
      CategoriesList = data.map(function (item, index) {
        var flag = true;
        console.log(CategoriesList);
        if (data.length > 0 && index > 0) {
          for (var i = index - 1; i >= 0; i--) {
            if (data[i].category == item.category) {
              flag = false;
            }
          }
        }
        if (flag) {
          return React.createElement(
            'li',
            { key: index },
            React.createElement(ItemCategory, { data: item })
          );
        }
      });
    } else {
      CategoriesList = React.createElement(
        'p',
        null,
        '\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E'
      );
    }

    console.log("CategoriesList_Rendering");
    return React.createElement(
      'ul',
      null,
      CategoriesList
    );
  }

});

var Item = React.createClass({
  displayName: 'Item',

  propTypes: {
    data: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      shortDesc: React.PropTypes.string.isRequired,
      desc: React.PropTypes.string.isRequired,
      price: React.PropTypes.string.isRequired,
      image: React.PropTypes.string.isRequired
    })
  },
  getInitialState: function getInitialState() {
    return {
      visible: false,
      rating: 0
    };
  },

  shouldComponentUpdate: function shouldComponentUpdate() {

    // setTimeout(function(){return true}, 1000)
    return true;
  },

  render: function render() {
    var name = this.props.data.name,
        shortDesc = this.props.data.shortDesc,
        desc = this.props.data.desc,
        price = this.props.data.price,
        image = this.props.data.image,
        visible = this.state.visible;
    console.log("Render Item");
    return React.createElement(
      ReactCSSTransitionGroupAppear,
      {
        transitionName: 'example' },
      React.createElement(
        'div',
        { className: 'product' },
        React.createElement(
          'div',
          { className: 'custom-thumbnail' },
          React.createElement(
            'div',
            { className: 'thumbnail-image' },
            React.createElement(
              'a',
              { href: '#' },
              React.createElement('img', { src: image, alt: 'prod-im' })
            )
          ),
          React.createElement(
            'div',
            { className: 'primary-info' },
            React.createElement(
              'div',
              { className: 'name' },
              name
            ),
            React.createElement(
              'div',
              { className: 'short-desc' },
              shortDesc
            )
          ),
          React.createElement(
            'div',
            { className: 'price' },
            React.createElement(
              'div',
              { className: 'numb' },
              price
            ),
            React.createElement(
              'div',
              { className: 'currency' },
              '$'
            )
          ),
          React.createElement(
            'div',
            { className: 'sale-but-container' },
            React.createElement(
              'button',
              { className: 'sale-but' },
              'Buy'
            )
          )
        )
      )
    );
  }
});

var ItemList = React.createClass({
  displayName: 'ItemList',

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  getInitialState: function getInitialState() {
    return {
      // activeCategory: '',
      remount: false,
      filteredData: this.props.data
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this;
    window.ee.addListener('ItemList.filter', function (categ) {

      function filterByCategory(refCat, element) {
        // alert(refCat);
        return element.category == refCat;
      }
      var data = self.props.data; // initial data
      var itemsList; //final list

      // filter
      if (data.length > 0) {
        if (categ != '') {
          itemsList = data.filter(filterByCategory.bind(this, categ));
        }
      } else {
        itemsList = [{}];
      }

      self.setState({ remount: true });
      self.setState({ filteredData: itemsList });
    });

    window.ee.addListener('ItemList.search', function (searchText) {
      if (searchText == '') {
        self.setState({ filteredData: self.props.data });
      }

      function CustomSearch(searchQuery, element) {
        // alert(refCat);
        var regexp = new RegExp(searchText, "i");
        var res = -1;
        for (key in element) {
          if (key != 'image') {
            res = element[key].search(regexp);
            if (res > -1) {
              return true;
            }
          }
        }

        // console.log(searchQuery);
        // console.log(element.name);
        // console.log(res);
        return false;
      }

      var data = self.props.data; // initial data
      var itemsList; //final list

      itemsList = data.filter(CustomSearch.bind(this, searchText));

      // self.setState({remount: true});  
      self.setState({ filteredData: itemsList });
    });
  },

  shouldComponentUpdate: function shouldComponentUpdate() {
    return true;
  },

  componentWillUnmount: function componentWillUnmount() {
    window.ee.removeListener('ItemList.filter');
    //  var self = this;
    //  self.setState({activeCategory: 'blablabla'});
    console.log("UnMountList");
    return true;
  },

  render: function render() {

    var data = this.state.filteredData;
    var itemsTemplate;
    if (!this.state.remount) {
      if (data.length > 0) {

        itemsTemplate = data.map(function (item, index) {
          return React.createElement(
            'div',
            { key: index },
            React.createElement(Item, { data: item })
          );
        });
      } else {
        itemsTemplate = React.createElement('p', null);
      }
    } else {
      itemsTemplate = React.createElement('p', null);
    }
    console.log("itemList Rendering");
    console.log("remount: ");
    if (this.state.remount) {
      this.setState({ remount: false });
    }

    return React.createElement(
      'div',
      { className: 'products-container', id: 'prod-container' },
      itemsTemplate
    )
    // </Delay>

    ;
  }
});

var Search = React.createClass({
  displayName: 'Search',

  getInitialState: function getInitialState() {
    return {
      searchActive: false

    };
  },

  onCheckHandler: function onCheckHandler(e) {
    this.setState({ searchActive: !this.state.searchActive });
  },

  onFieldChange: function onFieldChange(e) {
    // if (e.target.value.trim().length > 0) {
    var searchText = e.target.value;
    console.log(searchText);
    window.ee.emit('ItemList.search', searchText);
    // } 
  },

  onHamburgerClick: function onHamburgerClick(e) {
    e.preventDefault();
    console.log("Hamburger");
    window.ee.emit('SideBar.slide-in');
  },

  componentDidMount: function componentDidMount() {
    ReactDOM.findDOMNode(this.refs.searchbox).focus();
    console.log("Hey_lalaLey");
    // return true;
  },
  shouldComponentUpdate: function shouldComponentUpdate() {
    ReactDOM.findDOMNode(this.refs.searchbox).focus();
    return true;
  },

  render: function render() {
    console.log("Nav_Rendering");
    return React.createElement(
      'div',
      { className: 'navbar1' },
      React.createElement(
        'nav',
        { className: 'my-nav' },
        React.createElement('input', {
          type: 'text',
          className: 'search ' + (this.state.searchActive ? 'slide-input' : ''),
          onChange: this.onFieldChange,
          ref: 'searchbox'
        }),
        React.createElement(
          'label',
          { className: 'search-icon', htmlFor: 'psearch' },
          React.createElement('img', { src: 'img/1476008112_common-search-lookup-glyph.svg', alt: 'search' })
        ),
        React.createElement('input', {
          id: 'psearch',
          name: 'search',
          type: 'checkbox',
          onChange: this.onCheckHandler
        }),
        React.createElement(
          'a',
          { className: 'hamburger', onClick: this.onHamburgerClick, href: '#' },
          React.createElement('img', { src: 'img/1476007262_editor-list-view-hambuger-menu-outline-stroke.svg', alt: 'hamburger' })
        )
      )
    );
  }
});

var UserActivity = React.createClass({
  displayName: 'UserActivity',

  getInitialState: function getInitialState() {
    return {
      // searchActive: false,
      // sidebarActive: false
    };
  },

  // onCheckHandler: function(e)
  // {
  //    this.setState({ searchActive: !this.state.searchActive });
  // },

  // onHamburgerClick: function(e)
  // {
  //    this.setState({ sidebarActive: !this.state.sidebarActive });
  // },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'user-buttons' },
      React.createElement(
        'a',
        { href: '#' },
        React.createElement('i', { className: 'fa fa-shopping-basket', 'aria-hidden': 'true' })
      ),
      React.createElement(
        'a',
        { href: '#' },
        React.createElement('i', { className: 'fa fa-user', 'aria-hidden': 'true' })
      )
    );
  }
});

var NavBar = React.createClass({
  displayName: 'NavBar',


  getInitialState: function getInitialState() {
    return {
      // searchActive: false,
      // sidebarActive: false
    };
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'nav-container' },
      React.createElement(Search, null),
      React.createElement(UserActivity, null)
    );
  }

});

var SideBar = React.createClass({
  displayName: 'SideBar',


  getInitialState: function getInitialState() {
    return {
      prods: _products.products,
      slideIn: false
    };
  },

  componentDidMount: function componentDidMount() {
    var self = this;
    window.ee.addListener('SideBar.slide-in', function () {
      self.setState({ slideIn: !self.state.slideIn });
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    window.ee.removeListener('SideBar.slide-in');
  },

  render: function render() {
    console.log("sidebar_rendering");
    console.log("slide-in: ", this.state.slideIn);
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { className: 'sidebar ' + (this.state.slideIn ? 'slide-in' : '') },
        React.createElement(Categories, { data: this.state.prods })
      )
    );
  }

});

var MainPart = React.createClass({
  displayName: 'MainPart',

  getInitialState: function getInitialState() {
    return {
      prods: _products.products
    };
  },

  componentDidMount: function componentDidMount() {},

  componentWillUnmount: function componentWillUnmount() {
    console.log("UnMountApp");
  },

  render: function render() {
    console.log('render');
    return React.createElement(
      'div',
      { className: 'main' },
      React.createElement(SideBar, null),
      React.createElement(ItemList, { data: this.state.prods })
    );
  }
});

var productDetails = React.createClass({
  displayName: 'productDetails',

  getInitialState: function getInitialState() {
    return {};
  },
  componentDidMount: function componentDidMount() {},
  render: function render() {
    console.log('render productDetails');
    return React.createElement(
      'div',
      { className: 'item-specifications' },
      React.createElement('div', { className: 'super-container' })
    );
  }
});

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      // prods: products
    };
  },

  componentDidMount: function componentDidMount() {},

  componentWillUnmount: function componentWillUnmount() {
    console.log("UnMountApp");
  },

  render: function render() {
    console.log('render');
    return React.createElement(
      'div',
      null,
      React.createElement(
        'header',
        { className: 'main-container' },
        React.createElement(NavBar, null)
      ),
      React.createElement(MainPart, null)
    );
  }
});

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

},{"./modules/products":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var products = exports.products = [{
  category: "hats",
  name: 'The Coolest Hat Ever',
  shortDesc: 'Cool hat, you can get for 255 bucks. Top quality materials. Fresh design. Just awesome.',
  desc: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.',
  price: '155',
  image: 'img/thumbnails/300x200/hat1.png'
}, {
  category: "hats",
  name: 'Uber Cool Hat',
  shortDesc: 'Ya know ma name!',
  desc: 'А евро 42!',
  price: '277',
  image: 'img/thumbnails/300x200/hat2.png'
}, {
  category: "hats",
  name: 'Mega Hat',
  shortDesc: 'What else do you need?',
  desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
  price: '355',
  image: 'img/thumbnails/300x200/hat3.png'
}, {
  category: "hats",
  name: 'Mega Uber Hat',
  shortDesc: 'Must have!',
  desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
  price: '105',
  image: 'img/thumbnails/300x200/hat4.png'
}, {
  category: "hats",
  name: 'Killer Hat',
  shortDesc: 'This hat is a killer!',
  desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
  price: '125',
  image: 'img/thumbnails/300x200/hat5.png'
}, {
  category: "boots",
  name: 'Killer Boots',
  shortDesc: 'Super cool boots.',
  desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
  price: '125',
  image: 'img/thumbnails/300x200/boots/boots1.png'
}, {
  category: "boots",
  name: 'Killer Boots',
  shortDesc: 'Dont stop me now!!',
  desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
  price: '125',
  image: 'img/thumbnails/300x200/boots/boots2.png'
}, {
  category: "boots",
  name: 'Killer Boots',
  shortDesc: 'Nice boots.',
  desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
  price: '125',
  image: 'img/thumbnails/300x200/boots/boots3.png'
}, {
  category: "boots",
  name: 'Killer Boots',
  shortDesc: 'Beautiful boots.',
  desc: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение',
  price: '125',
  image: 'img/thumbnails/300x200/boots/boots4.png'
}];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGpzeFxcYXBwLmpzeCIsImFwcFxcanN4XFxtb2R1bGVzXFxwcm9kdWN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDMkVBOztBQUVBLE9BQU8sRUFBUCxHQUFZLElBQUksWUFBSixFQUFaLEMsQ0E3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxJQUFJLDBCQUEwQixNQUFNLE1BQU4sQ0FBYSxrQkFBM0M7QUFDQSxRQUFRLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLHVCQUF0Qjs7QUFFQSxJQUFJLGdDQUFnQyxNQUFNLFdBQU4sQ0FBa0I7QUFBQTs7O0FBRXBELGFBQVc7QUFDVCxvQkFBZ0IsTUFBTSxTQUFOLENBQWdCLE1BQWhCLENBQXVCLFVBRDlCO0FBRVQscUJBQWlCLE1BQU0sU0FBTixDQUFnQixJQUZ4QjtBQUdULHFCQUFpQixNQUFNLFNBQU4sQ0FBZ0IsSUFIeEI7QUFJVCxzQkFBa0IsTUFBTSxTQUFOLENBQWdCO0FBSnpCLEdBRnlDOztBQVNwRCxtQkFBaUIsMkJBQVc7QUFDMUIsV0FB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QUFJRSxRQUFNLG9GQUpSO0FBS0UsU0FBTyxLQUxUO0FBTUUsU0FBTztBQU5ULENBekRzQixFQWlFdEI7QUFDRSxZQUFVLE9BRFo7QUFFRSxRQUFNLGNBRlI7QUFHRSxhQUFXLGtCQUhiO0FBSUUsUUFBTSxvRkFKUjtBQUtFLFNBQU8sS0FMVDtBQU1FLFNBQU87QUFOVCxDQWpFc0IsQ0FBZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyB2YXIgcHJvZHVjdHMgPSBbXHJcbi8vIHtcclxuLy8gICBjYXRlZ29yeTogXCJoYXRzXCIsXHJcbi8vICAgbmFtZTogJ1RoZSBDb29sZXN0IEhhdCBFdmVyJyxcclxuLy8gICBzaG9ydERlc2M6ICdDb29sIGhhdCwgeW91IGNhbiBnZXQgZm9yIDI1NSBidWNrcy4gVG9wIHF1YWxpdHkgbWF0ZXJpYWxzLiBGcmVzaCBkZXNpZ24uIEp1c3QgYXdlc29tZS4nLFxyXG4vLyAgIGRlc2M6ICfQsiDRh9C10YLRi9GA0LUg0YEg0YfQtdGC0LLQtdGA0YLRjNGOINGH0LDRgdCwINGH0LXRgtGL0YDQtSDRh9GR0YDQvdC10L3RjNC60LjRhSDRh9GD0LzQsNC30LXQvdGM0LrQuNGFINGH0LXRgNGC0ZHQvdC60LAg0YfQtdGA0YLQuNC70Lgg0YfRkdGA0L3Ri9C80Lgg0YfQtdGA0L3QuNC70LDQvNC4INGH0LXRgNGC0ZHQti4nLFxyXG4vLyAgIHByaWNlOiAnMTU1JyxcclxuLy8gICBpbWFnZTogJ2ltZy90aHVtYm5haWxzLzMwMHgyMDAvaGF0MS5wbmcnXHJcbi8vIH0sXHJcbi8vIHtcclxuLy8gICBjYXRlZ29yeTogXCJoYXRzXCIsXHJcbi8vICAgbmFtZTogJ1ViZXIgQ29vbCBIYXQnLFxyXG4vLyAgIHNob3J0RGVzYzogJ1lhIGtub3cgbWEgbmFtZSEnLFxyXG4vLyAgIGRlc2M6ICfQkCDQtdCy0YDQviA0MiEnLFxyXG4vLyAgIHByaWNlOiAnMjc3JyxcclxuLy8gICBpbWFnZTogJ2ltZy90aHVtYm5haWxzLzMwMHgyMDAvaGF0Mi5wbmcnXHJcbi8vIH0sXHJcbi8vIHtcclxuLy8gICBjYXRlZ29yeTogXCJoYXRzXCIsXHJcbi8vICAgbmFtZTogJ01lZ2EgSGF0JyxcclxuLy8gICBzaG9ydERlc2M6ICdXaGF0IGVsc2UgZG8geW91IG5lZWQ/JyxcclxuLy8gICBkZXNjOiAn0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INC/0LvQsNGC0L3Qviwg0L/RgNC+0YHRgtC+INC90YPQttC90L4g0L/RgNC+0YfQuNGC0LDRgtGMINC+0YfQtdC90Ywg0LTQu9C40L3QvdC+0LUg0LvQuNGG0LXQvdC30LjQvtC90L3QvtC1INGB0L7Qs9C70LDRiNC10L3QuNC1JyxcclxuLy8gICBwcmljZTogJzM1NScsXHJcbi8vICAgaW1hZ2U6ICdpbWcvdGh1bWJuYWlscy8zMDB4MjAwL2hhdDMucG5nJ1xyXG4vLyB9LFxyXG4vLyB7XHJcbi8vICAgY2F0ZWdvcnk6IFwiaGF0c1wiLFxyXG4vLyAgIG5hbWU6ICdNZWdhIFViZXIgSGF0JyxcclxuLy8gICBzaG9ydERlc2M6ICdNdXN0IGhhdmUhJyxcclxuLy8gICBkZXNjOiAn0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INC/0LvQsNGC0L3Qviwg0L/RgNC+0YHRgtC+INC90YPQttC90L4g0L/RgNC+0YfQuNGC0LDRgtGMINC+0YfQtdC90Ywg0LTQu9C40L3QvdC+0LUg0LvQuNGG0LXQvdC30LjQvtC90L3QvtC1INGB0L7Qs9C70LDRiNC10L3QuNC1JyxcclxuLy8gICBwcmljZTogJzEwNScsXHJcbi8vICAgaW1hZ2U6ICdpbWcvdGh1bWJuYWlscy8zMDB4MjAwL2hhdDQucG5nJ1xyXG4vLyB9LFxyXG4vLyB7XHJcbi8vICAgY2F0ZWdvcnk6IFwiaGF0c1wiLFxyXG4vLyAgIG5hbWU6ICdLaWxsZXIgSGF0JyxcclxuLy8gICBzaG9ydERlc2M6ICdUaGlzIGhhdCBpcyBhIGtpbGxlciEnLFxyXG4vLyAgIGRlc2M6ICfQndCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0L/Qu9Cw0YLQvdC+LCDQv9GA0L7RgdGC0L4g0L3Rg9C20L3QviDQv9GA0L7Rh9C40YLQsNGC0Ywg0L7Rh9C10L3RjCDQtNC70LjQvdC90L7QtSDQu9C40YbQtdC90LfQuNC+0L3QvdC+0LUg0YHQvtCz0LvQsNGI0LXQvdC40LUnLFxyXG4vLyAgIHByaWNlOiAnMTI1JyxcclxuLy8gICBpbWFnZTogJ2ltZy90aHVtYm5haWxzLzMwMHgyMDAvaGF0NS5wbmcnXHJcbi8vIH0sXHJcbi8vIHtcclxuLy8gICBjYXRlZ29yeTogXCJib290c1wiLFxyXG4vLyAgIG5hbWU6ICdLaWxsZXIgQm9vdHMnLFxyXG4vLyAgIHNob3J0RGVzYzogJ1N1cGVyIGNvb2wgYm9vdHMuJyxcclxuLy8gICBkZXNjOiAn0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INC/0LvQsNGC0L3Qviwg0L/RgNC+0YHRgtC+INC90YPQttC90L4g0L/RgNC+0YfQuNGC0LDRgtGMINC+0YfQtdC90Ywg0LTQu9C40L3QvdC+0LUg0LvQuNGG0LXQvdC30LjQvtC90L3QvtC1INGB0L7Qs9C70LDRiNC10L3QuNC1JyxcclxuLy8gICBwcmljZTogJzEyNScsXHJcbi8vICAgaW1hZ2U6ICdpbWcvdGh1bWJuYWlscy8zMDB4MjAwL2Jvb3RzL2Jvb3RzMS5wbmcnXHJcbi8vIH0sXHJcbi8vIHtcclxuLy8gICBjYXRlZ29yeTogXCJib290c1wiLFxyXG4vLyAgIG5hbWU6ICdLaWxsZXIgQm9vdHMnLFxyXG4vLyAgIHNob3J0RGVzYzogJ0RvbnQgc3RvcCBtZSBub3chIScsXHJcbi8vICAgZGVzYzogJ9Cd0LAg0YHQsNC80L7QvCDQtNC10LvQtSDQv9C70LDRgtC90L4sINC/0YDQvtGB0YLQviDQvdGD0LbQvdC+INC/0YDQvtGH0LjRgtCw0YLRjCDQvtGH0LXQvdGMINC00LvQuNC90L3QvtC1INC70LjRhtC10L3Qt9C40L7QvdC90L7QtSDRgdC+0LPQu9Cw0YjQtdC90LjQtScsXHJcbi8vICAgcHJpY2U6ICcxMjUnLFxyXG4vLyAgIGltYWdlOiAnaW1nL3RodW1ibmFpbHMvMzAweDIwMC9ib290cy9ib290czIucG5nJ1xyXG4vLyB9LFxyXG4vLyB7XHJcbi8vICAgY2F0ZWdvcnk6IFwiYm9vdHNcIixcclxuLy8gICBuYW1lOiAnS2lsbGVyIEJvb3RzJyxcclxuLy8gICBzaG9ydERlc2M6ICdOaWNlIGJvb3RzLicsXHJcbi8vICAgZGVzYzogJ9Cd0LAg0YHQsNC80L7QvCDQtNC10LvQtSDQv9C70LDRgtC90L4sINC/0YDQvtGB0YLQviDQvdGD0LbQvdC+INC/0YDQvtGH0LjRgtCw0YLRjCDQvtGH0LXQvdGMINC00LvQuNC90L3QvtC1INC70LjRhtC10L3Qt9C40L7QvdC90L7QtSDRgdC+0LPQu9Cw0YjQtdC90LjQtScsXHJcbi8vICAgcHJpY2U6ICcxMjUnLFxyXG4vLyAgIGltYWdlOiAnaW1nL3RodW1ibmFpbHMvMzAweDIwMC9ib290cy9ib290czMucG5nJ1xyXG4vLyB9LFxyXG4vLyB7XHJcbi8vICAgY2F0ZWdvcnk6IFwiYm9vdHNcIixcclxuLy8gICBuYW1lOiAnS2lsbGVyIEJvb3RzJyxcclxuLy8gICBzaG9ydERlc2M6ICdCZWF1dGlmdWwgYm9vdHMuJyxcclxuLy8gICBkZXNjOiAn0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INC/0LvQsNGC0L3Qviwg0L/RgNC+0YHRgtC+INC90YPQttC90L4g0L/RgNC+0YfQuNGC0LDRgtGMINC+0YfQtdC90Ywg0LTQu9C40L3QvdC+0LUg0LvQuNGG0LXQvdC30LjQvtC90L3QvtC1INGB0L7Qs9C70LDRiNC10L3QuNC1JyxcclxuLy8gICBwcmljZTogJzEyNScsXHJcbi8vICAgaW1hZ2U6ICdpbWcvdGh1bWJuYWlscy8zMDB4MjAwL2Jvb3RzL2Jvb3RzNC5wbmcnXHJcbi8vIH1cclxuLy8gXTtcclxuXHJcbmltcG9ydCB7cHJvZHVjdHN9IGZyb20gJy4vbW9kdWxlcy9wcm9kdWN0cydcclxuXHJcbndpbmRvdy5lZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxudmFyIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwID0gUmVhY3QuYWRkb25zLkNTU1RyYW5zaXRpb25Hcm91cDtcclxuY29uc29sZS5sb2coXCJsYWxhbGFcIiwgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXApO1xyXG5cclxudmFyIFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQXBwZWFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuICBwcm9wVHlwZXM6IHtcclxuICAgIHRyYW5zaXRpb25OYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0cmFuc2l0aW9uRW50ZXI6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxyXG4gICAgdHJhbnNpdGlvbkxlYXZlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcclxuICAgIHRyYW5zaXRpb25BcHBlYXI6IFJlYWN0LlByb3BUeXBlcy5ib29sXHJcbiAgfSxcclxuXHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7bW91bnRlZDogZmFsc2V9XHJcbiAgfSxcclxuXHJcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRyYW5zaXRpb25FbnRlcjogdHJ1ZSxcclxuICAgICAgdHJhbnNpdGlvbkxlYXZlOiB0cnVlLFxyXG4gICAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VudGVkOiB0cnVlIH0pO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKCl7XHJcblxyXG4gICAgdmFyIGNoaWxkcmVuO1xyXG5cclxuICAgIGlmKCF0aGlzLnByb3BzLnRyYW5zaXRpb25BcHBlYXIpe1xyXG4gICAgICBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBpZih0aGlzLnN0YXRlLm1vdW50ZWQpe1xyXG4gICAgICAgIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwXHJcbiAgICAgIHRyYW5zaXRpb25OYW1lPXt0aGlzLnByb3BzLnRyYW5zaXRpb25OYW1lfVxyXG4gICAgICB0cmFuc2l0aW9uRW50ZXI9e3RoaXMucHJvcHMudHJhbnNpdGlvbkVudGVyfVxyXG4gICAgICB0cmFuc2l0aW9uTGVhdmU9e3RoaXMucHJvcHMudHJhbnNpdGlvbkxlYXZlfVxyXG4gICAgICB0cmFuc2l0aW9uQXBwZWFyPXt0aGlzLnByb3BzLnRyYW5zaXRpb25BcHBlYXJ9XHJcbiAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezUwMH0gXHJcbiAgICAgIHRyYW5zaXRpb25MZWF2ZVRpbWVvdXQ9ezMwMH1cclxuICAgICAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ9ezUwMH0gXHJcbiAgICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICApXHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG52YXIgSXRlbUNhdGVnb3J5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHByb3BUeXBlczoge1xyXG4gICAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgY2F0ZWdvcnk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG4gICAgfSlcclxuICB9LFxyXG5cclxuICBvbkJ0bkNsaWNrSGFuZGxlcjogZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGNhdGVnID0gdGhpcy5wcm9wcy5kYXRhLmNhdGVnb3J5O1xyXG4gICAgd2luZG93LmVlLmVtaXQoJ0l0ZW1MaXN0LmZpbHRlcicsIGNhdGVnKTtcclxuICB9LCAgXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgIHZhciBjYXRlZ29yeSA9IHRoaXMucHJvcHMuZGF0YS5jYXRlZ29yeVxyXG4gICByZXR1cm4oXHJcbiAgICA8YSBvbkNsaWNrPXt0aGlzLm9uQnRuQ2xpY2tIYW5kbGVyfVxyXG4gICAgcmVmPVwiY2F0ZWdcIiBocmVmPVwiI1wiPntjYXRlZ29yeX08L2E+XHJcbiAgICApO1xyXG4gfVxyXG59KTtcclxuXHJcbnZhciBDYXRlZ29yaWVzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHByb3BUeXBlczoge1xyXG4gICAgZGF0YTogUmVhY3QuUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcclxuICB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcclxuICAgIHZhciBDYXRlZ29yaWVzTGlzdDtcclxuXHJcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIENhdGVnb3JpZXNMaXN0ID0gZGF0YS5tYXAoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICB2YXIgZmxhZz10cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKENhdGVnb3JpZXNMaXN0KTtcclxuICAgICAgICBpZihkYXRhLmxlbmd0aD4wICYmIGluZGV4PjApXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgIGZvciAodmFyIGkgPSBpbmRleC0xOyBpID49IDA7IGktLSkgXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgaWYoZGF0YVtpXS5jYXRlZ29yeT09aXRlbS5jYXRlZ29yeSlcclxuICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICBmbGFnPWZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZihmbGFnKVxyXG4gICAgICAgIHsgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPEl0ZW1DYXRlZ29yeSBkYXRhPXtpdGVtfSAvPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICApXHJcbiAgICB9XHJcbiAgfSlcclxuICAgIH0gXHJcbiAgICBlbHNlIFxyXG4gICAge1xyXG4gICAgICBDYXRlZ29yaWVzTGlzdCA9IDxwPtCd0LjRh9C10LPQviDQvdC1INC90LDQudC00LXQvdC+PC9wPlxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiQ2F0ZWdvcmllc0xpc3RfUmVuZGVyaW5nXCIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHVsPlxyXG4gICAgICB7Q2F0ZWdvcmllc0xpc3R9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgICk7XHJcblxyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxudmFyIEl0ZW0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcHJvcFR5cGVzOiB7XHJcbiAgICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHNob3J0RGVzYzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBkZXNjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHByaWNlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIGltYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxuICAgIH0pXHJcbiAgfSxcclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHJhdGluZzogMFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKClcclxuICB7XHJcblxyXG4gICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiB0cnVlfSwgMTAwMClcclxuICAgIHJldHVybiB0cnVlXHJcbiAgICBcclxuICB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIG5hbWUgPSB0aGlzLnByb3BzLmRhdGEubmFtZSxcclxuICAgIHNob3J0RGVzYyA9IHRoaXMucHJvcHMuZGF0YS5zaG9ydERlc2MsXHJcbiAgICBkZXNjID0gdGhpcy5wcm9wcy5kYXRhLmRlc2MsXHJcbiAgICBwcmljZSA9IHRoaXMucHJvcHMuZGF0YS5wcmljZSxcclxuICAgIGltYWdlID0gdGhpcy5wcm9wcy5kYXRhLmltYWdlLFxyXG4gICAgdmlzaWJsZSA9IHRoaXMuc3RhdGUudmlzaWJsZTsgICBcclxuICAgIGNvbnNvbGUubG9nKFwiUmVuZGVyIEl0ZW1cIik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cEFwcGVhciBcclxuICAgICB0cmFuc2l0aW9uTmFtZT1cImV4YW1wbGVcIj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdCc+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9J2N1c3RvbS10aHVtYm5haWwnPlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPSd0aHVtYm5haWwtaW1hZ2UnPlxyXG4gICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgPGltZyBzcmM9e2ltYWdlfSBhbHQ9J3Byb2QtaW0nLz5cclxuICAgICA8L2E+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmltYXJ5LWluZm9cIj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj57bmFtZX08L2Rpdj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3J0LWRlc2NcIj57c2hvcnREZXNjfTwvZGl2PlxyXG4gICAgIDwvZGl2PlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJcIj57cHJpY2V9PC9kaXY+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW5jeVwiPiQ8L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhbGUtYnV0LWNvbnRhaW5lclwiPlxyXG4gICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2FsZS1idXRcIj5CdXk8L2J1dHRvbj5cclxuICAgICA8L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwQXBwZWFyPlxyXG4gICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBJdGVtTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBwcm9wVHlwZXM6IHtcclxuICAgIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXHJcbiAgfSxcclxuXHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIGFjdGl2ZUNhdGVnb3J5OiAnJyxcclxuICAgICAgcmVtb3VudDogZmFsc2UsXHJcbiAgICAgIGZpbHRlcmVkRGF0YTogdGhpcy5wcm9wcy5kYXRhXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIHdpbmRvdy5lZS5hZGRMaXN0ZW5lcignSXRlbUxpc3QuZmlsdGVyJywgZnVuY3Rpb24oY2F0ZWcpIHtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGZpbHRlckJ5Q2F0ZWdvcnkocmVmQ2F0LCBlbGVtZW50KSBcclxuICAgICAge1xyXG4gICAgICAgICAvLyBhbGVydChyZWZDYXQpO1xyXG4gICAgICAgICByZXR1cm4gKGVsZW1lbnQuY2F0ZWdvcnk9PXJlZkNhdCk7XHJcbiAgICAgICB9XHJcbiAgICAgIHZhciBkYXRhID0gc2VsZi5wcm9wcy5kYXRhOyAvLyBpbml0aWFsIGRhdGFcclxuICAgICAgdmFyIGl0ZW1zTGlzdDsgLy9maW5hbCBsaXN0XHJcblxyXG4gIC8vIGZpbHRlclxyXG4gIGlmIChkYXRhLmxlbmd0aCA+IDApIFxyXG4gIHtcclxuICAgIGlmIChjYXRlZyE9JycpXHJcbiAgICB7XHJcbiAgICAgaXRlbXNMaXN0ID0gZGF0YS5maWx0ZXIoZmlsdGVyQnlDYXRlZ29yeS5iaW5kKHRoaXMsY2F0ZWcpKVxyXG4gICB9XHJcbiB9IFxyXG4gZWxzZSBcclxuIHtcclxuICBpdGVtc0xpc3Q9W3t9XTtcclxufVxyXG5cclxuc2VsZi5zZXRTdGF0ZSh7cmVtb3VudDogdHJ1ZX0pOyAgXHJcbnNlbGYuc2V0U3RhdGUoe2ZpbHRlcmVkRGF0YTogaXRlbXNMaXN0fSk7XHJcbn0pO1xyXG5cclxuICAgIHdpbmRvdy5lZS5hZGRMaXN0ZW5lcignSXRlbUxpc3Quc2VhcmNoJywgZnVuY3Rpb24oc2VhcmNoVGV4dCkge1xyXG4gICAgICBpZihzZWFyY2hUZXh0PT0nJylcclxuICAgICAge1xyXG4gICAgICAgc2VsZi5zZXRTdGF0ZSh7ZmlsdGVyZWREYXRhOiBzZWxmLnByb3BzLmRhdGF9KTtcclxuICAgICAgfVxyXG5cclxuICAgICBmdW5jdGlvbiBDdXN0b21TZWFyY2goc2VhcmNoUXVlcnksIGVsZW1lbnQpIFxyXG4gICAgIHtcclxuICAgICAgICAgLy8gYWxlcnQocmVmQ2F0KTtcclxuICAgICAgICAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoc2VhcmNoVGV4dCwgXCJpXCIpO1xyXG4gICAgICAgICB2YXIgcmVzID0gLTE7XHJcbiAgICAgICAgIGZvcihrZXkgaW4gZWxlbWVudClcclxuICAgICAgICAge1xyXG4gICAgICAgICAgaWYoa2V5IT0naW1hZ2UnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlcyA9IGVsZW1lbnRba2V5XS5zZWFyY2gocmVnZXhwKTtcclxuICAgICAgICAgICAgICBpZihyZXM+LTEpXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaFF1ZXJ5KTtcclxuICAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5uYW1lKTtcclxuICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgdmFyIGRhdGEgPSBzZWxmLnByb3BzLmRhdGE7IC8vIGluaXRpYWwgZGF0YVxyXG4gICAgICB2YXIgaXRlbXNMaXN0OyAvL2ZpbmFsIGxpc3RcclxuXHJcbiAgICAgIGl0ZW1zTGlzdCA9IGRhdGEuZmlsdGVyKEN1c3RvbVNlYXJjaC5iaW5kKHRoaXMsc2VhcmNoVGV4dCkpXHJcblxyXG4gICAgICAvLyBzZWxmLnNldFN0YXRlKHtyZW1vdW50OiB0cnVlfSk7ICBcclxuICAgICAgc2VsZi5zZXRTdGF0ZSh7ZmlsdGVyZWREYXRhOiBpdGVtc0xpc3R9KTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24oKVxyXG4gIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcclxuICAgIHdpbmRvdy5lZS5yZW1vdmVMaXN0ZW5lcignSXRlbUxpc3QuZmlsdGVyJyk7XHJcbiAgICAvLyAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgLy8gIHNlbGYuc2V0U3RhdGUoe2FjdGl2ZUNhdGVnb3J5OiAnYmxhYmxhYmxhJ30pO1xyXG4gICAgY29uc29sZS5sb2coXCJVbk1vdW50TGlzdFwiKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuc3RhdGUuZmlsdGVyZWREYXRhO1xyXG4gICAgdmFyIGl0ZW1zVGVtcGxhdGU7XHJcbiAgICBpZighdGhpcy5zdGF0ZS5yZW1vdW50KVxyXG4gICAge1xyXG4gICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgaXRlbXNUZW1wbGF0ZSA9IGRhdGEubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPEl0ZW0gZGF0YT17aXRlbX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIClcclxuICAgICAgfSk7XHJcblxyXG4gICAgIH0gXHJcbiAgICAgZWxzZSBcclxuICAgICB7XHJcbiAgICAgIGl0ZW1zVGVtcGxhdGUgPSA8cD48L3A+XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVsc2VcclxuICB7XHJcbiAgICBpdGVtc1RlbXBsYXRlID0gPHA+PC9wPlxyXG4gIH1cclxuICBjb25zb2xlLmxvZyhcIml0ZW1MaXN0IFJlbmRlcmluZ1wiKTtcclxuICBjb25zb2xlLmxvZyhcInJlbW91bnQ6IFwiKTtcclxuICBpZih0aGlzLnN0YXRlLnJlbW91bnQpXHJcbiAgICB7IHRoaXMuc2V0U3RhdGUoe3JlbW91bnQ6IGZhbHNlfSk7fVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgIC8vICAgPERlbGF5XHJcbiAgICAgLy8gd2FpdD17NTAwMH1cclxuICAgICAvLyA+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3RzLWNvbnRhaW5lcicgaWQ9XCJwcm9kLWNvbnRhaW5lclwiPlxyXG4gICAgICB7Lyo8UmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBBcHBlYXIgXHJcbiAgICAgIHRyYW5zaXRpb25OYW1lPVwiZXhhbXBsZVwiPiovfVxyXG4gICAgICB7aXRlbXNUZW1wbGF0ZX1cclxuICAgIHsvKjwvUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXBBcHBlYXI+Ki99XHJcbiAgICA8L2Rpdj5cclxuICAgICAgLy8gPC9EZWxheT5cclxuICAgICAgXHJcbiAgICAgICk7XHJcbn1cclxufSk7XHJcblxyXG52YXIgU2VhcmNoID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcclxuICAgIHJldHVybntcclxuICAgICAgc2VhcmNoQWN0aXZlOiBmYWxzZVxyXG5cclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgb25DaGVja0hhbmRsZXI6IGZ1bmN0aW9uKGUpXHJcbiAge1xyXG4gICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoQWN0aXZlOiAhdGhpcy5zdGF0ZS5zZWFyY2hBY3RpdmUgfSk7XHJcbiB9LFxyXG5cclxuIG9uRmllbGRDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAvLyBpZiAoZS50YXJnZXQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgIHZhciBzZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhzZWFyY2hUZXh0KTsgXHJcbiAgICB3aW5kb3cuZWUuZW1pdCgnSXRlbUxpc3Quc2VhcmNoJywgc2VhcmNoVGV4dCk7XHJcbiAgLy8gfSBcclxufSxcclxuXHJcbm9uSGFtYnVyZ2VyQ2xpY2s6IGZ1bmN0aW9uKGUpXHJcbntcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc29sZS5sb2coXCJIYW1idXJnZXJcIik7XHJcbiAgd2luZG93LmVlLmVtaXQoJ1NpZGVCYXIuc2xpZGUtaW4nKTtcclxuXHJcbn0sXHJcblxyXG5jb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKVxyXG57XHJcbiAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnNlYXJjaGJveCkuZm9jdXMoKTtcclxuICBjb25zb2xlLmxvZyhcIkhleV9sYWxhTGV5XCIpO1xyXG4gIC8vIHJldHVybiB0cnVlO1xyXG59LFxyXG5zaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKClcclxue1xyXG4gIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5zZWFyY2hib3gpLmZvY3VzKCk7XHJcbiAgcmV0dXJuIHRydWU7XHJcbn0sXHJcblxyXG5yZW5kZXI6IGZ1bmN0aW9uKClcclxue1xyXG4gIGNvbnNvbGUubG9nKFwiTmF2X1JlbmRlcmluZ1wiKTtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhcjFcIj5cclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibXktbmF2XCI+XHJcbiAgICA8aW5wdXRcclxuICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICBjbGFzc05hbWU9eydzZWFyY2ggJyArICh0aGlzLnN0YXRlLnNlYXJjaEFjdGl2ZSA/ICdzbGlkZS1pbnB1dCc6JycpIH1cclxuICAgIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9XHJcbiAgICByZWY9XCJzZWFyY2hib3hcIlxyXG4gICAgLz5cclxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzZWFyY2gtaWNvblwiIGh0bWxGb3I9XCJwc2VhcmNoXCI+XHJcbiAgICA8aW1nIHNyYz1cImltZy8xNDc2MDA4MTEyX2NvbW1vbi1zZWFyY2gtbG9va3VwLWdseXBoLnN2Z1wiIGFsdD1cInNlYXJjaFwiPjwvaW1nPlxyXG4gICAgPC9sYWJlbD5cclxuICAgIDxpbnB1dCBcclxuICAgIGlkPVwicHNlYXJjaFwiIFxyXG4gICAgbmFtZT1cInNlYXJjaFwiIFxyXG4gICAgdHlwZT1cImNoZWNrYm94XCIgXHJcbiAgICBvbkNoYW5nZT17dGhpcy5vbkNoZWNrSGFuZGxlcn1cclxuICAgIC8+XHJcbiAgICA8YSBjbGFzc05hbWU9J2hhbWJ1cmdlcicgb25DbGljaz17dGhpcy5vbkhhbWJ1cmdlckNsaWNrfSBocmVmPVwiI1wiPlxyXG4gICAgPGltZyBzcmM9XCJpbWcvMTQ3NjAwNzI2Ml9lZGl0b3ItbGlzdC12aWV3LWhhbWJ1Z2VyLW1lbnUtb3V0bGluZS1zdHJva2Uuc3ZnXCIgYWx0PVwiaGFtYnVyZ2VyXCI+PC9pbWc+XHJcbiAgICA8L2E+XHJcbiAgICA8L25hdj5cclxuICAgIDwvZGl2PiAgXHJcbiAgICApO1xyXG59XHJcbn0pO1xyXG5cclxudmFyIFVzZXJBY3Rpdml0eSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm57XHJcbiAgICAgIC8vIHNlYXJjaEFjdGl2ZTogZmFsc2UsXHJcbiAgICAgIC8vIHNpZGViYXJBY3RpdmU6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIC8vIG9uQ2hlY2tIYW5kbGVyOiBmdW5jdGlvbihlKVxyXG4gIC8vIHtcclxuICAvLyAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoQWN0aXZlOiAhdGhpcy5zdGF0ZS5zZWFyY2hBY3RpdmUgfSk7XHJcbiAgLy8gfSxcclxuXHJcbiAgLy8gb25IYW1idXJnZXJDbGljazogZnVuY3Rpb24oZSlcclxuICAvLyB7XHJcbiAgLy8gICAgdGhpcy5zZXRTdGF0ZSh7IHNpZGViYXJBY3RpdmU6ICF0aGlzLnN0YXRlLnNpZGViYXJBY3RpdmUgfSk7XHJcbiAgLy8gfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpXHJcbiAge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1idXR0b25zXCI+XHJcblxyXG4gICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2hvcHBpbmctYmFza2V0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPjwvYT5cclxuICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+PC9hPlxyXG5cclxuICAgICA8L2Rpdj5cclxuICAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG52YXIgTmF2QmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG5cclxuIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKXtcclxuICByZXR1cm57XHJcbiAgICAgIC8vIHNlYXJjaEFjdGl2ZTogZmFsc2UsXHJcbiAgICAgIC8vIHNpZGViYXJBY3RpdmU6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKVxyXG4gIHtcclxuICAgIHJldHVybihcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1jb250YWluZXJcIj5cclxuICAgICA8U2VhcmNoLz5cclxuICAgICA8VXNlckFjdGl2aXR5Lz5cclxuICAgICA8L2Rpdj5cclxuICAgICApO1xyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxudmFyIFNpZGVCYXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcblxyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9kczogcHJvZHVjdHMsXHJcbiAgICAgIHNsaWRlSW46IGZhbHNlIFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKXtcclxuICAgIHZhciBzZWxmPXRoaXM7XHJcbiAgICB3aW5kb3cuZWUuYWRkTGlzdGVuZXIoJ1NpZGVCYXIuc2xpZGUtaW4nLCBmdW5jdGlvbigpe1xyXG4gICAgICBzZWxmLnNldFN0YXRlKHtzbGlkZUluOiAhc2VsZi5zdGF0ZS5zbGlkZUlufSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpe1xyXG4gICB3aW5kb3cuZWUucmVtb3ZlTGlzdGVuZXIoJ1NpZGVCYXIuc2xpZGUtaW4nKTtcclxuIH0sXHJcblxyXG4gcmVuZGVyOiBmdW5jdGlvbigpe1xyXG4gIGNvbnNvbGUubG9nKFwic2lkZWJhcl9yZW5kZXJpbmdcIik7XHJcbiAgY29uc29sZS5sb2coXCJzbGlkZS1pbjogXCIsdGhpcy5zdGF0ZS5zbGlkZUluKTtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9eydzaWRlYmFyICcgKyAodGhpcy5zdGF0ZS5zbGlkZUluID8gJ3NsaWRlLWluJzogJycpIH0+XHJcbiAgICA8Q2F0ZWdvcmllcyBkYXRhPXt0aGlzLnN0YXRlLnByb2RzfS8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbn0pO1xyXG5cclxudmFyIE1haW5QYXJ0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9kczogcHJvZHVjdHNcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xyXG4gIH0sXHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVW5Nb3VudEFwcFwiKTtcclxuICB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3JlbmRlcicpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgIDxTaWRlQmFyLz5cclxuICAgICAgPEl0ZW1MaXN0IGRhdGE9e3RoaXMuc3RhdGUucHJvZHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG52YXIgcHJvZHVjdERldGFpbHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCl7fSxcclxuICByZW5kZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zb2xlLmxvZygncmVuZGVyIHByb2R1Y3REZXRhaWxzJyk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1zcGVjaWZpY2F0aW9uc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VwZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgPC9kaXY+ICBcclxuICAgICAgPC9kaXY+ICAgIFxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC8vIHByb2RzOiBwcm9kdWN0c1xyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XHJcbiAgfSxcclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJVbk1vdW50QXBwXCIpO1xyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVuZGVyJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4tY29udGFpbmVyXCI+XHJcbiAgICAgIDxOYXZCYXIvPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPE1haW5QYXJ0Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8QXBwIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuICApOyIsImV4cG9ydCB2YXIgcHJvZHVjdHMgPSBbXHJcbntcclxuICBjYXRlZ29yeTogXCJoYXRzXCIsXHJcbiAgbmFtZTogJ1RoZSBDb29sZXN0IEhhdCBFdmVyJyxcclxuICBzaG9ydERlc2M6ICdDb29sIGhhdCwgeW91IGNhbiBnZXQgZm9yIDI1NSBidWNrcy4gVG9wIHF1YWxpdHkgbWF0ZXJpYWxzLiBGcmVzaCBkZXNpZ24uIEp1c3QgYXdlc29tZS4nLFxyXG4gIGRlc2M6ICfQsiDRh9C10YLRi9GA0LUg0YEg0YfQtdGC0LLQtdGA0YLRjNGOINGH0LDRgdCwINGH0LXRgtGL0YDQtSDRh9GR0YDQvdC10L3RjNC60LjRhSDRh9GD0LzQsNC30LXQvdGM0LrQuNGFINGH0LXRgNGC0ZHQvdC60LAg0YfQtdGA0YLQuNC70Lgg0YfRkdGA0L3Ri9C80Lgg0YfQtdGA0L3QuNC70LDQvNC4INGH0LXRgNGC0ZHQti4nLFxyXG4gIHByaWNlOiAnMTU1JyxcclxuICBpbWFnZTogJ2ltZy90aHVtYm5haWxzLzMwMHgyMDAvaGF0MS5wbmcnXHJcbn0sXHJcbntcclxuICBjYXRlZ29yeTogXCJoYXRzXCIsXHJcbiAgbmFtZTogJ1ViZXIgQ29vbCBIYXQnLFxyXG4gIHNob3J0RGVzYzogJ1lhIGtub3cgbWEgbmFtZSEnLFxyXG4gIGRlc2M6ICfQkCDQtdCy0YDQviA0MiEnLFxyXG4gIHByaWNlOiAnMjc3JyxcclxuICBpbWFnZTogJ2ltZy90aHVtYm5haWxzLzMwMHgyMDAvaGF0Mi5wbmcnXHJcbn0sXHJcbntcclxuICBjYXRlZ29yeTogXCJoYXRzXCIsXHJcbiAgbmFtZTogJ01lZ2EgSGF0JyxcclxuICBzaG9ydERlc2M6ICdXaGF0IGVsc2UgZG8geW91IG5lZWQ/JyxcclxuICBkZXNjOiAn0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INC/0LvQsNGC0L3Qviwg0L/RgNC+0YHRgtC+INC90YPQttC90L4g0L/RgNC+0YfQuNGC0LDRgtGMINC+0YfQtdC90Ywg0LTQu9C40L3QvdC+0LUg0LvQuNGG0LXQvdC30LjQvtC90L3QvtC1INGB0L7Qs9C70LDRiNC10L3QuNC1JyxcclxuICBwcmljZTogJzM1NScsXHJcbiAgaW1hZ2U6ICdpbWcvdGh1bWJuYWlscy8zMDB4MjAwL2hhdDMucG5nJ1xyXG59LFxyXG57XHJcbiAgY2F0ZWdvcnk6IFwiaGF0c1wiLFxyXG4gIG5hbWU6ICdNZWdhIFViZXIgSGF0JyxcclxuICBzaG9ydERlc2M6ICdNdXN0IGhhdmUhJyxcclxuICBkZXNjOiAn0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INC/0LvQsNGC0L3Qviwg0L/RgNC+0YHRgtC+INC90YPQttC90L4g0L/RgNC+0YfQuNGC0LDRgtGMINC+0YfQtdC90Ywg0LTQu9C40L3QvdC+0LUg0LvQuNGG0LXQvdC30LjQvtC90L3QvtC1INGB0L7Qs9C70LDRiNC10L3QuNC1JyxcclxuICBwcmljZTogJzEwNScsXHJcbiAgaW1hZ2U6ICdpbWcvdGh1bWJuYWlscy8zMDB4MjAwL2hhdDQucG5nJ1xyXG59LFxyXG57XHJcbiAgY2F0ZWdvcnk6IFwiaGF0c1wiLFxyXG4gIG5hbWU6ICdLaWxsZXIgSGF0JyxcclxuICBzaG9ydERlc2M6ICdUaGlzIGhhdCBpcyBhIGtpbGxlciEnLFxyXG4gIGRlc2M6ICfQndCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0L/Qu9Cw0YLQvdC+LCDQv9GA0L7RgdGC0L4g0L3Rg9C20L3QviDQv9GA0L7Rh9C40YLQsNGC0Ywg0L7Rh9C10L3RjCDQtNC70LjQvdC90L7QtSDQu9C40YbQtdC90LfQuNC+0L3QvdC+0LUg0YHQvtCz0LvQsNGI0LXQvdC40LUnLFxyXG4gIHByaWNlOiAnMTI1JyxcclxuICBpbWFnZTogJ2ltZy90aHVtYm5haWxzLzMwMHgyMDAvaGF0NS5wbmcnXHJcbn0sXHJcbntcclxuICBjYXRlZ29yeTogXCJib290c1wiLFxyXG4gIG5hbWU6ICdLaWxsZXIgQm9vdHMnLFxyXG4gIHNob3J0RGVzYzogJ1N1cGVyIGNvb2wgYm9vdHMuJyxcclxuICBkZXNjOiAn0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INC/0LvQsNGC0L3Qviwg0L/RgNC+0YHRgtC+INC90YPQttC90L4g0L/RgNC+0YfQuNGC0LDRgtGMINC+0YfQtdC90Ywg0LTQu9C40L3QvdC+0LUg0LvQuNGG0LXQvdC30LjQvtC90L3QvtC1INGB0L7Qs9C70LDRiNC10L3QuNC1JyxcclxuICBwcmljZTogJzEyNScsXHJcbiAgaW1hZ2U6ICdpbWcvdGh1bWJuYWlscy8zMDB4MjAwL2Jvb3RzL2Jvb3RzMS5wbmcnXHJcbn0sXHJcbntcclxuICBjYXRlZ29yeTogXCJib290c1wiLFxyXG4gIG5hbWU6ICdLaWxsZXIgQm9vdHMnLFxyXG4gIHNob3J0RGVzYzogJ0RvbnQgc3RvcCBtZSBub3chIScsXHJcbiAgZGVzYzogJ9Cd0LAg0YHQsNC80L7QvCDQtNC10LvQtSDQv9C70LDRgtC90L4sINC/0YDQvtGB0YLQviDQvdGD0LbQvdC+INC/0YDQvtGH0LjRgtCw0YLRjCDQvtGH0LXQvdGMINC00LvQuNC90L3QvtC1INC70LjRhtC10L3Qt9C40L7QvdC90L7QtSDRgdC+0LPQu9Cw0YjQtdC90LjQtScsXHJcbiAgcHJpY2U6ICcxMjUnLFxyXG4gIGltYWdlOiAnaW1nL3RodW1ibmFpbHMvMzAweDIwMC9ib290cy9ib290czIucG5nJ1xyXG59LFxyXG57XHJcbiAgY2F0ZWdvcnk6IFwiYm9vdHNcIixcclxuICBuYW1lOiAnS2lsbGVyIEJvb3RzJyxcclxuICBzaG9ydERlc2M6ICdOaWNlIGJvb3RzLicsXHJcbiAgZGVzYzogJ9Cd0LAg0YHQsNC80L7QvCDQtNC10LvQtSDQv9C70LDRgtC90L4sINC/0YDQvtGB0YLQviDQvdGD0LbQvdC+INC/0YDQvtGH0LjRgtCw0YLRjCDQvtGH0LXQvdGMINC00LvQuNC90L3QvtC1INC70LjRhtC10L3Qt9C40L7QvdC90L7QtSDRgdC+0LPQu9Cw0YjQtdC90LjQtScsXHJcbiAgcHJpY2U6ICcxMjUnLFxyXG4gIGltYWdlOiAnaW1nL3RodW1ibmFpbHMvMzAweDIwMC9ib290cy9ib290czMucG5nJ1xyXG59LFxyXG57XHJcbiAgY2F0ZWdvcnk6IFwiYm9vdHNcIixcclxuICBuYW1lOiAnS2lsbGVyIEJvb3RzJyxcclxuICBzaG9ydERlc2M6ICdCZWF1dGlmdWwgYm9vdHMuJyxcclxuICBkZXNjOiAn0J3QsCDRgdCw0LzQvtC8INC00LXQu9C1INC/0LvQsNGC0L3Qviwg0L/RgNC+0YHRgtC+INC90YPQttC90L4g0L/RgNC+0YfQuNGC0LDRgtGMINC+0YfQtdC90Ywg0LTQu9C40L3QvdC+0LUg0LvQuNGG0LXQvdC30LjQvtC90L3QvtC1INGB0L7Qs9C70LDRiNC10L3QuNC1JyxcclxuICBwcmljZTogJzEyNScsXHJcbiAgaW1hZ2U6ICdpbWcvdGh1bWJuYWlscy8zMDB4MjAwL2Jvb3RzL2Jvb3RzNC5wbmcnXHJcbn1cclxuXTsiXX0=
