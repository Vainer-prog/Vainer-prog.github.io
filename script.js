const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatHistory = document.querySelector('.chat-history');

sendButton.addEventListener('click', () => {
  if (messageInput.value !== '') {
    const message = document.createElement('div');
    message.classList.add('chat-message');
    message.textContent = messageInput.value;
    chatHistory.appendChild(message);
    messageInput.value = '';
  }
});

messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});
