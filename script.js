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
function saveTask(){
    localStorage.setItem(
        "todos",
        JSON.stringify(tasks)
    )
}

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