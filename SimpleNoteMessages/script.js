var messages = new Array();
var colors = new Array();
var editing = -1;

function addMessage() {
    var inputMessage = document.getElementById("inputMessage");
    var selectColor = document.getElementById("selectColor");

    if (editing == -1) {
        messages.push(inputMessage.value);
        colors.push(selectColor.value);
    } else {
        messages[editing] = inputMessage.value;
        colors[editing] = selectColor.value;
    }
    editing = -1;
    inputMessage.value = "";

    loadMessages();
}

function loadMessages() {
    var messageOutput = "";
    var i = 0;


    messages.forEach((m) => {
        messageOutput += "<div style='background-color:" + colors[i] + "' id='msg" + i + "' class='item-message'>" +
            m + "</div><div onclick='deleteMessage(" + i + ")' class='box-delete click-box'>remove</div>" +
            "<div onclick='editMessage(" + i + ")' class='box-delete click-box'>edit</div>";
        i++
    });

    document.getElementById("divMessages").innerHTML = messageOutput;
}

function deleteMessage(id) {

    messages.splice(id, 1);
    colors.splice(id, 1);
    loadMessages();
}

function editMessage(id) {
    editing = id;
    var inputMessage = document.getElementById("inputMessage");
    inputMessage.value = messages[id];
}
