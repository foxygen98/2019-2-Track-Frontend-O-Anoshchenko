const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            display: flex;
            align-items: center;
            background-color: white;
            width: calc(100% - 0.2vh);
        }

        .chat_space {
                display: flex;
                flex-grow: 10;
                padding-right: 1vh;
                magrin-right: 1vh;
                flex-direction: column-reverse;
                align-items: flex-end;
                overflow-y: auto;
                will-change: transform;
        }

        .chat {
          display: flex;
          flex-direction: column;
          height: 88vh;
          width: calc(100% - 0.2vh);
        }

        input[type=submit] {
            visibility: collapse;
        }

    </style>
    <form class="chat">
        <div class="chat_space"></div>
        <form-input name="message-text" placeholder="Сообщение"></form-input>
    </form>
`;

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this.$chat_list = document.querySelector('chat-list');
    this.$create_chat = document.querySelector('create-chat');
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this.shadowRoot.querySelector('form');
    this.$input = this.shadowRoot.querySelector('form-input');
    this.$chat_space = this.shadowRoot.querySelector('.chat_space');
    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];

    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));
  }

  recover(id) {
    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];
    if (this.$chatHistory[id].messages.length === 0) {
      return;
    }
    for (let i = 0; i < this.$chatHistory[id].messages.length; i += 1) {
      const newMessage = document.createElement('my-message');
      newMessage.innerText = this.$chatHistory[id].messages[i].innerText;
      newMessage.time = this.$chatHistory[id].messages[i].time;
      this.$chat_space.insertBefore(newMessage, this.$chat_space.firstChild);
    }
  }

  onSubmit(event) {
    const id = this.getAttribute('id');
    event.preventDefault();
    if (this.$input.value === '') {
      return;
    }
    const message = document.createElement('my-message');
    message.innerText = this.$input.value;
    message.time = new Date();
    const date = new Date(message.time);
    const min = date.getMinutes();
    const hours = date.getHours();
    let a = '';
    let b = '';
    if (min < 10) {
      b = '0';
    }
    if (hours < 10) {
      a = '0';
    }
    message.time = `${a}${hours}:${b}${min}`;
    this.$chatHistory[id].messages.push({
      innerText: message.innerText,
      time: message.time,
      status: 1,
    });
    this.$chat_space.insertBefore(message, this.$chat_space.firstChild);
    this.$input.value = '';
    this.addMessageInLocal();
  }

  onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }

  addMessageInLocal() {
    const id = this.getAttribute('id');
    if (this.$chatHistory[id].messages.length === null) {
      this.$chatHistory[id].messages = [];
    }
    localStorage.setItem('chats', JSON.stringify(this.$chatHistory));
  }

  clearHistory() {
    const mess = this.shadowRoot.querySelector('.chat_space');
    while (mess.firstElementChild) {
      mess.removeChild(mess.firstElementChild);
    }
  }

  static get observedAttributes() {
    return ['id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'id' && oldValue !== newValue) {
      this.clearHistory();
      this.recover(newValue);
    }
  }
}

customElements.define('message-form', MessageForm);
