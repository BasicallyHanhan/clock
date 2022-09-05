setInterval(() => {
  const date = new Date();

  const hr  = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  // converting current time

  const hr_rotation  = 30 * hr + min / 2;
  const min_rotation = 6 * min;
  const sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

// ------------------------------------------------------STOPWATCH SECTION-------------------------------------------

let SECONDS = 0;
let MINUTES = 0;
let HOURS = 0;

// These are just some extra zeros :")

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;


function stopwatch () {
  SECONDS++;

  if (SECONDS / 60 === 1) {
    SECONDS = 0;
    MINUTES++;

    if (MINUTES / 60 === 1) {
      MINUTES = 0;
      HOURS++;
    }
  }

  // The code below adds an extra 0 if the current number is a single digit number, to make it look nicer basically.
  // toString syntax turns the number into a string / a text.

  if (SECONDS < 10) {
    displaySeconds = "0" + SECONDS.toString();
  } else {
    displaySeconds = SECONDS;
  }

  if (MINUTES < 10) {
    displayMinutes = "0" + MINUTES.toString();
  } else {
    displayMinutes = MINUTES;
  }

  if (HOURS < 10) {
    displayHours = "0" + HOURS.toString();
  } else {
    displayHours = HOURS;
  }

  document.getElementById("display").innerHTML = `${displayHours} : ${displayMinutes} : ${displaySeconds}`;
}


// here we made a variable to hold the setInterval() function, and a varible to hold stopwatch status.

let interval   = null;
let showStatus = "stopped";

// making the buttons functional. this starts/stops the stopwatch by calling the setInerval() function:

function startstop() {
  if (showStatus === "stopped") {
    // setInterval is like a loop but in a delay. it loops the stopwach function every 1000 milliseconds.
    interval = window.setInterval(stopwatch, 1000);
    document.getElementById("begin").innerHTML = "stop";
    showStatus = "started";
  } else {
    // clearInterval STOPS the loop all together. here i stopped the interval variable that I created.
    window.clearInterval(interval);
    document.getElementById("begin").innerHTML = "start";
    showStatus = "stopped";
  }
}

function reset() {
  window.clearInterval(interval);

  HOURS = MINUTES = SECONDS = 0;

  document.getElementById("display").innerHTML = "00 : 00 : 00";
  document.getElementById("begin").innerHTML = "stop";
}


//------------------------------------------------------------------------------------------------------------------

// const hour = document.querySelector(".hour");
// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");

// function setDate () {
//     const date = new Date();

//     const sec = date.getSeconds();
//     const secDegree = ((sec / 60) * 360) + 90;

//     second.style.transform = `rotate(${secDegree}deg)`;

//     const min = date.getMinutes();

//     const minDegree = ((min / 60) * 360) + ((sec / 60)*6) + 90;

//     minute.style.transform = `rotate(${minDegree}deg)`;

//     const hr = date.getHours();
//     const hrDegree = ((hr / 12) * 360) + (( min/60 )*30) + 90;

//     hour.style.transform = `rotate(${hrDegree}deg)`;
// }

// setInterval(setDate, 1000);

// setDate();
