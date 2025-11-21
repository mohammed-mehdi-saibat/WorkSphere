"use strict";

// --------------------SIDE BAR MATERIAL--------------
//----BUTTONS
const closeBtn = document.querySelector("#cancel");
const saveBtn = document.querySelector("#save");
const deleteBtn = document.getElementById("delete");
const addWorker = document.querySelector(".add-worker");
const addExperience = document.getElementById("add-experience");
const cancelExperience = document.querySelector(".cancel-experience");
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
const workerPhoneRegex = /^0[6-7]\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/;

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
  saveBtn.addEventListener("click", () => {
    addWorkerData();
  });
  addExperience.addEventListener("click", (e) => {
    e.preventDefault();
    addNewExperience();
    cancelExperience.classList.toggle("showCancelButton");
    // console.log("Hey there I am the cancel button");
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

const workers = [];

function addWorkerData() {
  const worker = {
    name: workerFirstName.value,
    lastName: workerLastName,
    email: workerEmail.value,
    phone: workerPhoneNumber.value,
    role: selectOptions.value,
    profile: workerProfilePictureUrl.value,
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
    <div id="profile-picture" class="profile-picture"></div>
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
  workerProfilePicture.style.background = `url("${worker.profile}") center/cover no-repeat`;

  workersList.appendChild(newWorker);
  workers.push(worker);
  console.log(workers);
  hideAddWorkerModal();
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
  `;

  newExperiences.push(newExperience);
  console.log("=======================");
  console.log("NEW EXPERIENCE WAS ADDED");
  console.log(newExperiences);
  console.log(`LENGTH: ${newExperiences.length}`);
  console.log("=======================");

  // experiences.appendChild(newExperience);
  // console.log("Yo I'm working!");
  // cancelExperience.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   experiences.removeChild(newExperience);
  // });
}
// -------------------------STAFF MANIPULATION----------------
//======================================================
