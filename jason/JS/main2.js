//this is the page counter which we will use in the loop later on
var pageCounter = 1;
//this is the container where the pets info will display
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
//a button event listener with an onclick function clicking button will retrieve data
btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();
//we want to GET data these two arguments are to get and where from
ourRequest.open("GET", "https://raw.githubusercontent.com/slmarshall1/JSON/master/jason_example_" + pageCounter + ".js");
//ourRequest variable-telling it to load and what to do next i.e. parse the data onto the HTML page
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};
//OurRequest the variable where we store the request from XMLHttpRequest
ourRequest.send();

pageCounter++;
//when the button has been clicked three times the button will disappear
//btn.classList is the call to the css file
if(pageCounter >3){
	btn.classList.add("hide-me");
}

});

//parses the JSON data on to the screen using the renderHTML function
function renderHTML(data){
//for loop, loops through the three files on GitHub and displays JSON data
var htmlString = "";
//looping through the data and instructions on how and what to display
//Calling for the specific id in the JSON data i.e. name and species
for ( i = 0; i <data.length; i++) {

        
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
}
animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

//(YouTube, 2017)
