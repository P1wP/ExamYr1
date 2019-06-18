// Change Background Img
document.body.style.backgroundImage = 'url("../img/contactUs.jpg")';

var input = document.getElementById("contactEmail");
var text = document.getElementById("contactText");
var head = document.querySelector(".contentHome");
var container = document.getElementById("container");
var footer = document.getElementById("footer");


// AN ATTEMPT TO FIX ISSUED WHEN KEYBOARD ON PHONE POPS UP.
// HIDE CONTACT US ON MOBILE DEVICES WHEN KEYBOARD IS VISABLE
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
   container.addEventListener("click", function(){
    if (event.path[0].hasAttribute("id")){
        var id = event.path[0].getAttribute("id");

        if(id === "contactEmail" || id === "contactText"){
            head.style.display = "none";
            footer.style.display = "none";
            container.style.marginTop = "50px";

        }
        else{
            head.style.display = "block";
            footer.style.display = "block";
        }
    }
    else{
        head.style.display = "block";
        footer.style.display = "block";
    }
})
}

// CHECK VALUES
// sent
var send = document.getElementById("contactBtn");
var form = document.getElementById("contactForm");
var emailPattern = /^[a-zA-Z0-9()=&%#"!-._]+@+[a-zA-Z0-9-.]+[\.]+[a-zA-Z0-9]{2,64}$/;
/* TOP LEVEL DOMAIN SHOULD HAVE ENOUGH LENGTH NOW
    If for some wierd reason more is needed, a simpler "." will allow for more.
*/
var namePattern = /^[a-zA-Z0-9 ]{1,20}$/;
var textPattern = /^[\s\S]{1,5000}$/;

send.addEventListener("click", function(){
    var name = form.querySelector("#contactName").value
    var email = form.querySelector("#contactEmail").value
    var msg = form.querySelector("#contactText").value
    
    if(!email.match(emailPattern)){
        alert("Please enter valid email");
    }
    else if(!name.match(namePattern)){
        alert("Please enter valid name")
    }
      else if(!msg.match(textPattern)){
        alert("Please enter valid message")
    }
    else{
        alert("Message is sent");
        
    }
  
    
})
