let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 =document.getElementById("c3");
b1.onclick=function(){

   red();
}
b2.onclick = function(){ 
    yellow();
}
b3.onclick = function(){
    green();
}
function red(){
b1.style.backgroundColor = "red";
b2.style.backgroundColor = "lightskyblue";
b3.style.backgroundColor = "lightskyblue";
c1.style.backgroundColor = "red";
c2.style.backgroundColor = "#1c034bff";
c3.style.backgroundColor = "#1f1d41";
}
function yellow(){
b2.style.backgroundColor = "#f7c948";
b3.style.backgroundColor = "lightskyblue";
b1.style.backgroundColor = "lightskyblue";
c2.style.backgroundColor = "#f7c948";
c3.style.backgroundColor = "#1f1d41";
c1.style.backgroundColor = "#1f1d41";
}
function green(){
b3.style.backgroundColor ="#0dbb47ff";
b1.style.backgroundColor = "lightskyblue";
b2.style.backgroundColor = "lightskyblue";
c3.style.backgroundColor = "#0b9640ff";
c1.style.backgroundColor = "#1f1d41";
c2.style.backgroundColor ="#1f1d41";
}