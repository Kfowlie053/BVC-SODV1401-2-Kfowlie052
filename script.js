
var trailform = document.forms.trailform;
var message = document.getElementById("message");


trailform.name.onfocus = function() {
    trailform.name.style.border = "6px solid green";
};

trailform.name.onblur = function() {
    trailform.name.style.border = "1px solid black";
};

trailform.email.onfocus = function() {
    trailform.email.style.border = "6px solid green";
};

trailform.email.onblur = function() {
    trailform.email.style.border = "1px solid black";
};

trailform.MessageText.onfocus = function() {
    trailform.MessageText.style.border = "6px solid green";
};

trailform.MessageText.onblur = function() {
    trailform.MessageText.style.border = "1px solid black";
};


trailform.onsubmit = function(){

    if(trailform.name.value == ""){
        message.innerHTML = "Plese enter a name";
        return false;
    } else{
        message.innerHTML = "";
        return true;
    }
};

const url = "https://wttr.in/Calgary.png"
async function getFreeWeatherMap() {
try {
    const response = await fetch(url);
if (!response.ok) throw new Error("network error");

const imageBlob = await response.blob();
const imageObjectURL = URL.createObjectURL(imageBlob)

document.getElementById("weather-map").src = imageObjectURL;
}
catch (error) {
    console.error("Failed to grab the map:", error)
}
}

window.addEventListener("DOMContentLoaded", getFreeWeatherMap);


