let clock = new Date();
let hr = clock.getHours();
let min = clock.getMinutes();
let sec = clock.getSeconds();

let time = hr + ":" + min + ":" + sec;
document.getElementById("clock").innerText = time;

