import "./style.css";

import { initPWA } from "./pwa.js";

import app, { todayWeekday } from "./app";
import nav from "./src/components/nav";
import addTask from "./src/components/addTask";
import calender from "./src/components/calender";
import calenderLogicfunc from "./src/components/js/calenderLogic";
import taskCard from "./src/components/taskCard";
import taskStatus from "./src/components/taskStatus";
import extraInfoFooter from "./src/components/extraInfoFooter";
import { todaysDate } from "./app";
import { tickIcon } from "./src/components/js/icons";
let userName = localStorage.getItem("userName")
  ? localStorage.getItem("userName")
  : prompt("Enter User Name.");
localStorage.setItem("userName", userName);
let todayDate = new Date();
let localDate = todayDate.toLocaleDateString("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
let userTasks = [];
let completedTasks = localStorage.getItem("completedTasks")
  ? JSON.parse(localStorage.getItem("completedTasks"))
  : [];
let pendingTasksNum = localStorage.getItem("userTasks")
  ? JSON.parse(localStorage.getItem("userTasks")).length
  : 0;

document.querySelector("#app").innerHTML = `
 ${nav()}
 <h1 class='intro'>Hello,${userName}, Start Planning Today.</h1>
 <section class='main'>
    <div class='head'>
        <div class='todayWeekday'>
            ${todayWeekday()}
        </div>
        ${addTask()}
    </div>
    <div class='body'>
        <div class='left date'>
            <div class='localDate'>
                ${localDate}
            </div>
            
            ${calender()}
        </div>
        <div class='right todos'>
            <div class='top'>
                <div class='select'>
                    <select class='category'>
                        <option>Categort</option>
                    </select>
                    <select>
                        <option>prirority</option>
                    </select>
                </div>
                <div class='searchDiv'>
                    <input id='searchInput' type='text' placeholder='search' />
                    <i>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width='20px' height='20px'><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg></i>
                </div>
            </div>
            <div id='tasks'>
            </div>
        </div>
    </div>
    <footer>
        <div class='statusInfo'>
            ${taskStatus({ type: "completed", data: completedTasks.length })}
            ${taskStatus({ type: "pending", data: pendingTasksNum })}
        </div>
        ${extraInfoFooter({ data: completedTasks.length + pendingTasksNum })}
    </footer>
 </section>

`;
// Update Tasks
const tasksDiv = document.querySelector("#tasks");
const taskUpdateLogic = () => {
  if (userTasks.length == 0) {
    tasksDiv.textContent = "No Tasks";
  } else {
    tasksDiv.innerHTML = "";
    userTasks.forEach((task, i) => {
      tasksDiv.innerHTML += taskCard({
        title: task.title,
        detail: task.detail,
        date: task.createdDate,
        index: i,
      });
    });
  }
};
function updateTasks() {
  userTasks = localStorage.getItem("userTasks")
    ? JSON.parse(localStorage.getItem("userTasks"))
    : [];
  //   console.log({ userTasks });
  taskUpdateLogic();
}

updateTasks();

//events
const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((delBtn) => {
  delBtn.addEventListener("click", () => {
    userTasks.splice(delBtn.dataset.index, 1);
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
    // console.log(delBtn.dataset.index);
    location.reload();
  });
});

const markAsCompleteButtons = document.querySelectorAll(".markAsComplete");
// console.log(markAsCompleteButtons);
markAsCompleteButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn);
    completedTasks.push(userTasks.splice(btn.dataset.index, 1)[0]);
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    localStorage.setItem("userTasks", JSON.stringify(userTasks));
    document.querySelector(".taskStatus.completed strong").textContent =
      completedTasks.length;
    location.reload();
  });
});
const editButtons = document.querySelectorAll("button.edit");
editButtons.forEach((editBtn) => {
  editBtn.addEventListener("click", () => {
    const mainParent = editBtn.parentElement.parentElement;
    const datasetIndex = editBtn.dataset.index;
    console.log({ mainParent, datasetIndex });
    const iconElement = editBtn.querySelector("i");
    const titleElement = mainParent.querySelector(".taskTitle");
    const detailElement = mainParent.querySelector(".taskDetail");
    titleElement.contentEditable = "true";
    detailElement.contentEditable = "true";
    titleElement.focus();
    iconElement.innerHTML = tickIcon;
    editBtn.addEventListener("click", () => {
      const newTitle = titleElement.innerText;
      const newDetail = detailElement.innerText;
      userTasks[datasetIndex].title = newTitle;
      userTasks[datasetIndex].detail = newDetail;
      localStorage.setItem("userTasks", JSON.stringify(userTasks));
      location.reload();
    });
  });
});

const addTaskBtn = document.querySelector("button#addTaskBtn");
const titleInput = document.querySelector("input#titleInput");
const detailInput = document.querySelector("input#detailInput");

addTaskBtn.addEventListener("click", () => {
  const title = titleInput.value;
  const detail = detailInput.value;
  const createdDate = todaysDate();
  const task = { title, detail, createdDate };
  userTasks.push(task);
  localStorage.setItem("userTasks", JSON.stringify(userTasks));
  titleInput.value = "";
  detailInput.value = "";
  updateTasks();
});

app();
calenderLogicfunc();

initPWA(app);
