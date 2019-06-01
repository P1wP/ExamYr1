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



// Add content on page-load
document.addEventListener("onload", function(){
    locationIss();
    astronauts();
})

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
