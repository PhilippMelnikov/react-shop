import React from 'react'
import Item from './Item'
const util = require('util')

var ItemList = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  getInitialState: function() {
    return {
      // activeCategory: '',
      remount: false,
      filteredData: this.props.data
    };
  },

  componentDidMount: function() {
    var self = this;
    window.ee.addListener('ItemList.filter', function(categ) {

      function filterByCategory(refCat, element) 
      {
         // alert(refCat);
         return (element.category==refCat);
       }
      var data = self.props.data; // initial data
      var itemsList; //final list

  // filter
  if (data.length > 0) 
  {
    if (categ!='')
    {
     itemsList = data.filter(filterByCategory.bind(this,categ))
   }
 } 
 else 
 {
  itemsList=[{}];
}

self.setState({remount: true});  
self.setState({filteredData: itemsList});
});

    window.ee.addListener('ItemList.search', function(searchText) {
      if(searchText=='')
      {
       self.setState({filteredData: self.props.data});
      }

     function CustomSearch(searchQuery, element) 
     {
         var regexp = new RegExp(searchText, "i");
         var res = -1;
         for(var key in element)
         {
          if(key!='image')
            {
              if(util.isString(element[key]))
             { 
              res = element[key].search(regexp);
              if(res>-1)
              {
                return true;
              }
            }
            }
         }
         
         return false;
       }

      var data = self.props.data; // initial data
      var itemsList; //final list

      itemsList = data.filter(CustomSearch.bind(this,searchText))
      self.setState({filteredData: itemsList});
    });
  },

  shouldComponentUpdate: function()
  {
    return true;
  },

  componentWillUnmount: function() {
    window.ee.removeListener('ItemList.filter');
    console.log("UnMountList");
    return true;
  },

  render: function() {



    var data = this.state.filteredData;
    var itemsTemplate;
    if(!this.state.remount)
    {
      if (data.length > 0) {

       itemsTemplate = data.map(function(item, index) {
        return (

          <div key={index}>
          <Item data={item} />
          </div>

          )
      });

     } 
     else 
     {
      itemsTemplate = <p></p>
    }
  }
  else
  {
    itemsTemplate = <p></p>
  }
  console.log("itemList Rendering");
  console.log("remount: ");
  if(this.state.remount)
    { this.setState({remount: false});}

  return (
     <div className='products-container' id="prod-container">
      {itemsTemplate}
    </div>     
      );
}
});

module.exports = ItemList;