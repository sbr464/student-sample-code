/**
 * Single news item. Take in an object of properties.
 * @param {object} props Properties to assign
 */
var NewsItem = function(props){
  this.title = props.title;
  this.description = props.description;
  this.date = props.date;
  this.author = props.author;

  // Create a url property for this object that is equal to
  // the given title, converted to lowercase, with all
  // spaces converted to -'s. Needs the regular expression with
  // the 'g' (global) flag set.
  this.url = this.title
    .toLowerCase()
    .replace(new RegExp(' ', 'g'), '-');
  // .replace(/ /g, '-') -> same as above, but shorthand

  this.getDescription = function(){
    return this.description;
  };
};

module.exports = NewsItem;