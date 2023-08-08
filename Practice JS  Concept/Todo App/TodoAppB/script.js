let createTodobtn = document.getElementById("createTodobtn");
let viewAllTodo = document.getElementById("viewAllTodo");
let todoTextTitle = document.getElementById("todoTextTitle");
let todoText = document.getElementById("todoText");
let savebtn = document.getElementById("savebtn");
let todo = document.getElementById("todo");
let todoTextPara = document.getElementById("todoTextPara");
let todoList = document.getElementById("todoList");
let count = 0;

function translate() {
  document
    .getElementById("createTodoText")
    .classList.toggle("textBoxTransition");
}

createTodobtn.addEventListener("click", () => {
  translate();
  createTodobtn.style.display = "none";
  viewAllTodo.style.display = "none";
  todoList.style.display = "none";
});

const runProgram = () => {
  localStorage.setItem(`${todoTextTitle.value}`, `${todoTextPara.value}`);
  console.log(localStorage.getItem);

  let todoCard = document.createElement("div");
  todoCard.classList.add(
    "d-flex",
    "border-bottom",
    "w-100",
    "align-items-center",
    "p-1"
  );
  todo.prepend(todoCard);

  let divForH1Para = document.createElement("div");
  divForH1Para.classList.add("ds");
  todoCard.prepend(divForH1Para);

  let divH1 = document.createElement("h4"); /*CREATED H1 IN todoCard */
  divH1.classList.add("text-start", "text-break", "m-0", "ps-1", "pb-1");
  divForH1Para.appendChild(divH1);
  divH1.innerHTML = todoTextTitle.value;

  let divPara = document.createElement("p"); /*CREATED PARA IN todoCard */
  divPara.classList.add("text-start", "text-break", "m-0", "ps-1", "pb-1");
  divForH1Para.appendChild(divPara);
  divPara.innerHTML = todoTextPara.value;

  let deletebtn =
    document.createElement("button"); /*CREATED DELETE BOTTON IN todoCard */
  deletebtn.innerHTML = "Delete";
  deletebtn.classList.add(
    "btn",
    "delete",
    "btn-danger",
    "btn-sm",
    "ms-auto",
    "me-2"
  );
  todoCard.appendChild(deletebtn);

  count++;

  deletebtn.addEventListener("click", () => {
    deleteconfirm = confirm("Want to Delete this Todo?");
    if (deleteconfirm) {
      todoCard.innerHTML = "";
      todoCard.classList.remove(
        "rounded",
        "border-bottom",
        "w-100",
        "mb-1",
        "align-items-center",
        "p-1"
      );
      alert("Todo Deleted Successfully");
      count--;
      if (count === 0) {
        viewAllTodo.innerHTML = `View All Todo's`;
        todo.classList.remove("todoListTransition");
      }
    }
  });
};
const userClickedSave = () => {
  /* CLICKED ON SAVE*/

  if (todoTextTitle.value.length < 1 && todoTextPara.value.length < 1) {
    alert("Todo is Empty");
  } else {
    runProgram();
    alert("Todo Saved Successfully!");
    todoTextTitle.value = "";
    todoTextPara.value = "";
    translate();
    setTimeout(() => {
      createTodobtn.style.display = "block";
      viewAllTodo.style.display = "block";
      todoList.style.display = "block";
    }, 200);
  }
};
savebtn.addEventListener("click", userClickedSave);

crossbtn.addEventListener("click", () => {
  //Click on Cross button inputtodo
  if (todoTextTitle.value.length >= 1) {
    let confirmclick = confirm("Are you Sure, Your todo will not be saved");
    if (confirmclick == true) {
      translate();
      todoTextTitle.value = "";
      todoTextPara.value = "";
      setTimeout(() => {
        createTodobtn.style.display = "block";
        viewAllTodo.style.display = "block";
        todoList.style.display = "block";
      }, 200);
    }
  } else {
    translate();
    todoTextTitle.value = "";
    todoTextPara.value = "";
    setTimeout(() => {
      createTodobtn.style.display = "block";
      viewAllTodo.style.display = "block";
      todoList.style.display = "block";
    }, 200);
  }
});

viewAllTodo.addEventListener("click", () => {
  if (count === 0) {
    alert("List is Empty");
    todo.classList.remove("todoListTransition");
  } else {
    todo.classList.toggle("todoListTransition");
    if (todo.classList.contains("todoListTransition")) {
      viewAllTodo.innerHTML = `<i id="crossbtnList"
        class="pe-auto fa-solid fa-xmark"></i>`;
      viewAllTodo.blur();
    } else {
      viewAllTodo.innerHTML = `View All Todo's`;
      viewAllTodo.blur();
    }
  }
});
