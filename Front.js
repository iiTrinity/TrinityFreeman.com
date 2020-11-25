// Project Baby PopUp
var PopUp = document.getElementById("ProjectBaby");
var Button = document.getElementById("ProjectBabyButton");
var span = document.getElementsByClassName("close")[0];


Button.onclick = function () {
    PopUp.style.display = "block";
}
span.onclick = function () {
    PopUp.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == PopUp) {
        PopUp.style.display = "none";
    }
}

// Project Life PopUp
var PopUp = document.getElementById("ProjectLife");
var Button = document.getElementById("ProjectLifeButton");
var span = document.getElementsByClassName("close")[1];


Button.onclick = function () {
    PopUp.style.display = "block";
}
span.onclick = function () {
    PopUp.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == PopUp) {
        PopUp.style.display = "none";
    }
}









// this selects ALL the buttons from ur html, you can replace the button with like and id or class
// if its and id you can do "#myID" or if its class u can do ".myClass"
//const btn = document.querySelectorAll("button");

// this is a loop that goes over all the btns that you have called and seperates each one
//btn.foreach(event => {
    // "event" is the item you clicked, event can be named anything
    //event.addEventListener("click", () => {
   //     //now you can do whatever you wanna do with the that button
   //     event.srcElement.id;
    //}
//}