var messages = new Array();
var colors = new Array();
var deadlines = new Array();

var editing = -1;

function addTask() {
    var inputTask = document.getElementById("inputTask");
    var selectPriority = document.getElementById("selectPriority");
    var deadlineDate = document.getElementById("deadlineDate");

    if (editing == -1) {
        if (inputTask.value.trim() != '') {
            messages.push(inputTask.value);
            colors.push(selectPriority.value);
            deadlines.push(deadlineDate.value);
        }
    } else {
        messages[editing] = inputTask.value;
        colors[editing] = selectPriority.value;
        deadlines[editing] = deadlineDate.value;
    }

    editing = -1;
    inputTask.value = "";
    deadlineDate.value = "";

    loadTasks();
}

function loadTasks() {
    var messageOutput = "";
    var i = 0;


    messages.forEach((m) => {
        messageOutput += "<div style='background-color:" + colors[i] + "' id='msg" + i + "' class='item-message'>" +
            m + "<span class='deadline-item'><br>DeadLine: " + deadlines[i] + "</span></div><div class='action-buttons'><div onclick='deleteMessage(" + i + ")' class='box-delete click-box'>remove</div>" +
            "<div onclick='editMessage(" + i + ")' class='box-edit click-box'>edit</div></div>";
        i++
    });

    document.getElementById("divTasks").innerHTML = messageOutput;
}

function deleteMessage(id) {

    messages.splice(id, 1);
    colors.splice(id, 1);
    deadlines.splice(id, 1);
    loadTasks();
}

function editMessage(id) {
    editing = id;
    var inputTask = document.getElementById("inputTask");
    var deadlineDate = document.getElementById("deadlineDate");

    inputTask.value = messages[id];
    deadlineDate.value = deadlines[id];
}