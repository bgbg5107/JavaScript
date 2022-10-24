//유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.
//delete 버튼을 클릭하면 할일이 삭제된다.
//check 버튼을 클릭하면 할일이 끝나면서 밑줄이 쳐진다.
//1. check 버튼을 클릭하는 순간 true false
//2. true이면 끝난 것으로 간주하고 밑줄 보여주기
//3. false이면 끝나지 않은 것으로 간주하고 그대로 보여주기

//진행중 끝남 탭을 누르면, 언더바가 이동한다
//끝남탭은 끝난 아이템만, 진행중 탭은 진행중인 아이템만
//전체탭을 누르면 다시 전체아이템으로 돌아온다.

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let tabs = document.querySelectorAll(".task-tabs div"); //여러개 선택
let taskList = [];
let filterList = [];
let mode = "all";

addButton.addEventListener("click", addTask=()=>{
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  if(task.taskContent == ""){
    taskList.pop(task)
  }
  render();
  console.log(taskList)
});

taskInput.addEventListener("focus", focusInput=()=>{
  taskInput.value = "";
});

taskInput.addEventListener("keypress", (event) =>{
  if (event.key === "Enter") {
    addTask(event);
    taskInput.value = "";
  }
});

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (event)=> {
    filter(event);
  });
}


 render=()=>{
  let list = [];
  let resultHTML = "";

  if (mode == "all") {
    list = taskList;
  } else {
    list = filterList;
  }

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

 toggleComplete=(id)=> {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  filter();
}

deleteTask=(id)=> {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
    }
  }
  filter();
}

 filter=(event)=> {
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
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
  } else if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i]);
      }
    }
  }
  render();
}

 randomIDGenerate=()=> {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ""
  );
}
