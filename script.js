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
const initialWorker = document.querySelector(".initial-worker");
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

//----------------Workers to start with
workers = [
  {
    id: 1,
    name: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@company.com",
    phone: "0612345678",
    role: "Réceptionnistes",
    profile: "https://randomuser.me/api/portraits/women/1.jpg",
    assignedZone: null,
    experiences: [
      {
        experience: "Tech Corp",
        experienceRole: "Receptionist",
        from: "2020-01-15",
        to: "2022-12-31",
      },
    ],
  },
  {
    id: 2,
    name: "Bob",
    lastName: "Smith",
    email: "bob.smith@company.com",
    phone: "0623456789",
    role: "IT",
    profile: "https://randomuser.me/api/portraits/men/2.jpg",
    assignedZone: null,
    experiences: [
      {
        experience: "Digital Solutions",
        experienceRole: "System Admin",
        from: "2019-03-10",
        to: "2023-06-20",
      },
    ],
  },
  {
    id: 3,
    name: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@company.com",
    phone: "0634567890",
    role: "Agents de sécurité",
    profile: "https://randomuser.me/api/portraits/men/3.jpg",
    assignedZone: null,
    experiences: [
      {
        experience: "SecureGuard Inc",
        experienceRole: "Security Officer",
        from: "2018-07-01",
        to: "2023-09-15",
      },
    ],
  },
  {
    id: 4,
    name: "Diana",
    lastName: "Martinez",
    email: "diana.martinez@company.com",
    phone: "0645678901",
    role: "Manager",
    profile: "https://randomuser.me/api/portraits/women/4.jpg",
    assignedZone: null,
    experiences: [
      {
        experience: "Business Leaders",
        experienceRole: "Team Manager",
        from: "2017-02-20",
        to: "2023-11-30",
      },
      {
        experience: "Startup Hub",
        experienceRole: "Project Lead",
        from: "2015-05-10",
        to: "2016-12-15",
      },
    ],
  },
  {
    id: 5,
    name: "Emma",
    lastName: "Wilson",
    email: "emma.wilson@company.com",
    phone: "0656789012",
    role: "Nettoyage",
    profile: "https://randomuser.me/api/portraits/women/5.jpg",
    assignedZone: null,
    experiences: [
      {
        experience: "Clean Pro Services",
        experienceRole: "Cleaning Specialist",
        from: "2021-01-05",
        to: "2023-10-10",
      },
    ],
  },
  {
    id: 6,
    name: "Frank",
    lastName: "Davis",
    email: "frank.davis@company.com",
    phone: "0667890123",
    role: "IT",
    profile: "https://randomuser.me/api/portraits/men/6.jpg",
    assignedZone: null,
    experiences: [
      {
        experience: "Code Masters",
        experienceRole: "Network Engineer",
        from: "2020-06-15",
        to: "2023-08-25",
      },
    ],
  },
  {
    id: 7,
    name: "Grace",
    lastName: "Lee",
    email: "grace.lee@company.com",
    phone: "0678901234",
    role: "Réceptionnistes",
    profile: "https://randomuser.me/api/portraits/women/7.jpg",
    assignedZone: null,
    experiences: [
      {
        experience: "Hospitality Plus",
        experienceRole: "Front Desk",
        from: "2019-09-01",
        to: "2023-07-31",
      },
    ],
  },
  {
    id: 8,
    name: "Henry",
    lastName: "Taylor",
    email: "henry.taylor@company.com",
    phone: "0689012345",
    role: "Agents de sécurité",
    profile: "https://randomuser.me/api/portraits/men/20.jpg",
    assignedZone: null,
    experiences: [
      {
        experience: "SafeWatch Security",
        experienceRole: "Security Guard",
        from: "2020-11-20",
        to: "2023-12-01",
      },
    ],
  },
];

//---------------------------------Zone rules-----------------
const zoneRules = {
  conference: ["all"],
  reception: ["Réceptionnistes", "Manager"],
  server: ["IT", "Manager"],
  security: ["Agents de sécurité", "Manager"],
  staff: ["all"],
  archives: ["Réceptionnistes", "IT", "Agents de sécurité", "Manager"],
};

