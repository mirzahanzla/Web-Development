let curTime = document.querySelector(".timeContainer h1");
let curDate = document.querySelector(".timeContainer h2");
let setAlarmBtn = document.querySelector("#setAlarmBtn");
let setAlarmAt = document.querySelector("#setAlarmAt");
let audio = new Audio("alarm.mp3");

setInterval(function () {
  let currentDate = new Date();
  curTime.innerText = currentDate.toLocaleTimeString();
  curDate.innerText = currentDate.toDateString();
}, 1000);

setAlarmBtn.addEventListener("click", function () {
  let alarmTimeAt = setAlarmAt.value;
  alarmTimeAt = alarmTimeAt.split(":");
  console.log(alarmTimeAt);
  let currentDate = new Date();
  let hour = alarmTimeAt[0] - currentDate.getHours();
  let minute = alarmTimeAt[1] - currentDate.getMinutes();
  let secondsRem = (hour * 60 + minute * 1) * 60 - currentDate.getSeconds();
  setTimeout(function () {
    let interval = setTimeout(function () {
      audio.play();
    }, 0);
    setTimeout(function () {
      clearTimeout(interval);
    }, 10000);
  }, secondsRem * 1000);
});
