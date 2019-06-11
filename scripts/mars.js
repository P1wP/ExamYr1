var mars = {
    marsGoal: [
        {head: "Mission to Mars"}, 
        {txt_1: "Our aspirational goal is to send our first cargo mission to Mars in 2022 Mission, with both cargo and crew, is targeted for 2024"}, 
        {imgSrc: "../img/space_5.jpg"}
    ],
    mars2022: [
        {head: "Mars 2022"},
        {list:[
            {li_head: "Mission objectives"},
            {li: "Confirm water resources"},
            {li: "Identify hazards"},
            {li: "Set up initial power, mining, and life support infrastructure"}]},
        {imgSrc: "IMG SRC!"}
    ],
    mars2024: [
        {head: "Mars 2024"},
        {list:[
            {li_head: "Misson objectives"}, 
            {li: "Build a propellant depot"},
            {li: "Prepear for future crew flights"}]},
        {text: "The ships from these initial missions will also serve as the beginnings of the first Mars base, from which we can build a thriving city and eventually a self-sustaining civilization on Mars."},
        {imgSrc: "IMG SRC!"}
    ]
};

window.addEventListener("load", marsGoal);

// DOM Elements
var head = document.querySelector(".contentHome").firstChild;
var textContent = document.querySelector(".contentMars");
var img = document.querySelector(".imgContentMars");

/*---------------------
    Page indicator
---------------------*/
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
function indicator(page){
    if(page === 1){
        page1.setAttribute("src", "../icons/SVG/filled.svg");
        page2.setAttribute("src", "../icons/SVG/unFilled.svg");
        page3.setAttribute("src", "../icons/SVG/unFilled.svg");
    }
    else if(page === 2){
        page2.setAttribute("src", "../icons/SVG/filled.svg");
        page3.setAttribute("src", "../icons/SVG/unFilled.svg");
        page1.setAttribute("src", "../icons/SVG/unFilled.svg");
    }
    else if(page === 3){
        page3.setAttribute("src", "../icons/SVG/filled.svg");
        page1.setAttribute("src", "../icons/SVG/unFilled.svg");
        page2.setAttribute("src", "../icons/SVG/unFilled.svg");
    }
}



function marsGoal(){
    var page = 1;
    indicator(page);
    head.innerHTML = mars.marsGoal[0].head;
    textContent.innerHTML = mars.marsGoal[1].txt_1;
    
    //Change background
    document.body.style.backgroundImage = "url(" + mars.marsGoal[2].imgSrc + ")";
    
}

function mars2022(){
    var page = 2;
    indicator(page);
    head.innerHTML = mars.mars2022[0].head;
    textContent.innerHTML = mars.mars2022[1].list[0].li_head;
    var ul = document.createElement("ul");
    ul.setAttribute("id", "marsUl2022");
    
    for(var i = 1; i < mars.mars2022[1].list.length; i++){
        var li = document.createElement("li");
        li.setAttribute("class", "marsLi2022");
        li.innerHTML = mars.mars2022[1].list[i].li;
        li.style.textAlign ="left";
        ul.appendChild(li);
    }
    textContent.appendChild(ul);
}

function mars2024(){
    var page = 3;
    indicator(page);
    head.innerHTML = mars.mars2024[0].head;
    textContent.innerHTML = mars.mars2022[1].list[0].li_head;
    var ul = document.createElement("ul");
    ul.setAttribute("id", "marsUl2024");
    
    for(var i = 1; i < mars.mars2024[1].list.length; i++){
        var li = document.createElement("li");
        li.setAttribute("class", "marsLi2024");
        li.innerHTML = mars.mars2024[1].list[i].li;
        li.style.textAlign ="left";
        ul.appendChild(li);
    }
    var text = document.createElement("p");
    text.setAttribute("id", "marsText");
    text.innerHTML = mars.mars2024[2].text;
    textContent.appendChild(ul);
    textContent.appendChild(text);
    
}




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
var count = 0;


function mobileSlide(){
    var next = xStart-xEnd;
    var back = xEnd-xStart;

    //NEXT
    if ( next >= minDistance && back <= 0) {
        if(count === 0){
            count++;
            console.log(count);
            mars2022();
        }
        else if(count === 1 | count === -2){
            count++;
            console.log(count);
            mars2024();
        }
        else{
            count = 0;
            console.log(count);
            marsGoal();
        }

    }
    //BACK
    else if(back >= minDistance && next <=0){
        if(count === 0){
            count--;
            console.log(count);
            mars2024();
        }
        else if(count === -1 | count === 2){
            count--;
            console.log(count);
            mars2022();
        }
        else{
            count = 0;
            console.log(count);
            marsGoal();
        }
        
    }
}


// BUTTONS FOR DESKTOP
var next = document.querySelector(".next");
var back = document.querySelector(".back");

next.addEventListener("click", function(){
  if(count === 0){
            count++;
            console.log(count);
            mars2022();
        }
        else if(count === 1 | count === -2){
            count++;
            console.log(count);
            mars2024();
        }
        else{
            count = 0;
            console.log(count);
            marsGoal();
        } 
})

back.addEventListener("click", function(){
        if(count === 0){
            count--;
            console.log(count);
            mars2024();
        }
        else if(count === -1 | count === 2){
            count--;
            console.log(count);
            mars2022();
        }
        else{
            count = 0;
            console.log(count);
            marsGoal();
        }
})

