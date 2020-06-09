function search_posts( query ){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "http://localhost:5000/data", true);
	xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 
            alert(xhr.responseText);
        } 
    }; 
	xhr.send();
	//alert('This would query the database for posts with a title that is either similar or matches "' + query + '" and then display the relevent posts below');
}

function back_to_top(){
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
}

function create_post( title, content ){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', "http://localhost:5000/data", true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 
            console.log('yay')
        } 
    }; 
	xhr.send(JSON.stringify({ "b_title": title, "b_content": content }));
	//alert('This would save the title and content to the database');
}

function edit_post(){
	alert('This would get the title and content from the database by its ID and allow the user to edit and save changes on a new page')
}
