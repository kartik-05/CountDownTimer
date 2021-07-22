var event_date = new Date(2022, 8, 6, 12, 30).getTime();

setInterval(function(){

var curr_date = new Date().getTime();


var diff = event_date - curr_date;

var days = Math.floor(diff / (1000 * 60 * 60 * 24));
var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((diff % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("min").innerHTML=minutes;
document.getElementById("sec").innerHTML=seconds;

if(diff<0){
    clearInterval();
}


},1000);
