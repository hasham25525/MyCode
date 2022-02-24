function MyCLock() {
    let clock = new Date();
    let hr = clock.getHours();
    let min = clock.getMinutes();
    let sec = clock.getSeconds();
    let a = "AM";

    if (hr < 10) {
        hr = "0" + hr;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }


    //AM, PM
    if (hr == 0) {
        hr = 12;
    }
    if (hr > 12) {
        hr = hr - 12;
        a = "PM";
    }


    let time = hr + ":" + min + ":" + sec + " " + a;
    document.getElementById("clock").innerText = time;
    setTimeout(MyCLock, 1000);
}

MyCLock();
