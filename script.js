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
const closeProfileBtn = document.querySelector(".close-profile");
//----BUTTONS
//======================================================
//----INPUTS
const addWorkerPopupForm = document.getElementById("add-worker-form");
const workerFirstName = document.getElementById("nom");
const workerPhoneNumber = document.getElementById("phone");
const workerLastName = document.getElementById("prenom");
const workerEmail = document.getElementById("email");
const workerProfilePictureUrl = document.getElementById("profile");
const workerExperienceEnd = document.getElementById("to");
const workerExperienceRole = document.getElementById("experience-role");
const selectOptions = document.getElementById("roles");
const workerExperience = document.getElementById("experience");
const error = document.querySelector(".error-message");
// --------------ERROR MESSAGES CONTAINERS
const firstNameError = workerFirstName.nextElementSibling;
const lastNameError = workerLastName.nextElementSibling;
const emailError = workerEmail.nextElementSibling;
const phoneError = workerPhoneNumber.nextElementSibling;
const profileError = workerProfilePictureUrl.nextElementSibling;
const experienceError = workerExperience.nextElementSibling;
const experienceRoleError = workerExperienceRole.nextElementSibling;
// --------------ERROR MESSAGES CONTAINERS
//----INPUTS
//======================================================
//----MAIN CONTAINERS
const sideBar = document.querySelector(".side-bar");
const worksphere = document.querySelector(".worksphere");
const workersList = document.getElementById("workers-list");
const addWorkerPopup = document.querySelector(".add-worker-popup");
const experiences = document.querySelector(".experiences");
const availableWorkersPopup = document.querySelector(".available-workers");
const workerProfilePicture = document.querySelector(".profile-picture");
const initialExperience = document.querySelector(".initial-experience");
const workerProfilePopup = document.querySelector(".worker-profile-popup");
//======================================================
// --------------------SIDE BAR MATERIAL--------------7
//======================================================
//--------------------- REGEX CHECK-----------------
const workerFirstNameRegex = /^[a-zA-Z\s]{4,}$/;
const workerLastNameRegex = /^[a-zA-Z\s]{4,}$/;
const workerExperienceRoleRegex = /^[a-zA-Z\s]{4,}$/;
const workerExperienceRegex = /^[a-zA-Z\s]{3,}$/;
const workerEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const workerPhoneRegex = /^0[5-6-7]\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/;

