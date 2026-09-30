const form = document.getElementById("myField")
const button = document.getElementById("myButton")

button.addEventListener("click", function() {
    let taskValue = document.getElementById("myField").value;
    console.log(taskValue);
})
