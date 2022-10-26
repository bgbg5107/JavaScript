let taskInput = document.getElementById("task-input");
let tabs = document.querySelectorAll(".task-tabs div"); //여러개 선택
let taskList = [];
let filterList = [];
let mode = "all";

taskInput.addEventListener("focus", focusInput=()=>{
  taskInput.value = "";
});

taskInput.addEventListener("keypress", (event) =>{
  if (event.key === "Enter") {
    addTask(event);
    taskInput.value = "";
  }
});

const addTask=()=>{
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  if(task.taskContent == "") taskList.pop(task)
  render();
};

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (event)=> {
    filter(event);
  });
}

 const render=()=>{
  let list = [];
  let resultHTML = "";

  if (mode == "all") list = taskList;
  else list = filterList;
  
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task">
        <div class = "contentBox task-done">${list[i].taskContent}</div>
        <div class = "button-box">
            <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-rotate-left return"></i></button>&nbsp;&nbsp;
            <button onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash"></i></button>
        </div>
     </div>`;
    } else {
      resultHTML += `<div class="task">
        <div class = "contentBox">${list[i].taskContent}</div>
        <div class = "button-box">
            <button onclick="toggleComplete('${list[i].id}')"><i class="fa-solid fa-check check"></i></button>&nbsp;&nbsp;
            <button onclick="deleteTask('${list[i].id}')"><i class="fa-solid fa-trash"></i></button>
        </div>
     </div>`;
    }
  }
  document.getElementById("task-board").innerHTML = resultHTML;
}

const toggleComplete=(id)=> {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  filter();
}

const deleteTask=(id)=> {
  for (let i = 0; i < taskList.length; i++) 
    if (taskList[i].id == id) taskList.splice(i, 1);
  filter();
}

const filter=(event)=> {
  if (event) {
    mode = event.target.id;
    document.getElementById("under-line").style.width =
      event.target.offsetWidth + "px";
    document.getElementById("under-line").style.top =
      event.target.offsetTop + event.target.offsetHeight + "px";
    document.getElementById("under-line").style.left =
      event.target.offsetLeft + "px";
  }
  filterList = [];
  if (mode == "ongoing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) filterList.push(taskList[i]);
    }
  } else if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) filterList.push(taskList[i]);
    }
  }
  render();
}

const randomIDGenerate=()=> {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    "");
}
