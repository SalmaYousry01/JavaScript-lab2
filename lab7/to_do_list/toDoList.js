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
        });
        listContainer.appendChild(taskContainer);
    }
    inputBox.value = "";
}



