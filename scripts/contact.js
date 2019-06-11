var input = document.getElementById("contactEmail");
var text = document.getElementById("contactText");
var head = document.querySelector(".contentHome");
var container = document.getElementById("container");
var footer = document.getElementById("footer");

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
var emailPattern = "w";
var textPattern = "w";
var send = document.getElementById("contactBtn").addEventListener("click", function(){
    if (emailPattern.test(input.value) && textPattern.test(text.value)){
         alert("Your Message Is Sendt");
    }
})