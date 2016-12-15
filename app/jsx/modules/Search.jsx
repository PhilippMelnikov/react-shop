import React from 'react'
import ReactDOM from 'react-dom'

var Search = React.createClass({
  getInitialState: function(){
    return{
      searchActive: false

    };
  },

  onCheckHandler: function(e)
  {
   this.setState({ searchActive: !this.state.searchActive });
 },

 onFieldChange: function(e) {
  // if (e.target.value.trim().length > 0) {
    var searchText = e.target.value;
    console.log(searchText); 
    window.ee.emit('ItemList.search', searchText);
  // } 
},

onHamburgerClick: function(e)
{
  e.preventDefault();
  console.log("Hamburger");
  window.ee.emit('SideBar.slide-in');

},

componentDidMount: function()
{
  ReactDOM.findDOMNode(this.refs.searchbox).focus();
  console.log("Hey_lalaLey");
  // return true;
},
shouldComponentUpdate: function()
{
  ReactDOM.findDOMNode(this.refs.searchbox).focus();
  return true;
},

render: function()
{
  console.log("Nav_Rendering");
  return(
    <div className="navbar1">
    <nav className="my-nav">
    <input
    type="text" 
    className={'search ' + (this.state.searchActive ? 'slide-input':'') }
    onChange={this.onFieldChange}
    ref="searchbox"
    />
    <label className="search-icon" htmlFor="psearch">
    <img src="img/1476008112_common-search-lookup-glyph.svg" alt="search"></img>
    </label>
    <input 
    id="psearch" 
    name="search" 
    type="checkbox" 
    onChange={this.onCheckHandler}
    />
    <a className='hamburger' onClick={this.onHamburgerClick} href="#">
    <img src="img/1476007262_editor-list-view-hambuger-menu-outline-stroke.svg" alt="hamburger"></img>
    </a>
    </nav>
    </div>  
    );
}
});

module.exports = Search;