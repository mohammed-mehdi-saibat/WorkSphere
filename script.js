"use strict";

// --------------------SIDE BAR MATERIAL--------------
//----BUTTONS
const closeBtn = document.querySelector("#cancel");
const saveBtn = document.querySelector("#save");
const addWorker = document.querySelector(".add-worker");
const addExperience = document.getElementById("add-experience");
const conferenceDoor = document.getElementById("zone-conference");
const receptionDoor = document.getElementById("zone-reception");
const serverDoor = document.getElementById("zone-server");
const securityDoor = document.getElementById("zone-security");
const staffDoor = document.getElementById("zone-staff");
const archivesDoor = document.getElementById("zone-archives");
//----BUTTONS
//======================================================
//----INPUTS
const addWorkerPopupForm = document.getElementById("add-worker-form");
const workerFirstName = document.getElementById("nom");
const workerPhoneNumber = document.getElementById("phone");
const workerLastName = document.getElementById("prenom");
const workerEmail = document.getElementById("email");
const workerProfilePictureUrl = document.getElementById("profile");
const workerExperienceStart = document.getElementById("from");
const workerExperienceEnd = document.getElementById("to");
const workerExperienceRole = document.getElementById("experience-role");
const selectOptions = document.getElementById("roles");
const workerExperience = document.getElementById("experience");
const error = document.querySelector(".error-message");
//----INPUTS
//======================================================
//----MAIN CONTAINERS
const sideBar = document.querySelector(".side-bar");
const worksphere = document.querySelector(".worksphere");
const workersList = document.getElementById("workers-list");
const addWorkerPopup = document.querySelector(".add-worker-popup");
const experiences = document.querySelector(".experiences");
const conferenceZone = document.querySelector(".zone--conference");
const archivesZone = document.querySelector(".zone--archives");
const receptionZone = document.querySelector(".zone--reception");
const staffZone = document.querySelector(".zone--staff");
const serverZone = document.querySelector(".zone--server");
const securityZone = document.querySelector(".zone--security");
const availableWorkersPopup = document.querySelector(".available-workers");
//----MAIN CONTAINERS
const workerProfilePicture = document.querySelector(".profile-picture");
//======================================================
// --------------------SIDE BAR MATERIAL--------------7
//======================================================
//--------------------- REGEX CHECK-----------------
const workerFirstNameRegex = /^[a-zA-Z\s].{3,}$/;
const workerLastNameRegex = /^[a-zA-Z\s].{3,}$/;
const workerExperienceRoleRegex = /^[a-zA-Z\s].{3,}$/;
const workerExperienceRegex = /^[^\s][a-zA-Z0-9\s].{3,}$/;
const workerEmailRegex = /^[^\s@]+@[^\s@]+.[^\s@]$/;
const workerPhoneRegex = /^0[5-6-7]\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/;

//--------------------- REGEX CHECK-----------------
//======================================================
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
//======================================================
// -------------------------STAFF MANIPULATION----------------
function addNewWorker() {
  addWorker.addEventListener("click", () => {
    showAddWorkerModal();
  });
  closeBtn.addEventListener("click", () => {
    hideAddWorkerModal();
  });
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    hideAddWorkerModal();
    addToSideBar();
  });
  addExperience.addEventListener("click", (e) => {
    e.preventDefault();
    addNewExperience();
  });
}

addNewWorker();

function showAddWorkerModal() {
  addWorkerPopup.showModal();
  sideBar.style.filter = "blur(2.5px)";
  worksphere.style.filter = "blur(2.5px)";
}

function hideAddWorkerModal() {
  addWorkerPopup.close();
  sideBar.style.filter = "blur(0)";
  worksphere.style.filter = "blur(0)";
}

addWorkerPopup.addEventListener("click", (e) => {
  if (e.target === addWorkerPopup) {
    addWorkerPopup.close();
    sideBar.style.filter = "blur(0)";
    worksphere.style.filter = "blur(0)";
  }
});

let workers = [];
let itWorkers = [];
let receptionists = [];
let securityAgents = [];
let managers = [];
let nettoyageWorkers = [];

function filterByRole() {
  itWorkers = workers.filter((w) => w.role == "IT");
  receptionists = workers.filter((w) => w.role == "Réceptionnistes");
  securityAgents = workers.filter((w) => w.role == "Agents de sécurité");
  managers = workers.filter((w) => w.role == "Manager");
  nettoyageWorkers = workers.filter((w) => w.role == "Nettoyage");
}

let id = 1;

