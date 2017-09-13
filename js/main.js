apiKey = "8e6439e9d46a9929d427b0483328be10";

apiURL = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=" + apiKey + "&per_page=1&format=json&nojsoncallback=1";

function changeTitle() {
    document.getElementById("header").innerHTML = "I changed the header.";
}

function fetchPhoto(){
	$.getJSON(apiURL, function(response){
		var ID = response.photos.photo[0].id;
        document.getElementById("photoID").innerHTML = ID;
        var newURL = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + apiKey + "&photo_id=" + ID + "&per_page=1&format=json&nojsoncallback=1";
		$.getJSON(newURL, function(response){
            alert(Object.keys(myVar)[0];)
			var url = response.sizes.size[5].source;
        	document.getElementById("photoURL").innerHTML = url;
        	document.getElementById("photo").src = url;
    	});
    });
	
}

//flickr.photos.getSizes

//https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=8e6439e9d46a9929d427b0483328be10&photo_id=36358026424&per_page=1&format=json&nojsoncallback=1