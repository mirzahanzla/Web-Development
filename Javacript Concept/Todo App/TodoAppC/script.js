// let a = prompt('Enter Your title')
let note = document.getElementById("note");
let box2 = document.getElementById("box2");
let box1 = document.getElementById("box1");
let btn1 = document.getElementById("btn1");
let box = document.getElementById("box");

btn1.addEventListener("click", (e) => {
  e.preventDefault();
  if (title.value.length == 0) {
    alert("Please enter a Title");
  } else if (note.value.length == 0) {
    alert("Please write some note");
  } else {
    let head = document.createElement("h2");
    let para = document.createElement("p");
    head.innerHTML = title.value;
    para.innerHTML = note.value;
    boxph2.prepend(para);
    boxph2.prepend(head);

    head.addEventListener("click", function () {
      // head.style.textDecoration = 'line-through red 2px'
      head.classList.toggle("strike");
    });
    para.addEventListener("click", () => {
      // para.style.textDecoration = "line-through blue 2.5px"
      para.classList.toggle("strike1");
    });
    head.addEventListener("dblclick", function () {
      head.remove();
    });
    para.addEventListener("dblclick", () => {
      para.remove();
    });
    title.value = "";
    note.value = "";

    // btn2.addEventListener('click', function(e) {
    //     e.preventDefault()
    //     para.innerHTML = ""
    // })
  }
});
btn2.addEventListener("click", function (e) {
  e.preventDefault();
  let a = confirm("Are you really want to delete all the notes?");
  if (a) {
    boxph2.innerHTML = "";
  }
  // else {
  //     head.innerHTML = title.value
  //     para.innerHTML = note.value
  // }
  // para.innerHTML = ""
});
