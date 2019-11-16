const template = document.createElement('template');
template.innerHTML = `
    <style>
    .create_new_chat {
        display: block;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 0 rgba(204,169,44, 0.4);
        position: fixed;
        z-index: 1;
        bottom: 3vh;
        right: 3vh;
        filter: drop-shadow( 4px 4px 3px rgba(0, 0, 0, 0.9));
        animation: pulse 2s infinite;
    }

    .create_new_chat:hover {
      animation: none;
    }
    
    .st0 {
      fill: #ffd64e;

    }
    .st1 {
      fill: #76611f
    }

    .st0:active {
      fill: rgba(255, 214, 78, 0)
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);
      }
      70% {
          box-shadow: 0 0 0 20px rgba(204,169,44, 0);
      }
      100% {
          box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      }
    }
    
    .space {
      display: flex;
      flex-direction: column;
    }

    </style>
    <div class="space"></div>
    <div class="create_new_chat">
        <svg id="Layer_1" style="enable-background:new 0 0 128 128;" version="1.1" viewBox="0 0 128 128" height="12vh" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
        </style><circle class="st0" cx="64" cy="64" r="64"/><g><path class="st1" d="M87.4,50.5l9.9-9.9c0.4-0.4,0.4-1,0-1.4l-8.5-8.5c-0.4-0.4-1-0.4-1.4,0l-9.9,9.9L87.4,50.5z"/><path class="st1" d="M74.6,43.5L38,80.1l-4.4,13c-0.3,0.8,0.5,1.5,1.3,1.3l13-4.4l36.6-36.6L74.6,43.5z"/></g></svg>
    </div>
`;

class ChatList extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$create_new_chat = this.shadowRoot.querySelector('.create_new_chat');
    this.$space = this.shadowRoot.querySelector('.space');

    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
    this.recover();

    this.$create_new_chat.addEventListener('click', this.userClickOnPen.bind(this));
  }

  recover() {
    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
    for (let i = 0; i < this.$chatHistory.length; i += 1) {
      const newChat = document.createElement('create-chat');
      newChat.setAttribute('id', i);
      const messageArray = this.$chatHistory[i].messages;
      if (messageArray.length > 0) {
        newChat.message = messageArray[messageArray.length - 1].innerText;
        newChat.time = messageArray[messageArray.length - 1].time;
        newChat.status.style.display = 'flex';
      } else {
        newChat.message = '';
        newChat.time = '';
      }
      this.$space.insertBefore(newChat, this.$space.firstChild);
    }
  }

  userClickOnPen() {
    const chat = document.createElement('create-chat');
    chat.id = this.$chatHistory.length;
    chat.setAttribute('id', chat.id);
    chat.messages = [];
    this.$chatHistory.push({ id: chat.id, messages: chat.messages });
    this.$space.insertBefore(chat, this.$space.firstChild);
    this.addChatInLocal();
  }

  clearHistory() {
    const chats = this.shadowRoot.querySelector('.space');
    while (chats.firstElementChild) {
      chats.removeChild(chats.firstElementChild);
    }
  }

  addChatInLocal() {
    if (this.$chatHistory === null) {
      this.$chatHistory = [];
    }
    localStorage.setItem('chats', JSON.stringify(this.$chatHistory));
  }
}


customElements.define('chat-list', ChatList);