function getEligibleWorkers(zoneName) {
  const allowedRoles = zoneRules[zoneName];

  return workers.filter(
    (worker) =>
      worker.assignedZone === null &&
      (allowedRoles.includes("all") || allowedRoles.includes(worker.role))
  );
}

function assignWorkerToZone(worker, zoneName) {
  worker.assignedZone = zoneName;

  const sidebarWorker = Array.from(workersList.children).find(
    (card) => card.querySelector(".name").textContent === worker.name
  );

  if (sidebarWorker) workersList.removeChild(sidebarWorker);

  const zoneContainer = document.querySelector(`.zone--${zoneName} .workers`);

  const workerCard = document.createElement("div");
  workerCard.classList.add("zone-worker");
  workerCard.innerHTML = `
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
    <div style="background: url('${worker.profile}') center/cover no-repeat; width: 30px; height: 30px; border-radius: 50%;"></div>
    <p style="font-size: 10px; background-color: white;">${worker.name}</p>
    <button style="font-size: 10px; color: white; background-color: red; border-radius: 10px; border: none; outline: none; position: absolute; top: 0; left: -2px; padding: 2px; cursor: pointer" class="remove-worker">X</button>
  </div>
  `;

  workerCard.querySelector(".remove-worker").addEventListener("click", () => {
    removeWorkerFromZone(worker.name, workerCard);
  });

  zoneContainer.appendChild(workerCard);
}

function removeWorkerFromZone(workerName, zoneWorkerCard) {
  const worker = workers.find((w) => w.name === workerName);

  if (!worker) return;

  worker.assignedZone = null;
  zoneWorkerCard.remove();

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

  newWorker.querySelector(
    ".side-bar-profile-picture"
  ).style.background = `url("${worker.profile}") center/cover no-repeat`;
  workersList.appendChild(newWorker);

  newWorker.querySelector(".delete-worker").addEventListener("click", () => {
    workersList.removeChild(newWorker);
    workers = workers.filter((w) => w.id !== worker.id);
  });
}
//---------------------------------Zone rules-----------------

//----------------Workers to start with

// -----------------------DISPLAY INITIAL WORKERS-------------------
function displayInitialWorkers() {
  workers.forEach((worker) => {
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

    newWorker.querySelector(".delete-worker").addEventListener("click", () => {
      workersList.removeChild(newWorker);
      workers = workers.filter((w) => w.id !== worker.id);
      filterByRole();
    });
  });
}

displayInitialWorkers();

