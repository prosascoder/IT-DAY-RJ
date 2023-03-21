const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");


function sendMessage() {
	
	const messageText = messageInput.value;

	
	const messageElement = document.createElement("div");
	messageElement.classList.add("message");
	messageElement.innerText = messageText;
	chatMessages.appendChild(messageElement);

	
	messageInput.value = "";
}


sendButton.addEventListener("click", function() {
	sendMessage();
});


