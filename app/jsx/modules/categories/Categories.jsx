import React from 'react'
import ItemCategory from './ItemCategory'

var Categories = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render: function(){
    var data = this.props.data;
    var CategoriesList;

    if (data.length > 0) {
      CategoriesList = data.map(function(item, index) {
        var flag=true;
        console.log(CategoriesList);
        if(data.length>0 && index>0)
        { 
          for (var i = index-1; i >= 0; i--) 
          {
           if(data[i].category==item.category)
           { 
            flag=false;
          }
        }
      }
      if(flag)
        {  return (

          <li key={index}>
          <ItemCategory data={item} />
          </li>

          )
    }
  })
    } 
    else 
    {
      CategoriesList = <p>Ничего не найдено</p>
    }

    console.log("CategoriesList_Rendering");
    return (
      <ul>
      {CategoriesList}
      </ul>
      );

  }

});

module.exports = Categories;