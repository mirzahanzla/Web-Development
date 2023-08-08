setInterval(function () {
  let d = new Date();
  let hrs = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  let Day = new Date().getDay();

  if (hrs >= 13) {
    hrs -= 12;
    meridiem.innerHTML = "PM";
  } else {
    meridiem.innerHTML = "AM";
  }

  if (Day == 1) {
    day.innerHTML = "Monday";
  }

  if (Day == 2) {
    day.innerHTML = "Tuesday";
  }

  if (Day == 3) {
    day.innerHTML = "Wednesday";
  }

  if (Day == 4) {
    day.innerHTML = "Thursday";
  }

  if (Day == 5) {
    day.innerHTML = "Friday";
  }

  if (Day == 6) {
    day.innerHTML = "Saturday";
  }

  if (Day == 7) {
    day.innerHTML = "Sunday";
  }

  hours.innerHTML = hrs + '<p class="time-text">Hours</p>';
  minutes.innerHTML = min + '<p class="time-text">Minutes</p>';
  seconds.innerHTML = sec + '<p class="time-text">Seconds</p>';
}, 1000);
