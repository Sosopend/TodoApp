const form = document.getElementById("myField")
const button = document.getElementById("myButton")

function addTask() {
    const taskValue = form.value;
    const taskZone = document.getElementById("task-zone");
    // const counter = document.getElementById("counter");
    const newDiv = document.createElement("div");
    const newTask = document.createTextNode(taskValue);
    
    newDiv.appendChild(newTask);

    document.body.insertBefore(newDiv, taskZone);}

button.addEventListener("click", function() {
    
    
    addTask();
})
