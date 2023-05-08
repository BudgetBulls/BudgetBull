import { getBotResponse } from './openai.js';

const chatForm = document.querySelector('#chat-form');
const chatContent = document.querySelector('#chat-content');
const chatContainer = document.querySelector('#chat-container');

const addUserMessage = (message) => {
    const messageElement = document.createElement('div');
    messageElement.className = 'message user-message';
    messageElement.textContent = message;
    chatContent.appendChild(messageElement);
};

const addBotMessage = (message) => {
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot-message';
    messageElement.textContent = message;
    chatContent.appendChild(messageElement);
};

const scrollToBottom = () => {
    chatContainer.scrollTop = chatContainer.scrollHeight;
};

chatForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userInput = event.target.elements['user-input'];
    const userMessage = userInput.value.trim();

    if (!userMessage) return;

    addUserMessage(userMessage);
    scrollToBottom();

    userInput.value = '';
    userInput.focus();

    const botResponse = await getBotResponse(userMessage);
    addBotMessage(botResponse);
    scrollToBottom();
});