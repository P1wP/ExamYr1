/*--------------------------------------------------------------------------
                                FETCH API
---------------------------------------------------------------------------*/
fetch("https://api.spacexdata.com/v3/rockets/falcon9").then(function (result) {
    return result.json();
}).then(function (pos) {
    spaceXfalcon9 = pos;
});

fetch("https://api.spacexdata.com/v3/rockets/falconheavy").then(function (result) {
    return result.json();
}).then(function (pos) {
    spaceXfalconHeavy = pos;
});

fetch("https://api.spacexdata.com/v3/dragons/dragon2").then(function (result) {
    return result.json();
}).then(function (pos) {
    spaceXdragon = pos;
});

fetch("https://api.spacexdata.com/v3/launches").then(function (result) {
    return result.json();
}).then(function (pos) {
    spaceXlaunches = pos;
});

/* NO API FOR SPACESUITE WILL USE THIS OBJECT ARRAY IN SPACESUITE()
   FOR MED OBJECT ARRAYS ARE EASIER TO READ THAN ARRAYS.
*/
var spaceSuit = {
    list:[
        {li:"3D printed space suit helmet"},
        {li:"Touchscreen compatible gloves"},
        {li:"Flame resistant outer layer"},
        {li:"Hearing protection during ascent and reentry"},
        {li:"Single connection point between the suit and vehicle"},
        {li:"Heel sliders securing feet to footrest"}
    ]
};

var spaceSuiteObj = {li1:"3D printed space suit helmet", li2:"Touchscreen compatible gloves"}

// FETCHED INFO FROM API
var spaceXfalcon9 = [];
var spaceXfalconHeavy = []
var spaceXdragon = [];
var spaceXlaunches = [];

/*--------------------------------------------------------------------------
                                CREATE CONTENT
---------------------------------------------------------------------------*/
// DOM elements
var headline = document.querySelector(".rocketHeading");
var hight = document.getElementById("hight");
var diameter = document.getElementById("diameter");
var stages = document.getElementById("stages");
var mass = document.getElementById("mass");
var rocketImg = document.getElementById("img");
var passengers = document.querySelector(".dragon");
var allTitles = document.querySelectorAll(".title");
var allContent = document.getElementById("rocketData");
var contentContainer = document.getElementById("content");

/*---------------------
    Page indicator
---------------------*/
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
var page4 = document.getElementById("page4");
function indicator(page){
    if(page === 1){
        page1.setAttribute("src", "../icons/SVG/filled.svg");
        page2.setAttribute("src", "../icons/SVG/unFilled.svg");
        page3.setAttribute("src", "../icons/SVG/unFilled.svg");
        page4.setAttribute("src", "../icons/SVG/unFilled.svg");
    }
    else if(page === 2){
        page2.setAttribute("src", "../icons/SVG/filled.svg");
        page3.setAttribute("src", "../icons/SVG/unFilled.svg");
        page4.setAttribute("src", "../icons/SVG/unFilled.svg");
        page1.setAttribute("src", "../icons/SVG/unFilled.svg");
    }
    else if(page === 3){
        page3.setAttribute("src", "../icons/SVG/filled.svg");
        page4.setAttribute("src", "../icons/SVG/unFilled.svg");
        page1.setAttribute("src", "../icons/SVG/unFilled.svg");
        page2.setAttribute("src", "../icons/SVG/unFilled.svg");
    }
    else if(page === 4){
        page4.setAttribute("src", "../icons/SVG/filled.svg");
        page1.setAttribute("src", "../icons/SVG/unFilled.svg");
        page2.setAttribute("src", "../icons/SVG/unFilled.svg");
        page3.setAttribute("src", "../icons/SVG/unFilled.svg");
        
    }
}


// MAKE NEW CONTENT
function falcon9(){
    //indicator
    var page = 1;
    indicator(page);
    // Info Falcon 9
    img.setAttribute("src", "../icons/rocket_img/SVG/falcon9.svg")
    img.setAttribute("alt", "Icon Falcon 9");
    headline.firstChild.innerHTML = spaceXfalcon9.rocket_name;
    hight.innerHTML = spaceXfalcon9.height.meters + "m " + '<span id="hightFeet" class="smaller">' + spaceXfalcon9.height.feet + "ft" + "</span>";
    
    diameter.innerHTML = spaceXfalcon9.diameter.meters + "m " + '<span id="diameterFeet" class="smaller">' + spaceXfalcon9.diameter.feet + "ft" + "</span>";
    
    passengers.innerHTML = "Stages";
    
    stages.innerHTML = spaceXfalcon9.stages + '<span class="smaller">&#40;1st stages reusable &#41;</span>';
    
    mass.innerHTML = spaceXfalcon9.mass.kg + "Kg " + '<span id="massLb" class="smaller">' + spaceXfalcon9.mass.lb + "Lb" + "</span>";
    
}
function falconHeavy(){
    //Indicator
    var page = 2;
    indicator(page);
    
    // Info Falcon Heavy
    img.setAttribute("src", "../icons/rocket_img/SVG/falconHeavy.svg")
    img.setAttribute("alt", "Icon Falcon Heavy");
    headline.firstChild.innerHTML = spaceXfalconHeavy.rocket_name;
    hight.innerHTML = spaceXfalconHeavy.height.meters + "m " + '<span id="hightFeet" class="smaller">' + spaceXfalconHeavy.height.feet + "ft" + "</span>";
    
    diameter.innerHTML = spaceXfalconHeavy.diameter.meters + "m " + '<span id="diameterFeet" class="smaller">' + spaceXfalconHeavy.diameter.feet + "ft" + "</span>";
    
    passengers.innerHTML = "Stages";
    
    stages.innerHTML = spaceXfalconHeavy.stages + '<span class="smaller">&#40;1st stages reusable &#41;</span>';
    
    mass.innerHTML = spaceXfalconHeavy.mass.kg + "Kg " + '<span id="massLb" class="smaller">' + spaceXfalconHeavy.mass.lb + "Lb" + "</span>";
}

