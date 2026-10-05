const form = document.getElementById("myField")
const button = document.getElementById("myButton")

function addTask() {
    const taskValue = form.value;
    const taskZone = document.getElementById("task-zone");
    const newTaskP = document.createElement("p");
    const newDelete = document.createElement("p");
    const newDeleteContent = document.createTextNode("Delete");
    const newTask = document.createTextNode(taskValue);
    const counter = document.getElementById("counter");
    const newTaskGroup = document.createElement("div");
    
    if(taskValue === ""){
        alert("Can't be empty");
    } else {
        taskZone.insertBefore(newTaskGroup, counter);
        
        newTaskP.appendChild(newTask);

        // taskZone.insertBefore(newTaskP, counter);

        newDelete.appendChild(newDeleteContent);

        newTaskGroup.appendChild(newTaskP);
        newTaskGroup.appendChild(newDelete);

        // taskZone.insertBefore(newDelete, counter);

        form.value = "";
    }    
}

function deleteTask() {
    
}

button.addEventListener("click", function() {
    
    
    addTask();
})
