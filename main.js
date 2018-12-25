"use strict";
  
var big_time = 1499; // time in seconds
var status = 1;

var minutes_counter;
var seconds_counter;

var countdownID;

// get all the elements
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var message = document.getElementById("message");

// register the buttons
var start = document.getElementById("start");
start.addEventListener("click", start_timer, false);  

var stop = document.getElementById("stop");
stop.addEventListener("click", stop_timer, false);

var reset = document.getElementById("reset");  
reset.addEventListener("click", reset_timer, false);

function counter() {
    minutes_counter = Math.floor(big_time / 60);
    seconds_counter = big_time - minutes_counter * 60;

    minutes.innerHTML = (minutes_counter < 10 ? '0' : '') + minutes_counter;
    seconds.innerHTML = (seconds_counter < 10 ? '0' : '') + seconds_counter;

    if (big_time == 0) {
        
        if (status === 1) {
            status = 0;
            big_time = 300;
        } else if (status == 0) {
            status = 1;
            big_time = 1499;

            minutes.innerHTML = "25";
            seconds.innerHTML = "00";

            clearInterval(countdownID);
        } else {
            big_time = big_time - 1; 
        }
    }
}

// start timer
function start_timer() {
    countdownID = setInterval("counter()", 10);
}

// stop timer
function stop_timer() {
  clearInterval(countdownID);
}

// reset timer
function reset_timer() {
  big_time = 1499;
}