workersList.addEventListener("click", (e) => {
  const workerCard = e.target.closest(".worker");

  if (!workerCard) return;

  if (e.target.classList.contains("delete-worker")) return;

  const workerName = workerCard.querySelector(".name").textContent;
  const worker = workers.find((w) => w.name === workerName);

  if (!worker) return;

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
// -----------------------DISPLAY INITIAL WORKERS-------------------

function filterByRole() {
  itWorkers = workers.filter((w) => w.role == "IT");
  receptionists = workers.filter((w) => w.role == "Réceptionnistes");
  securityAgents = workers.filter((w) => w.role == "Agents de sécurité");
  managers = workers.filter((w) => w.role == "Manager");
  nettoyageWorkers = workers.filter((w) => w.role == "Nettoyage");
}

let id = workers.length + 1;

function addToSideBar() {
  const worker = {
    id: id,
    name: workerFirstName.value,
    lastName: workerLastName.value,
    email: workerEmail.value,
    phone: workerPhoneNumber.value,
    role: selectOptions.value,
    profile: workerProfilePictureUrl.value || "profile-pic.webp",
    assignedZone: null,
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
  workers.push(worker);
  id++;
  filterByRole();

  newWorker.querySelector(".delete-worker").addEventListener("click", () => {
    workersList.removeChild(newWorker);
    workers = workers.filter((w) => w.id !== worker.id);
    filterByRole();
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

  const eligibleWorkers = getEligibleWorkers("conference");

  availableWorkersPopup.innerHTML = `
    <h3>CONFERENCE ROOM</h3>
    <p style="margin-bottom: 20px">Available Workers:</p>
    <div class="popup-workers-list"></div>
  `;

  const popupWorkersList = availableWorkersPopup.querySelector(
    ".popup-workers-list"
  );

  eligibleWorkers.forEach((worker) => {
    const workerCard = document.createElement("div");
    workerCard.classList.add("popup-worker");
    workerCard.innerHTML = `
      <div  class="profile-picture popup-profile-picture"></div>
      <div class="worker-info">
        <h5 class="name">${worker.name}</h5>
        <small style="color: red; font-size: 12px" class="role">${worker.role}</small>
      </div>
    `;

    const workerProfilePic = workerCard.querySelector(".popup-profile-picture");
    workerProfilePic.style.background = `url("${worker.profile}") center/cover no-repeat`;

    workerCard.addEventListener("click", () => {
      assignWorkerToZone(worker, "conference");
      availableWorkersPopup.close();
      sideBar.style.filter = "blur(0)";
      worksphere.style.filter = "blur(0)";
    });

    popupWorkersList.appendChild(workerCard);
  });

  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
});

receptionDoor.addEventListener("click", (e) => {
  e.preventDefault();

  const eligibleWorkers = getEligibleWorkers("reception");

  availableWorkersPopup.innerHTML = `
    <h3>RECEPTION ROOM</h3>
    <p style="margin-bottom: 20px">Available Workers:</p>
    <div class="popup-workers-list"></div>
  `;

  const popupWorkersList = availableWorkersPopup.querySelector(
    ".popup-workers-list"
  );

  eligibleWorkers.forEach((worker) => {
    const workerCard = document.createElement("div");
    workerCard.classList.add("popup-worker");
    workerCard.innerHTML = `
      <div class="profile-picture popup-profile-picture"></div>
      <div class="worker-info">
        <h5 class="name">${worker.name}</h5>
        <small style="color: red; font-size: 12px" class="role">${worker.role}</small>
      </div>
    `;

    const workerProfilePic = workerCard.querySelector(".popup-profile-picture");
    workerProfilePic.style.background = `url("${worker.profile}") center/cover no-repeat`;

    workerCard.addEventListener("click", () => {
      assignWorkerToZone(worker, "reception");
      availableWorkersPopup.close();
      sideBar.style.filter = "blur(0)";
      worksphere.style.filter = "blur(0)";
    });

    popupWorkersList.appendChild(workerCard);
  });

  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
});

serverDoor.addEventListener("click", (e) => {
  e.preventDefault();

  const eligibleWorkers = getEligibleWorkers("server");

  availableWorkersPopup.innerHTML = `
    <h3>SERVER ROOM</h3>
    <p style="margin-bottom: 20px">Available Workers:</p>
    <div class="popup-workers-list"></div>
  `;

  const popupWorkersList = availableWorkersPopup.querySelector(
    ".popup-workers-list"
  );

  eligibleWorkers.forEach((worker) => {
    const workerCard = document.createElement("div");
    workerCard.classList.add("popup-worker");
    workerCard.innerHTML = `
      <div class="profile-picture popup-profile-picture"></div>
      <div class="worker-info">
        <h5 class="name">${worker.name}</h5>
        <small style="color: red; font-size: 12px" class="role">${worker.role}</small>
      </div>
    `;

    const workerProfilePic = workerCard.querySelector(".popup-profile-picture");
    workerProfilePic.style.background = `url("${worker.profile}") center/cover no-repeat`;

    workerCard.addEventListener("click", () => {
      assignWorkerToZone(worker, "server");
      availableWorkersPopup.close();
      sideBar.style.filter = "blur(0)";
      worksphere.style.filter = "blur(0)";
    });

    popupWorkersList.appendChild(workerCard);
  });

  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
});

securityDoor.addEventListener("click", (e) => {
  e.preventDefault();

  const eligibleWorkers = getEligibleWorkers("security");

  availableWorkersPopup.innerHTML = `
    <h3>SECURITY ROOM</h3>
    <p style="margin-bottom: 20px">Available Workers:</p>
    <div class="popup-workers-list"></div>
  `;

  const popupWorkersList = availableWorkersPopup.querySelector(
    ".popup-workers-list"
  );

  eligibleWorkers.forEach((worker) => {
    const workerCard = document.createElement("div");
    workerCard.classList.add("popup-worker");
    workerCard.innerHTML = `
      <div class="profile-picture popup-profile-picture"></div>
      <div class="worker-info">
        <h5 class="name">${worker.name}</h5>
        <small style="color: red; font-size: 12px" class="role">${worker.role}</small>
      </div>
    `;

    const workerProfilePic = workerCard.querySelector(".popup-profile-picture");
    workerProfilePic.style.background = `url("${worker.profile}") center/cover no-repeat`;

    workerCard.addEventListener("click", () => {
      assignWorkerToZone(worker, "security");
      availableWorkersPopup.close();
      sideBar.style.filter = "blur(0)";
      worksphere.style.filter = "blur(0)";
    });

    popupWorkersList.appendChild(workerCard);
  });

  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
});

staffDoor.addEventListener("click", (e) => {
  e.preventDefault();

  const eligibleWorkers = getEligibleWorkers("staff");

  availableWorkersPopup.innerHTML = `
    <h3>STAFF ROOM</h3>
    <p style="margin-bottom: 20px">Available Workers:</p>
    <div class="popup-workers-list"></div>
  `;

  const popupWorkersList = availableWorkersPopup.querySelector(
    ".popup-workers-list"
  );

  eligibleWorkers.forEach((worker) => {
    const workerCard = document.createElement("div");
    workerCard.classList.add("popup-worker");
    workerCard.innerHTML = `
      <div class="profile-picture popup-profile-picture"></div>
      <div class="worker-info">
        <h5 class="name">${worker.name}</h5>
        <small style="color: red; font-size: 12px" class="role">${worker.role}</small>
      </div>
    `;

    const workerProfilePic = workerCard.querySelector(".popup-profile-picture");
    workerProfilePic.style.background = `url("${worker.profile}") center/cover no-repeat`;

    workerCard.addEventListener("click", () => {
      assignWorkerToZone(worker, "staff");
      availableWorkersPopup.close();
      sideBar.style.filter = "blur(0)";
      worksphere.style.filter = "blur(0)";
    });

    popupWorkersList.appendChild(workerCard);
  });

  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
});

archivesDoor.addEventListener("click", (e) => {
  e.preventDefault();

  const eligibleWorkers = getEligibleWorkers("archives");

  availableWorkersPopup.innerHTML = `
    <h3>ARCHIVES ROOM</h3>
    <p style="margin-bottom: 20px">Available Workers:</p>
    <div class="popup-workers-list"></div>
  `;

  const popupWorkersList = availableWorkersPopup.querySelector(
    ".popup-workers-list"
  );

  eligibleWorkers.forEach((worker) => {
    const workerCard = document.createElement("div");
    workerCard.classList.add("popup-worker");
    workerCard.innerHTML = `
      <div class="profile-picture popup-profile-picture"></div>
      <div class="worker-info">
        <h5 class="name">${worker.name}</h5>
        <small style="color: red; font-size: 12px" class="role">${worker.role}</small>
      </div>
    `;

    const workerProfilePic = workerCard.querySelector(".popup-profile-picture");
    workerProfilePic.style.background = `url("${worker.profile}") center/cover no-repeat`;

    workerCard.addEventListener("click", () => {
      assignWorkerToZone(worker, "archives");
      availableWorkersPopup.close();
      sideBar.style.filter = "blur(0)";
      worksphere.style.filter = "blur(0)";
    });

    popupWorkersList.appendChild(workerCard);
  });

  availableWorkersPopup.showModal();
  sideBar.style.filter = "blur(1px)";
  worksphere.style.filter = "blur(1px)";
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
