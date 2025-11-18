"use strict";

const addWorker = document.querySelector(".add-worker");
const addWorkerPopup = document.querySelector(".add-worker-popup");
const closeBtn = document.querySelector(".close");
const sideBar = document.querySelector(".side-bar");
const worksphere = document.querySelector(".worksphere");

addWorker.addEventListener("click", () => {
  addWorkerPopup.showModal();
  sideBar.style.filter = "blur(2.2px)";
  worksphere.style.filter = "blur(2.2px)";
});

closeBtn.addEventListener("click", () => {
  addWorkerPopup.close();
  sideBar.style.filter = "blur(0)";
  worksphere.style.filter = "blur(0)";
});
