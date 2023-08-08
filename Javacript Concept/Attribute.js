let first = document.getElementById("first");
let a = first.getAttribute("class")
// console.log(a)
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// first.setAttribute("hidden", "true")
// first.setAttribute("class", "true sachin")
// first.removeAttribute("class")
// console.log(first.attributes)
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)


let a1 = document.getElementsByTagName('div')[0]

// a.innerHTML = a.innerHTML + '<h1>Hello World!</h1>';

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';
// a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
// a.replaceWith(div);











// first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>');
// first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>');
// first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>');
// first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>');
first.remove()



first.className = "text-black red"
first.classList.add("red")
first.classList.remove("red")
first.classList.contains("red")
first.classList.toggle("red")





let card_title = document.querySelector(".card-title");
card_title.style.color = "blue";


let card_text = document.querySelector(".card-text");


let colorRed;
let colorBlue;

let colorChange = () => {

  colorRed = setInterval(function() {
    card_title.style.color = "red";
    card_text.style.color = "blue";

  }, 1000);

  colorBlue = setInterval(function() {
    card_title.style.color = "blue";
    card_text.style.color = "red";

  }, 2000);


}

let colorChangeStop = () => {
  clearInterval(colorRed);
  clearInterval(colorBlue);

}









