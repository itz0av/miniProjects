document.addEventListener('DOMContentLoaded', ()=>{
const inputTask = document.getElementById("todo-input");
const addButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach( (task)=> renderTask(task));

addButton.addEventListener('click', ()=>{
const taskText = inputTask.value.trim(); 
if(taskText == "") console.error("Enter Task");

let aboutTask = {
    id: Date.now(),
    Value: taskText,
    Completed: false,
}
tasks.push(aboutTask);
saveTask();
renderTask(aboutTask);
inputTask.value = "";
console.log(tasks);
// console.log(taskText);

}); 

function renderTask(task){
    // localStorage.getItem('task', JSON.parse(tasks))
    console.log(task);
    const li = document.createElement("li");
    li.setAttribute('data-id', task.id);
    li.innerHTML = `
    <span>${task.Value}</span>
    <button>Delete</button>`;

    li.addEventListener('click', (e)=>{
        if(e.target.tagName === "BUTTON") return;
        task.Completed = !task.Completed;
        li.classList.toggle('completed')
        saveTask();
    })

    li.querySelector('button').addEventListener('click', (e)=>{
        e.stopPropagation() // prvent toggle from firing
        tasks = tasks.filter(t => t.id !== task.id);
        li.remove();
        saveTask();
    })
    todoList.appendChild(li);

}

function saveTask(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
})