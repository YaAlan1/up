let arr = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "age": 28
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "age": 34
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "age": 22
  },
  {
    "id": 4,
    "name": "Diana King",
    "age": 40
  },
  {
    "id": 5,
    "name": "Ethan Lee",
    "age": 27
  },
  {
    "id": 6,
    "name": "Fiona Adams",
    "age": 33
  },
  {
    "id": 7,
    "name": "George Harris",
    "age": 25
  },
]


const date = new Date().getFullYear();
let box = document.querySelector(".container");


let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let modal = document.querySelector(".modal")
const closeModalBtn = document.querySelector('[data-close]');
const closeModal = () => {
  modal.style.display = 'none';
};


let trHeader = document.createElement("tr");
let thId = document.createElement("th");
thId.textContent = "No";
let thName = document.createElement("th");
thName.textContent = "Name";
let thAge = document.createElement("th");
thAge.textContent = "Age";
let thAction = document.createElement("th");
thAction.textContent = "Action";

trHeader.append(thId, thName, thAge, thAction);
thead.append(trHeader);




let form = document.forms.addUser

form.onsubmit = (e) => {
  e.preventDefault()

  let fn = new FormData(form)

  let user = {
    id: arr.length + 1,
    name: fn.get("name"),
    age: +fn.get("age")
  }

  arr.push(user)

  user.age = +user.age
  console.log(arr);

  reloadTable()
}


function reloadTable() {
  
  tbody.innerHTML = ""

for (let item of arr) {
  let tr = document.createElement("tr");

  let tdId = document.createElement("td");
  tdId.textContent = item.id;

  let tdName = document.createElement("td");
  tdName.textContent = item.name;

  let tdAge = document.createElement("td");
  tdAge.textContent = item.age;

  let tdAction = document.createElement("td");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  let editButton = document.createElement("button");
  editButton.textContent = "Edit";

  tdAction.append(deleteButton, editButton);
  tr.append(tdId, tdName, tdAge, tdAction);
  tbody.append(tr);
  table.append(thead, tbody);
  box.append(table);

  deleteButton.onclick = () => {

    arr.splice(arr.indexOf(item), 1)
    reloadTable()
  }
  
  editButton.onclick = () => {
    modal.style.display = "block"
    

    document.getElementById("nameInput").value = item.name;
    document.getElementById("ageInput").value = item.age;

    const saveBtn = document.querySelector(".modal .btn");
    saveBtn.onclick = (e) => {
      e.preventDefault()
      item.name = document.getElementById("nameInput").value;
      item.age = +document.getElementById("ageInput").value;
      reloadTable();
      closeModal();
    };

  }
  closeModalBtn.addEventListener('click', closeModal)

}
}
reloadTable()