function validateFirstName() {
  if (!workerFirstName.value.match(workerFirstNameRegex)) {
    firstNameError.textContent = "At least 4 long, characters only!";
    return false;
  } else {
    firstNameError.textContent = "";
    return true;
  }
}
function validateLastName() {
  if (!workerLastName.value.match(workerLastNameRegex)) {
    lastNameError.textContent = "At least 4 characters, letters only!";
    return false;
  } else {
    lastNameError.textContent = "";
    return true;
  }
}
function validateEmail() {
  if (!workerEmail.value.match(workerEmailRegex)) {
    emailError.textContent = "Invalid email form!";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}
function validatePhone() {
  if (!workerPhoneNumber.value.match(workerPhoneRegex)) {
    phoneError.textContent = "Invalid phone number!";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}
function validateExperience() {
  if (!workerExperience.value.match(workerExperienceRegex)) {
    experienceError.textContent = "Invalid company name!";
    return false;
  } else {
    experienceError.textContent = "";
    return true;
  }
}
function validateExperienceRole() {
  if (!workerExperienceRole.value.match(workerExperienceRoleRegex)) {
    experienceRoleError.textContent = "Invalid role name!";
    return false;
  } else {
    experienceRoleError.textContent = "";
    return true;
  }
}

function validateRoleSelect() {
  if (!selectOptions.value) {
    selectOptions.style.border = "3px solid red";
    return false;
  } else {
    selectOptions.style.border = "";
    return true;
  }
}

function validateAllExperiences() {
  let allValid = true;

  newExperiences.forEach((exp) => {
    const companyInput = exp.querySelector(".experience-input");
    const roleInput = exp.querySelector(".experience-role-input");
    const fromInput = exp.querySelector(".experience-from");
    const toInput = exp.querySelector(".experience-to");

    const companyError = companyInput.nextElementSibling;
    const roleError = roleInput.nextElementSibling;
    const fromError = fromInput.nextElementSibling;
    const toError = toInput.nextElementSibling;

    if (!companyInput.value.match(workerExperienceRegex)) {
      companyError.textContent = "Invalid company name!";
      allValid = false;
    } else companyError.textContent = "";

    if (!roleInput.value.match(workerExperienceRoleRegex)) {
      roleError.textContent = "Invalid role input!";
      allValid = false;
    } else roleError.textContent = "";

    if (!fromInput.value) {
      fromError.textContent = "Start date required!";
      allValid = false;
    } else fromError.textContent = "";

    if (!toInput.value) {
      toError.textContent = "End date required!";
      allValid = false;
    } else toError.textContent = "";

    if (fromInput.value && toInput.value) {
      const fromDate = new Date(fromInput.value);
      const toDate = new Date(toInput.value);

      if (toDate < fromDate) {
        toError.textContent = "End date must be after start date!";
        allValid = false;
      } else {
        toError.textContent = "";
      }
    }
  });

  return allValid;
}

workerFirstName.addEventListener("input", validateFirstName);
workerLastName.addEventListener("input", validateLastName);
workerExperience.addEventListener("input", validateExperience);
workerEmail.addEventListener("input", validateEmail);
workerPhoneNumber.addEventListener("input", validatePhone);
workerExperienceRole.addEventListener("input", validateExperienceRole);
selectOptions.addEventListener("change", validateRoleSelect);

const initialFrom = document.querySelector("#from");
const initialTo = document.querySelector("#to");
initialFrom.addEventListener("input", checkAllValid);
initialTo.addEventListener("input", checkAllValid);

workerProfilePictureUrl.addEventListener("input", () => {
  const url = workerProfilePictureUrl.value || "profile-pic.webp";
  workerProfilePicture.style.background = `url("${url}") center/cover no-repeat`;
});

function checkAllValid() {
  const allValid =
    validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validatePhone() &&
    validateExperience() &&
    validateExperienceRole() &&
    validateRoleSelect() &&
    validateAllExperiences();

  saveBtn.disabled = !allValid;
  return allValid;
}

workerFirstName.addEventListener("input", checkAllValid);
workerLastName.addEventListener("input", checkAllValid);
workerEmail.addEventListener("input", checkAllValid);
workerPhoneNumber.addEventListener("input", checkAllValid);
workerExperience.addEventListener("input", checkAllValid);
workerExperienceRole.addEventListener("input", checkAllValid);
selectOptions.addEventListener("change", checkAllValid);

//======================================================
// -----------------------ROLES SELECTION-------------------
const roles = [
  "Réceptionnistes",
  "IT",
  "Agents de sécurité",
  "Manager",
  "Nettoyage",
];

roles.forEach((role) => {
  const option = document.createElement("option");
  option.textContent = role;
  selectOptions.appendChild(option);
});
// -----------------------ROLES SELECTION-------------------
//======================================================
// -------------------------STAFF MANIPULATION----------------
function addNewWorker() {
  addWorker.addEventListener("click", showAddWorkerModal);
  closeBtn.addEventListener("click", hideAddWorkerModal);
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!checkAllValid() || !validateAllExperiences()) return;
    hideAddWorkerModal();
    addToSideBar();
  });
  addExperience.addEventListener("click", addNewExperience);
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
  if (e.target === addWorkerPopup) hideAddWorkerModal();
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
    experiences: newExperiences.map((exp) => ({
      experience: exp.querySelector(".experience-input").value,
      experienceRole: exp.querySelector(".experience-role-input").value,
      from: exp.querySelector(".experience-from").value,
      to: exp.querySelector(".experience-to").value,
    })),
  };

  const newWorker = document.createElement("div");
  newWorker.classList.add("worker");
  newWorker.innerHTML = `
    <div class="profile-picture side-bar-profile-picture"></div>
    <div class="worker-info">
      <h5 class="name">${worker.name}</h5>
      <small style="color: red; font-size: 12px" class="role">${worker.role}</small>
    </div>
    <img
      style="width: 14px; position: absolute; right: 5px; bottom: 8px; cursor: pointer;"
      src="delete.png"
      alt="delete"
      class="delete-worker"
    />
  `;

  const newWorkerProfilePic = newWorker.querySelector(
    ".side-bar-profile-picture"
  );
  newWorkerProfilePic.style.background = `url("${worker.profile}") center/cover no-repeat`;

  workersList.appendChild(newWorker);
  id++;
  workers.push(worker);
  filterByRole();

  newWorker.querySelector(".delete-worker").addEventListener("click", () => {
    workersList.removeChild(newWorker);
    workers = workers.filter((w) => w.id !== worker.id);
    filterByRole();
  });

  newWorker.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-worker")) return;
    workerProfilePopup.innerHTML = `
    <button class="close-profile">X</button>
    <div class="profile-header">
      <div class="profile-picture-large" style="background: url('${
        worker.profile
      }') center/cover no-repeat;"></div>
      <h2>${worker.name} ${worker.lastName}</h2>
      <p class="worker-role">${worker.role}</p>
    </div>
    <div class="profile-details">
      <p><strong>Email:</strong> ${worker.email}</p>
      <p><strong>Phone:</strong> ${worker.phone}</p>
    </div>
    <div class="profile-experiences">
      <h3>Professional Experiences:</h3>
      ${worker.experiences
        .map(
          (exp) => `
        <div class="experience-item">
          <p><strong>${exp.experienceRole}</strong> at <strong>${exp.experience}</strong></p>
          <p><small>From: ${exp.from} - To: ${exp.to}</small></p>
        </div>
      `
        )
        .join("")}
    </div>
  `;

    workerProfilePopup.showModal();
    sideBar.style.filter = "blur(2.5px)";
    worksphere.style.filter = "blur(2.5px)";

    workerProfilePopup
      .querySelector(".close-profile")
      .addEventListener("click", () => {
        workerProfilePopup.close();
        sideBar.style.filter = "blur(0)";
        worksphere.style.filter = "blur(0)";
      });
  });
}

