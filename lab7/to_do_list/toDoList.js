const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("Enter Task Name!");
    }
    else {
        let taskContainer = document.createElement("ul");
        taskContainer.classList.add("task-container");

        let taskName = document.createElement("li");
        taskName.classList.add("task-name");
        taskName.innerHTML = inputBox.value;
        taskContainer.appendChild(taskName);

        var image1 = document.createElement('img');
        image1.src = 'images/yes.png';
        image1.addEventListener('click', function () {
            // Toggle the background color to green when clicked
            taskContainer.classList.toggle("yesClicked");
            saveData();
        });
        taskContainer.appendChild(image1);

        var image2 = document.createElement('img');
        image2.src = 'images/no.png';
        taskContainer.appendChild(image2);
        image2.addEventListener('click', function () {
            // Remove the task container when "no" is clicked
            var delConfirm = confirm("the task will be deleted, are you sure?");
            if (delConfirm) {
                listContainer.removeChild(taskContainer);
            }
            saveData();
        });
        listContainer.appendChild(taskContainer);
    }
    inputBox.value = "";
    saveData();
}


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    console.log("data saved");
}


function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    // Reattach event listeners to task containers, delete buttons, or completion checkboxes
    let taskContainers = document.querySelectorAll('.task-container');
    taskContainers.forEach(taskContainer => {
        let deleteButton = taskContainer.querySelector('img[src="images/no.png"]');
        deleteButton.addEventListener('click', function () {
            var delConfirm = confirm("The task will be deleted, are you sure?");
            if (delConfirm) {
                listContainer.removeChild(taskContainer);
                saveData();
            }
        });

        let clickedContainer = taskContainer.querySelector('img[src="images/yes.png"]');
        clickedContainer.addEventListener('click', function () {
            taskContainer.classList.toggle("yesClicked");
            saveData();
        });
    });
}
showTask();