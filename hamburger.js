// Open close menu

// Get hamburger Icon
var open = document.getElementById("hamburger");
// Get X icon
var close = document.getElementById("closeNav");
// Get navigation list
var navigation = document.getElementById("navigation");


/* Change position and icon on click */
open.addEventListener("click", function(){
     navigation.style.left = "0px";
})

close.addEventListener("click", function(){
    navigation.style.left ="-300px";
})

