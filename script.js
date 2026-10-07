const form = document.getElementById("myField");
const button = document.getElementById("myButton");
let taskGroupId = 0;

function addTask() {
    const taskValue = form.value;
    const taskZone = document.getElementById("task-zone");
    const newTaskP = document.createElement("p");
    const newDelete = document.createElement("p");
    const newDeleteContent = document.createTextNode("Delete");
    const newTask = document.createTextNode(taskValue);
    const counter = document.getElementById("counter");
    const newTaskGroup = document.createElement("div");
    const taskGroupClassCount = document.querySelectorAll(".task-group").length;
    
    if(taskValue === ""){
        alert("Can't be empty");
    } else {
        taskZone.insertBefore(newTaskGroup, counter);
        
        newTaskP.appendChild(newTask);

        newDelete.appendChild(newDeleteContent);

        newTaskGroup.appendChild(newTaskP);
        newTaskGroup.appendChild(newDelete);

        form.value = "";

        newTaskGroup.classList.add("task-group");

        if(taskGroupClassCount === taskGroupId) {
            taskGroupId = taskGroupId + 1;
        }

        newTaskGroup.id = taskGroupId;

        function deleteTask(newDelete) {
    newDelete.parentElement.remove();
}

newDelete.addEventListener("click", function() {
    deleteTask(newDelete);
})
    }    
}

button.addEventListener("click", function() {
    
    
    addTask();
})