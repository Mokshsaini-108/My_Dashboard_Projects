document.getElementById("button1").onmouseenter=displayDate;
document.getElementById("button1").onmouseleave=leaveMethod;
document.getElementById("button1").onmousemove=moveMethod;
document.getElementById("button1").onmouseup=upMethod;
document.getElementById("button1").on;

function displayDate(){
    document.getElementById("h1").innerHTML="Mouse Enter Done";
}
function leaveMethod(){
    document.getElementById("h1").innerHTML="Mouse Leave Done";
}
// function moveMethod(){
//     document.getElementById("h1").innerHTML="Mouse move Done";
// }
function upMethod(){
    document.getElementById("h1").innerHTML="Mouse up Done";
}