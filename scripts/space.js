// CHANGE BACKGROUND
document.body.style.backgroundImage = 'url("../img/spaceBg.jpg")';
/*--------------------------------------------------------------------------
                                    ISS API
---------------------------------------------------------------------------*/

//Fetch ISS location API
fetch("http://api.open-notify.org/iss-now.json").then(function (result) {
    return result.json();
}).then(function (pos) {
    console.log(pos);
    locationIss(pos);
});

//Fect ISS passengers API
fetch("http://api.open-notify.org/astros.json").then(function (result2) {
    return result2.json();
}).then(function (astro) {
    console.log(astro);
    astronauts(astro);
});

// Content spaceHTML
var content = document.getElementById("contentHome");
var crew = document.getElementById("currentCrew");
var latidude = document.getElementById("latitude");
var longitude = document.getElementById("longitude");
var people = document.getElementById("people");

/*---------------------
    Page indicator
---------------------*/
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page = "";

function indicator(page){
    if(page === 1){
        page1.setAttribute("src", "../icons/SVG/filled.svg");
        page2.setAttribute("src", "../icons/SVG/unFilled.svg");
    }
    else if(page === 2){
        page2.setAttribute("src", "../icons/SVG/filled.svg");
        page1.setAttribute("src", "../icons/SVG/unFilled.svg");
    }
  
}



// Add content on page-load
window.addEventListener("load", issContent);

function issContent(){
    page = 1;
    indicator(page);
    locationIss();
    astronauts();
}

function locationIss(pos){
    // Display Location of ISS
    longitude.innerHTML = pos.iss_position.longitude;
    latidude.innerHTML = pos.iss_position.latitude;
}

function astronauts(astro){
    // Display current number of crew
    people.innerHTML = astro.number;
    
    // Display name of current crew
    var crew_1 = document.createElement("ul");
    var crew_2 = document.createElement("ul");
    var crew_3 = document.createElement("ul");
    
    for(var i = 0; i < astro.people.length; i++){
        var crewMember = document.createElement("li");
        crewMember.innerHTML = i+1 + ". " + astro.people[i].name;
        // ISS 7 PPL MAXIMUM CREW
        if( i < 3){
            crew_1.appendChild(crewMember);
        }
        else if(i >2 && i < 7){
            crew_2.appendChild(crewMember);
        }
        else if(i > 6){
            crew_3.appendChild(crewMember);
        }
    }
    crew.appendChild(crew_1);
    crew.appendChild(crew_2);
    crew.appendChild(crew_3);
}

/*--------------------------------------------------------------------------
                                DOM ELEMENTS
---------------------------------------------------------------------------*/
var issContainer = document.getElementById("issContainer");
var headline = document.querySelector(".contentHome");
var issInfo = document.getElementById("issInfo");
var spaceStream = document.getElementById("spaceStream");
var currentCrew = document.getElementById("currentCrew");
var modal = document.getElementById("modalImg");
var modalImg = document.getElementById("clickedImg");
var closeModal = document.getElementById("closeModal");
var altText = document.getElementById("altText");

/*--------------------------------------------------------------------------
                                HIDE/SHOW CONTENT
---------------------------------------------------------------------------*/
//ISS CONTENT
function hideISS(){
    page = 2;
    indicator(page);
    issInfo.style.display = "none";
    spaceStream.style.display = "none";
    currentCrew.style.display = "none";
}
function showISS(){
    page = 1;
    indicator(page);
    issInfo.style.display = "block";
    spaceStream.style.display = "block";
    currentCrew.style.display = "block";
    for(var i = 0; i < images.img.length; i++){
        var spaceImg = document.getElementById("spaceImg_" + i);
        spaceImg.parentNode.removeChild(spaceImg);
    }
}

//modal
closeModal.addEventListener("click", function(){
    modal.style.display = "none";
})
/*--------------------------------------------------------------------------
                                CREATE CONTENT
---------------------------------------------------------------------------*/
//IMAGES
var images = {
img:[
    {img_1:"img", src:"../img/space_1.jpg", 
    alt:"BFR passing the Moon"},
    {img_2:"img", src:"../img/space_2.jpg", 
    alt:"BFR at stage separation"},
    {img_3:"img", src:"../img/space_3.jpg", 
    alt:"BRF in flight"},
    {img_4:"img", src:"../img/space_4.jpg", 
    alt:"Falcon Heavy Demo Mission"},
    {img_5:"img", src:"../img/space_5.jpg", 
    alt:"Interplanetary Transport System"},
    {img_6:"img", src:"../img/space_6.jpg", 
    alt:"Interplanetary Transport System"},
    {img_7:"img", src:"../img/space_7.jpg", 
    alt:"Interplanetary Transport System"},
    {img_8:"img", src:"../img/space_8.jpg", 
    alt:"Interplanetary Transport System"},
    {img_9:"img", src:"../img/space_9.jpg", 
    alt:"Interplanetary Transport System"},
],
}

