// setInterval(function() {
// let d = new Date();
// console.log("min: " + d.getMinutes());
// console.log(d.getSeconds());
// }, 1000)

let div = document.querySelector('#clock');
let dt = document.querySelector('#date');
let dy = document.querySelector('#day');

let dayArr = ['sunday', 'monday', 'tuesday', 'wednesday', 'thrusday', 'friday', 'saturday'];
setInterval(function() {
  let d = new Date();
  div.innerHTML = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
  dy.innerHTML = dayArr[d.getDay()].toUpperCase();
  dt.innerHTML = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
}, 1000)
