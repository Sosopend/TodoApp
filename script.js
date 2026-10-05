const form = document.getElementById("myField")
const button = document.getElementById("myButton")

function addTask() {
    const taskValue = form.value;
    const taskZone = document.getElementById("task-zone");
    const newDiv = document.createElement("div");
    const newDelete = document.createElement("p");
    const newTask = document.createTextNode(taskValue);
    const counter = document.getElementById("counter");
    
    if(taskValue === ""){
        alert("Can't be empty");
    } else {
        newDiv.appendChild(newTask);

        taskZone.insertBefore(newDiv, counter);

        form.value = "";
    }
    
    
}

button.addEventListener("click", function() {
    
    
    addTask();
})
