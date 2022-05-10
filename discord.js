const button = document.querySelector('.symbol')
const chat = document.querySelector('.chat')
const container = document.querySelector('.chats')

button.addEventListener('click', () => {
  const clone = chat.cloneNode();

  clone.textContent = new Date().toISOString();

  container.appendChild(clone);
})