function addToSideBar() {
  const worker = {
    id: id,
    name: workerFirstName.value,
    lastName: workerLastName.value,
    email: workerEmail.value,
    phone: workerPhoneNumber.value,
    role: selectOptions.value,
    profile: workerProfilePictureUrl.value || "profile-pic.webp",
    experiences: [
      {
        experience: workerExperience.value,
        experienceRole: workerExperienceRole.value,
        from: workerExperienceStart.value,
        to: workerExperienceEnd.value,
      },
    ],
  };
  const newWorker = document.createElement("div");
  newWorker.classList.add("worker");
  newWorker.innerHTML = `
    <div class="profile-picture side-bar-profile-picture"></div>
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
  const newWorkerProfilePic = newWorker.querySelector(
    ".side-bar-profile-picture"
  );
  workerProfilePicture.style.background = `url("${worker.profile}") center/cover no-repeat`;
  newWorkerProfilePic.style.background = `url("${worker.profile}") center/cover no-repeat`;
  workersList.appendChild(newWorker);
  id++;
  workers.push(worker);
  filterByRole();
  logAllWorkers();
  const deleteBtn = newWorker.querySelector("#delete");
  deleteBtn.addEventListener("click", () => {
    workersList.removeChild(newWorker);
    workers = workers.filter((w) => w.id !== worker.id);
    filterByRole();
    logAllWorkers();
  });
}

let newExperiences = [];

function addNewExperience() {
  const newExperience = document.createElement("div");

  newExperience.innerHTML = `
            <div class="experiences-separator"></div>
            <input id="experience" type="text" placeholder="Company:" />
            <small class="error-message"></small>
            <input id="experience-role" type="text" placeholder="role:" />
            <small class="error-message"></small>
            <div class="experience-dates">
              <label for="from">From:</label>
              <input
                type="date"
                name=""
                id="from"
                placeholder="mm/dd/yyyy"
                onfocus="this.type='date'"
                onblur="if(this.value === '') this.type='text'"
              />
              <label for="to">To</label>
              <input type="date" / name="" id="to" placeholder="mm/dd/yyyy"
              onfocus="this.type='date'" onblur="if(this.value === '')
              this.type='text'">
            </div>
            <button class="cancel-experience">Cancel Experience</button>

  `;
  const cancelExperience = newExperience.querySelector(".cancel-experience");
  experiences.appendChild(newExperience);
  newExperiences.push(newExperience);
  cancelExperience.addEventListener("click", (e) => {
    e.preventDefault();
    experiences.removeChild(newExperience);
  });
}

conferenceDoor.addEventListener("click", (e) => {
  e.preventDefault();
  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
  availableWorkersPopup.innerHTML = `
   <h3>CONFERENCE ROOM</h3>
   <p>Available Workers:</p>
  `;
});
receptionDoor.addEventListener("click", (e) => {
  e.preventDefault();
  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
  availableWorkersPopup.innerHTML = `
   <h3>RECEPTION ROOM</h3>
   <p>Available Workers:</p>
  `;
});
serverDoor.addEventListener("click", (e) => {
  e.preventDefault();
  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
  availableWorkersPopup.innerHTML = `
   <h3>SERVER ROOM</h3>
   <p>Available Workers:</p>
  `;
});
securityDoor.addEventListener("click", (e) => {
  e.preventDefault();
  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
  availableWorkersPopup.innerHTML = `
   <h3>SECURITY ROOM</h3>
   <p>Available Workers:</p>
  `;
});
staffDoor.addEventListener("click", (e) => {
  e.preventDefault();
  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
  availableWorkersPopup.innerHTML = `
   <h3>STAFF ROOM</h3>
   <p>Available Workers:</p>
  `;
});
archivesDoor.addEventListener("click", (e) => {
  e.preventDefault();
  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
  availableWorkersPopup.innerHTML = `
   <h3>ARCHIVES ROOM</h3>
   <p>Available Workers:</p>
  `;
});

availableWorkersPopup.addEventListener("click", (e) => {
  if (e.target === availableWorkersPopup) {
    availableWorkersPopup.close();
    sideBar.style.filter = "blur(0)";
    worksphere.style.filter = "blur(0)";
  }
});
// -------------------------STAFF MANIPULATION----------------
//======================================================

function logAllWorkers() {
  // console.log("---- MASTER ARRAY ----");
  // console.log(workers);
  // console.log("---- IT Workers ----");
  // console.log(itWorkers);
  // console.log("---- Receptionists ----");
  // console.log(receptionists);
  // console.log("---- Security Agents ----");
  // console.log(securityAgents);
  // console.log("---- Managers ----");
  // console.log(managers);
  // console.log("---- Nettoyage Workers ----");
  // console.log(nettoyageWorkers);
}