//CREATE GALLERY
function createGallery(){
    var page = 2;
    indicator(page);
    
    for(var i = 0; i < images.img.length; i++){
        var imgDiv = document.createElement("div");
        imgDiv.setAttribute("id", "spaceImg_" +i);
        imgDiv.setAttribute("class", "spaceImg");
        var img = document.createElement("img");
        img.setAttribute("src", images.img[i].src);
        img.setAttribute("alt", images.img[i].alt);
        imgDiv.appendChild(img);
        issContainer.appendChild(imgDiv);
    }
    // EventListeners to open modal
    
   var pic1 = document.getElementById("spaceImg_0").addEventListener("click", function(){
        var src = this.firstChild.getAttribute("src");
        var alt = this.firstChild.getAttribute("alt");
        modalImg.setAttribute("src", src);
        modalImg.setAttribute("alt", "Oops, something went wrong...");
        altText.innerHTML = alt;
        modal.style.display = "block";
       
   }) 
   var pic2 = document.getElementById("spaceImg_1").addEventListener("click", function(){
        var src = this.firstChild.getAttribute("src");
        var alt = this.firstChild.getAttribute("alt");
        modalImg.setAttribute("src", src);
        modalImg.setAttribute("alt", "Oops, something went wrong...");
        altText.innerHTML = alt;
        modal.style.display = "block";
   }) 
   var pic3 = document.getElementById("spaceImg_2").addEventListener("click", function(){
        var src = this.firstChild.getAttribute("src");
        var alt = this.firstChild.getAttribute("alt");
        modalImg.setAttribute("src", src);
        modalImg.setAttribute("alt", "Oops, something went wrong...");
        altText.innerHTML = alt;
        modal.style.display = "block";
   }) 
   var pic4 = document.getElementById("spaceImg_3").addEventListener("click", function(){
        var src = this.firstChild.getAttribute("src");
        var alt = this.firstChild.getAttribute("alt");
        modalImg.setAttribute("src", src);
        modalImg.setAttribute("alt", "Oops, something went wrong...");
        altText.innerHTML = alt;
        modal.style.display = "block";
   }) 
   var pic5 = document.getElementById("spaceImg_4").addEventListener("click", function(){
        var src = this.firstChild.getAttribute("src");
        var alt = this.firstChild.getAttribute("alt");
        modalImg.setAttribute("src", src);
        modalImg.setAttribute("alt", "Oops, something went wrong...");
        altText.innerHTML = alt;
        modal.style.display = "block";
   }) 
   var pic6 = document.getElementById("spaceImg_5").addEventListener("click", function(){
        var src = this.firstChild.getAttribute("src");
        var alt = this.firstChild.getAttribute("alt");
        modalImg.setAttribute("src", src);
        modalImg.setAttribute("alt", "Oops, something went wrong...");
        altText.innerHTML = alt;
        modal.style.display = "block";

   }) 
   var pic7 = document.getElementById("spaceImg_6").addEventListener("click", function(){
        var src = this.firstChild.getAttribute("src");
        var alt = this.firstChild.getAttribute("alt");
        modalImg.setAttribute("src", src);
        modalImg.setAttribute("alt", "Oops, something went wrong...");
        altText.innerHTML = alt;
        modal.style.display = "block";

   }) 
   var pic8 = document.getElementById("spaceImg_7").addEventListener("click", function(){
        var src = this.firstChild.getAttribute("src");
        var alt = this.firstChild.getAttribute("alt");
        modalImg.setAttribute("src", src);
        modalImg.setAttribute("alt", "Oops, something went wrong...");
        altText.innerHTML = alt;
        modal.style.display = "block";

   }) 
   var pic9 = document.getElementById("spaceImg_8").addEventListener("click", function(){
        var src = this.firstChild.getAttribute("src");
        var alt = this.firstChild.getAttribute("alt");
        modalImg.setAttribute("src", src);
        modalImg.setAttribute("alt", "Oops, something went wrong...");
        altText.innerHTML = alt;
        modal.style.display = "block";

   }) 
  
    
}





/*--------------------------------------------------------------------------
                                CHANGE CONTENT
---------------------------------------------------------------------------*/
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
            headline.firstElementChild.innerHTML = "Gallery";
            createGallery();
            hideISS();
        }
        else{
            count--;
            headline.firstElementChild.innerHTML = "ISS";
            showISS();
        };  
    }
    //BACK
    else if(back >= minDistance && next <=0){
        if(count === 0){
            count++;
            headline.firstElementChild.innerHTML = "Gallery";
            createGallery();
            hideISS();
        }
        else{
            count--;
            headline.firstElementChild.innerHTML = "ISS";
            showISS();
        };  
    }
}


// ADD SLIDE FOR MODAL






// BUTTONS FOR DESKTOP
var next = document.querySelector(".next");
var back = document.querySelector(".back");


var count = 0;
next.addEventListener("click", function(){
    if(count === 0){
        count++;
        headline.firstElementChild.innerHTML = "Gallery";
        console.log("gallery");
        createGallery();
        hideISS();
    }
    else{
        count--;
        headline.firstElementChild.innerHTML = "ISS";
        console.log("iss");
        showISS();
    };  
})

back.addEventListener("click", function(){
    if(count === 0){
        count++;
        console.log("gallery");
    }
    else{
        count--;
        console.log("iss");
    };  
})


