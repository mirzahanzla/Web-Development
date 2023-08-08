const ItemsArray = localStorage.getItem("Items")
  ? JSON.parse(localStorage.getItem("Items"))
  : [];
console.log(ItemsArray);
document.querySelector("#add").addEventListener("click", () => {
  const item = document.querySelector("#desc");
  Createtodo(item);
});
function Displaytodo() {
  let items = "";
  for (let i = 0; i < ItemsArray.length; i++) {
    items += `
  		  <div class='contents'>
		  <h3>Task ${i + 1}</h3>
		  <button type="button" class="btn btn-danger btn-delete">Delete</button>
		  <p>${ItemsArray[i]}</p>
		  </div>
        `;
  }
  document.querySelector("#todos").innerHTML = items;
  activatedeleteListner();
}
function activatedeleteListner() {
  let deleteBtn = document.querySelectorAll(".btn-delete");
  deleteBtn.forEach((value, i) => {
    value.addEventListener("click", () => {
      deletetodo(i);
    });
  });
}
function deletetodo(i) {
  ItemsArray.splice(i, 1);
  localStorage.setItem("Items", JSON.stringify(ItemsArray));
  location.reload();
}
function Createtodo(item) {
  ItemsArray.push(item.value);
  localStorage.setItem("Items", JSON.stringify(ItemsArray));
  location.reload();
}
window.onload = () => {
  Displaytodo();
};
