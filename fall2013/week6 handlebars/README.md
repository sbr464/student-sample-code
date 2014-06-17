# PSEUDO

## Application flow
* Page loads
* Display search bar
* Enter some text to search for
* Press enter or click submit (if there is a button)
* See search results

## Technical Application flow
* Page loads - ( "/" route) Making a get request, render the jade file via res.render("index") (if jade template was called index.jade)
* Press Enter - listen for a keyup event when enter key is pressed (e.keyCode 13) or when submit was clicked
* Capture the value that was entered in the input box (.val())
* Send the value to the server via AJAX (this is on the client-side) $.get or $.post or $.ajax or $.getJSON
* Hit the specific route on the server that AJAX is requesting
* Get the data from the querystring or body based on what type of request it was (req.query or req.body)
* Search through dummy data for the search term
* Send the value back to the client
* Display the data using a Handlebars template
	* Get the template using .html() (jQuery)
	* Run Handlebars.compile on value receieved by .html()
	* Pass the data to the compiled template
	* Append the resulting HTML string into the DOM
	
```javascript
if(key in obj){

}
```
