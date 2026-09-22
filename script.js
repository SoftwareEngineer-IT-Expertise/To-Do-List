let input = document.getElementById("item");
let unOrderList = document.getElementById("to-do-box");

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addToDO(this.value);
    this.value = "";
  }
});

let addToDO = (item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `
        ${item}
        <i class="fa-solid fa-circle-xmark"></i>
    `;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove()
  });
  unOrderList.appendChild(listItem);
};
