let Date_;
let hours_;
let min_;
let sec_;
let am_pm;

let out_hour = document.getElementById('hour')
let out_min = document.getElementById('min')
let out_sec = document.getElementById('sec')
let out_am_pm = document.getElementById('am_pm')

setInterval(function() {
  Date_ = new Date()
  hours_ = Date_.getHours()
  if (hours_ > 12) {
    hours_ = Date_.getHours() - 12
    am_pm = "PM"
  }
  else {
    am_pm = "AM"
  }
  min_ = Date_.getMinutes()
  sec_ = Date_.getSeconds()
  out_hour.innerHTML = hours_
  out_min.innerHTML = min_
  out_sec.innerHTML = sec_
  out_am_pm.innerHTML = am_pm
}, 1000)