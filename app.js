

//Collecting Elements//

let weatherDashboard = document.getElementById("weatherReport");

    //buttons
let austinBtn = document.getElementById("austinBtn");
let chicagoBtn = document.getElementById("chicagoBtn"); 
let newyorkBtn = document.getElementById("newyorkBtn");
let orlandoBtn = document.getElementById("olrandoBtn");
let sanfranciscoBtn = document.getElementById("sanfranciscoBtn");
let seatleBtn = document.getElementById("seatleBtn");
let denverBtn = document.getElementById("denverBtn");
let alantaBtn = document.getElementById("alantaBtn");



//Implementing Api
var weatherReports = function(city) { 
    const queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "12894d5822e7f76bc0b52a517964b8f4";
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){
        weatherDashboard.innerHTML = response;
    });

};


$("#austinBtn").on("click",weatherReports("Austin"));