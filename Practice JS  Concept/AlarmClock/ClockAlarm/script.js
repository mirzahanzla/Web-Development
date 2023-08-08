const content = document.querySelector(".content"),
    selectMenu = document.querySelectorAll("select")

let time, alarmTime, isAlarmSet, ringtone = new Audio("./alarm.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[3].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";
    if (h >= 12) {
        h -= 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m}:${s} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
});

function setAlarm() {
    if (isAlarmSet) {
        alarmTime = "00:00:00 AM"
        ringtone.pause();
        content.classList.remove("disable");
        alarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;
    }

    let givenTime = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value} ${selectMenu[3].value}`;
    if (givenTime.includes("Hour") || givenTime.includes("Minute") || givenTime.includes("Second") || givenTime.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm !");
    }
    alarmTime = givenTime;
    isAlarmSet = true;
    content.classList.add("disable");
    alarmBtn.innerText = "Clear Alarm";
}

alarmBtn.addEventListener("click", setAlarm);