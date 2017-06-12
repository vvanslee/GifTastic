// ** for whatever reason I couldnt get the js to work through this page


// var tags = ["huh", "what", "u mad", "disgusted", "happy", "sad", "dont even", "betta stop", "gurl", "hell naw", "you right", "thank you", "please", "nope", "thug life", "why"];
// var gifNum = 20;

// for (var i = 0; i < tags.length; i++) {

// 	var gifTag = $("<button>" + tags[i] + "</button>");

// 	gifTag.attr("type", "button");
// 	gifTag.attr("class", "btn btn-default");
// 	gifTag.attr("id", "tagbutton");
// 	gifTag.attr("value", tags[i]);

// 	$(".tag-container").append(gifTag);
// }

// $("#tagbutton").on("click", function() {
// 	event.preventDefault();

// 	var tagUrl = "https://api.giphy.com/v1/gifs/search?q=" + $(this).attr("value") + "&api_key=dc6zaTOxFJmzC&limit=" + gifNum;

// 	$.ajax({
// 		url: tagUrl,
// 		method: "GET"
// 	})

// 	.done(function(response) {

// 		for (var j = 0; j < gifNum; j++) {

// 			var imageUrl = response.data[j].images.original.url;
// 			var reactGif = $("<img>");

// 			reactGif.attr("src", imageUrl);
// 			reactGif.attr("alt", "reaction gif");
// 			reactGif.attr("id", "react-gif");

// 			$(".gifContainer").prepend(reactGif);
// 		}
// 	});
// });
			
// $("#gif-button").on("click", function() {

// 	var searchTerm = $("#search").val()

// 	// generates custom url
// 	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=" + gifNum;

// 	// get data from url
// 	$.ajax({
// 	    url: queryURL,
// 	    method: "GET"
// 	})

// 	.done(function(response) {

// 	// loop to append n images
// 		for (var k = 0; k < gifNum; k++) {

// 		    var imageUrl = response.data[k].images.original.url;
// 		    var reactGif = $("<img>");

// 		    // set attributes to <img>
// 		    reactGif.attr("src", imageUrl);
// 		    reactGif.attr("alt", "reaction gif");
// 		    reactGif.attr("id", "react-gif");

// 		   	// appends <img> to gifContainer <div>
// 	 		$(".gifContainer").prepend(reactGif);

// 	    }
// 	   });
// });