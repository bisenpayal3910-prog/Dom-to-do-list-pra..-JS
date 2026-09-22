const taskInput = document.querySelector("#taskInput")
const addBtn = document.querySelector("#addBtn")
const taskCount = document.querySelector("#taskCount")
const taskList = document.querySelector("#taskList")

let tasks =[]

//load task

const savedTasks = localStorage.getItem("todos")

if(saveTask){
    tasks = JSON.parse(savedTasks)
}

// save task to lacal storage------

function saveTask(){
    localStorage.setItem(
        "todos",
        JSON.stringify(tasks)
    )
}

// task display function----------------

function renderTask(){
    taskList.innerHTML=""
    tasks.forEach(function(task,index){
        const li =document.createElement("li")
        li.innerHTML = `
        <span>${task}</span>
        <button class = "deleteBtn data-index ="${index}">
        Delete
        </button>

        `
        taskList.append(li)
    })
    taskCount.textContent=task.length
    }

// 4. add task to the list when the add button is clicked

    addBtn.addEventListener("click", function(){
    const task = taskInput.value.trim()

    if (task === ""){
        return
    }

    tasks.push(task)
    taskInput.value = ""

    saveTask()
    renderTask()
})


// Delete task form the list when the delete button is clicked

taskList.addEventListener("click", function(event){
    if(event.target.classList.contains("deleteBtn")){
        const index = event.target.dataset.index
        tasks.splice(index, 1)
        saveTask()
        renderTask()
    }
})
