$(document).ready(function () {
    const socket = io();
    const owner = document.cookie.split(";")[1].split("=")[1];

    $('#messageContainer').scrollTop($('#messageContainer').height())

    $("#sendMessage").click(() => {
        let message = $("#inputMessage").val();
        if (message.trim().length > 0) {
            socket.emit("send message", { owner, message });
            $("#messageContainer").append(
                `<div class="message-sended message"><span class="message__owner">${owner}</span><p class="message__text">${message}</p></div>`
            );
            $("#inputMessage").val("");
        }
    });

    $("#inputMessage").keypress((e) => {
        let keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            let message = $("#inputMessage").val();
            if (message.trim().length > 0) {
                socket.emit("send message", { owner, message });
                $("#messageContainer").append(
                    `<div class="message-sended message"><span class="message__owner">${owner}</span><p class="message__text">${message}</p></div>`
                );
                $("#inputMessage").val("");
            }
        }
    });

    socket.on("receive message", (data) => {
        $("#messageContainer").append(
            `<div class="message-received message"><span class="message__owner">${data.owner}</span><p class="message__text">${data.message}</p></div>`
        );
    });
});
