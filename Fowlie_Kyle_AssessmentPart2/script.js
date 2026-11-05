
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

trailform.submit.addEventListener('click', HandleClick)

function HandleClick(){
   alert('submitted');
};


