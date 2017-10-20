var apiKey = "8e6439e9d46a9929d427b0483328be10";

var apiURL = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=" + apiKey + "&per_page=1&format=json&nojsoncallback=1extras=url_o";

function validatePage() {
    document.getElementById("header").innerHTML = "It works. You didn't break your JavaScript.";
}

function fetchPhoto() {
    $.getJSON(apiURL, function(response){
        var ID = response.photos.photo[0].id;
        document.getElementById("photoID").innerHTML = ID;
        var newURL = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + apiKey + "&photo_id=" + ID + "&per_page=1&format=json&nojsoncallback=1extras=url_o";
        var url2 = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + apiKey + "8e6439e9d46a9929d427b0483328be10&user_id=me&format=json&nojsoncallback=1&text=cats&extras=url_o";
        $.getJSON(newURL, function(response){
            var sizes = response.sizes.size;
            //alert(JSON.stringify(response));
            for (var i = sizes.length - 1; i >= 0; i--) {
                if (sizes[i].label === "Original"){
                    var url = sizes[i].source;
                }
            }
            if (url == null){
                alert(ID);
            }
            document.getElementById("photoURL").innerHTML = url;
            document.getElementById("photo").src = url;
        });
    });
    
}

//flickr.photos.getSizes

//https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=8e6439e9d46a9929d427b0483328be10&photo_id=37005632866&per_page=1&format=json&nojsoncallback=1