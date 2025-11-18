"use strict";

// --------------------SIDE BAR MATERIALS--------------
const closeBtn = document.querySelector("#cancel");
const saveBtn = document.querySelector("#save");
const sideBar = document.querySelector(".side-bar");
const worksphere = document.querySelector(".worksphere");
const addWorker = document.querySelector(".add-worker");
const addWorkerPopup = document.querySelector(".add-worker-popup");
const workersList = document.getElementById("workers-list");
const workerFirstName = document.getElementById("nom");
const workerLastName = document.getElementById("prenom");
const workerEmail = document.getElementById("email");
const workerPhoneNumber = document.getElementById("phone");
const selectOptions = document.getElementById("roles");
const deleteBtn = document.getElementById("delete");
// --------------------SIDE BAR MATERIALS--------------

// -----------------------ROLES SELECTION-------------------
const roles = [
  "Réceptionnistes",
  "IT",
  "Agents de sécurité",
  "Manager",
  "Nettoyage",
];
function rolesFill() {
  roles.forEach((role) => {
    const option = document.createElement("option");
    option.textContent = role;
    selectOptions.appendChild(option);
  });
}
rolesFill();
// -----------------------ROLES SELECTION-------------------

// -------------------------STAFF MANIPULATION----------------
const workers = [];

function addNewWorker() {
  addWorker.addEventListener("click", () => {
    showAddWorkerModal();
  });
  closeBtn.addEventListener("click", () => {
    hideAddWorkerModal();
  });
  saveBtn.addEventListener("click", () => {
    addWorkerData();
  });
}

addNewWorker();

function showAddWorkerModal() {
  addWorkerPopup.showModal();
  sideBar.style.filter = "blur(2.2px)";
  worksphere.style.filter = "blur(2.2px)";
}

function hideAddWorkerModal() {
  addWorkerPopup.close();
  sideBar.style.filter = "blur(0)";
  worksphere.style.filter = "blur(0)";
}

function addWorkerData() {
  const worker = {
    name: workerFirstName.value,
    role: selectOptions.value,
    profile: "p",
  };
  const newWorker = document.createElement("div");
  newWorker.classList.add("worker");
  newWorker.innerHTML = `
    <div class="profile-picture">${worker.profile}</div>
    <div class="worker-info">
    <h5 class="name">${worker.name}</h5>
    <small style="color: red; font-size: 12px" class="role"
    >${worker.role}</small
    >
    </div>
    <img
    style="
    width: 14px;
    position: absolute;
    right: 5px;
    bottom: 8px;
    cursor: pointer;
    "
    src="delete.png"
    alt="delete"
    id="delete"
    />
    `;
  workers.push(worker);
  workersList.appendChild(newWorker);
  hideAddWorkerModal();
}
console.log(workers);

// -------------------------STAFF MANIPULATION----------------
