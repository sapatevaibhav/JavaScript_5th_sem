 
console.log("Welcome to To-Do list");
showtasks();

// If user adds a task, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }
  tasksObj.push(addTxt.value);
  localStorage.setItem("tasks", JSON.stringify(tasksObj));
  addTxt.value = "";
//   console.log(tasksObj);
  showtasks();
});

// Function to show elements from localStorage
function showtasks() {
  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }
  let html = "";
  tasksObj.forEach(function(element, index) {
    html += `
            <div class="taskCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">task ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deletetask(this.id)" class="btn btn-primary">Delete task</button>
                    </div>
                </div>`;
  });
  let tasksElm = document.getElementById("tasks");
  if (tasksObj.length != 0) {
    tasksElm.innerHTML = html;
  } else {
    tasksElm.innerHTML = `Nothing to show! Use "Add a task" section above to add tasks.`;
  }
}

// Function to delete a task
function deletetask(index) {
//   console.log("I am deleting", index);

  let tasks = localStorage.getItem("tasks");
  if (tasks == null) {
    tasksObj = [];
  } else {
    tasksObj = JSON.parse(tasks);
  }

  tasksObj.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasksObj));
  showtasks();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let taskCards = document.getElementsByClassName('taskCard');
    Array.from(taskCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

/*
Further Features:
1. Add Title
2. Mark a task as Important
3. Separate tasks by user
4. Sync and host to web server 
*/ 