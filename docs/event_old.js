
global.create_post = function() { 
	
	const sqlite3 = require('sqlite3').verbose();

	// open database in memory
	let db = new sqlite3.Database(':memory:', (err) => {
	  if (err) {
	    return console.error(err.message);
	  }
	  console.log('Connected to the in-memory SQlite database.');
	});

	// close the database connection
	db.close((err) => {
	  if (err) {
	    return console.error(err.message);
	  }
	  console.log('Close the database connection.');
	});
	
	alert('hi')
}

global.edit_post = function(){
	alert('This would get the title and content from the database by its ID and allow the user to edit and save changes on a new page')
}

global.search_posts = function( query ){
	alert('This would query the database for posts with a title that is either similar or matches "' + query + '" and then display the relevent posts below');
}

global.back_to_top = function(){
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
}