function dragon(){
    //indicator
    var page = 3;
    indicator(page);
    
    //Info dragon
    img.setAttribute("src", "../icons/rocket_img/SVG/dragon.svg")
    img.setAttribute("alt", "Icon Dragon");
    img.style.width ="100%";
    img.style.marginLeft = "10px";
    headline.firstChild.innerHTML = spaceXdragon.name;
    hight.innerHTML = spaceXdragon.height_w_trunk.meters + "m " + '<span id="hightFeet" class="smaller">' + spaceXdragon.height_w_trunk.feet + "ft" + "</span>";
    
    diameter.innerHTML = spaceXdragon.diameter.meters + "m " + '<span id="diameterFeet" class="smaller">' + spaceXdragon.diameter.feet + "ft" + "</span>";
    
    passengers.innerHTML = "Passengers";
    
    stages.innerHTML = spaceXdragon.crew_capacity;
    
    mass.innerHTML = spaceXdragon.dry_mass_kg + "Kg " + '<span id="massLb" class="smaller">' + spaceXdragon.dry_mass_lb + "Lb" + "</span>";
       
}

function spaceSuite(){
    //indicator
    var page = 4;
    indicator(page);
    
    // No API for spacesuit
    // set IMG and Headline
    img.setAttribute("src", "../icons/rocket_img/SVG/spaceSuit.svg")
    img.setAttribute("alt", "SpaceX custom SpaceSuit");
    headline.firstChild.innerHTML = "Spacesuit";
    
    // Make DOM elements
    var container = document.createElement("div");
    container.setAttribute("class", "spaceSuit");
    
    var title = document.createElement("p");
    title.setAttribute("class", "title");
    title.innerHTML = "Custom-tailored suit";
    
    var list = document.createElement("ul");
    
    
    
    //APPEND
    for(var  i = 0; i < spaceSuit.list.length; i++){
        var listItem = document.createElement("li");
        listItem.innerHTML = spaceSuit.list[i].li;
        list.appendChild(listItem);
    }
    
    container.appendChild(title)
    container.appendChild(list)
    contentContainer.appendChild(container);
    
  
}

function launches(){
     // MAYBE ADD LAUNCHES + VIDEO OF A LAUNCHE.
}

//Hide/restore titles
function hideContent(){
    allContent.style.display = "none";
    
}

function restoreContent(){
    var spaceSuitContent = document.querySelector(".spaceSuit");
    spaceSuitContent.parentNode.removeChild(spaceSuitContent);
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
        allContent.style.display = "block";
        
    }
    else{
      allContent.style.display = "flex";  
    }

    
  
}
/*--------------------------------------------------------------------------
                                CHANGE CONTENT
---------------------------------------------------------------------------*/

// BUTTONS FOR DESKTOP
var next = document.querySelector(".next");
var back = document.querySelector(".back");

var pages = 1;
var count = 0;
next.addEventListener("click", function(){
  if(count === 0){
            count++;
            falconHeavy();
        }
        else if(count === 1 | count === -3){
            count++;
            dragon();
        }
        else if(count === 2 | count === -2){
            count++;
            hideContent();
            spaceSuite();
        }
        else{
            count = 0;
            restoreContent();
            falcon9();
        }  
})

back.addEventListener("click", function(){
    if(count === 0){
            count--;
            hideContent();
            spaceSuite();
        }
        else if(count === -1 | count === 3){
            count--;
            restoreContent();
            dragon();
        }
        else if(count === -2 | count === 2){
            count--;
            falconHeavy();
        }
        else{
            count = 0;
            falcon9();
        } 
})



/* Slide functionality for mobile user.
Get position of touch
slide
Get position of release. 

If distance more than or equal to X distance
    change content/page
*/
window.addEventListener("touchstart", function(event){
    var touchstart = event.changedTouches[0]
    xStart = touchstart.clientX;
})

window.addEventListener("touchend", function(event){
    var touchEnd = event.changedTouches[0]
    xEnd = touchEnd.clientX;
    mobileSlide();
})

// X position slide
var xStart = "";
var xEnd = "";
const minDistance = 150;


function mobileSlide(){
    var next = xStart-xEnd;
    var back = xEnd-xStart;

    //NEXT
    if ( next >= minDistance && back <= 0) {
        if(count === 0){
            count++;
            falconHeavy();
        }
        else if(count === 1 | count === -3){
            count++;
            dragon();
        }
        else if(count === 2 | count === -2){
            count++;
            hideContent();
            spaceSuite();
        }
        else{
            count = 0;
            restoreContent();
            falcon9();
        }

    }
    //BACK
    else if(back >= minDistance && next <=0){
        if(count === 0){
            count--;
            hideContent();
            spaceSuite();
        }
        else if(count === -1 | count === 3){
            count--;
            restoreContent();
            dragon();
        }
        else if(count === -2 | count === 2){
            count--;
            falconHeavy();
        }
        else{
            count = 0;
            falcon9();
        }
        
    }
}


// ADD SLIDE FOR MODAL