let newExperiences = [initialExperience];

function addNewExperience() {
  const newExperience = document.createElement("div");

  newExperience.innerHTML = `
    <div class="experiences-separator"></div>
    <input class="experience-input" type="text" placeholder="Company:" />
    <small class="error-message"></small>
    <input class="experience-role-input" type="text" placeholder="Role:" />
    <small class="error-message"></small>
    <div class="experience-dates">
      <label>From:</label>
      <input class="experience-from" type="date" onfocus="this.type='date'" onblur="if(this.value==='')this.type='text'" />
      <small class="error-message"></small>
      <label>To:</label>
      <input class="experience-to" type="date" onfocus="this.type='date'" onblur="if(this.value==='')this.type='text'" />
      <small class="error-message"></small>
    </div>
    <button class="cancel-experience" type="button">Cancel Experience</button>
  `;

  experiences.appendChild(newExperience);
  newExperiences.push(newExperience);

  const companyInput = newExperience.querySelector(".experience-input");
  const roleInput = newExperience.querySelector(".experience-role-input");
  const fromInput = newExperience.querySelector(".experience-from");
  const toInput = newExperience.querySelector(".experience-to");

  companyInput.addEventListener("input", checkAllValid);
  roleInput.addEventListener("input", checkAllValid);
  fromInput.addEventListener("input", checkAllValid);
  toInput.addEventListener("input", checkAllValid);

  newExperience
    .querySelector(".cancel-experience")
    .addEventListener("click", () => {
      experiences.removeChild(newExperience);
      newExperiences = newExperiences.filter((exp) => exp !== newExperience);
      checkAllValid();
    });
}

//======================================================
// ---------KNOCK-ON-DOOR LISTENERS-------------
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
// ---------KNOCK-ON-DOOR LISTENERS-------------
//======================================================

//-----------------------HIDE PROFILE-----------------
workerProfilePopup.addEventListener("click", (e) => {
  if (e.target === workerProfilePopup) {
    workerProfilePopup.close();
    sideBar.style.filter = "blur(0)";
    worksphere.style.filter = "blur(0)";
  }
});
