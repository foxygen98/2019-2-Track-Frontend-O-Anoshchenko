const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            display: flex;
            align-items: center;
            background-color: white;
            width: calc(100% - 2px);
        }

        .chat_space {
                display: flex;
                padding-right: 10px;
                magrin-right: 10px;
                flex-direction: column-reverse;
                align-items: flex-end;
                height: calc(100vh - 260px);
                overflow-y: auto;
                will-change: transform;
        }

        .chat {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
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
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this.shadowRoot.querySelector('form');
    this.$input = this.shadowRoot.querySelector('form-input');
    this.$chat_space = this.shadowRoot.querySelector('.chat_space');

    this.$messageHistory = JSON.parse(localStorage.getItem('key')) || [];
    for (let i = 0; i < this.$messageHistory.length; i += 1) {
      const newMessage = document.createElement('my-message');
      newMessage.innerText = this.$messageHistory[i].innerText;
      newMessage.time = this.$messageHistory[i].time;
      this.$chat_space.insertBefore(newMessage, this.$chat_space.firstChild);
    }

    this.$form.addEventListener('submit', this.onSubmit.bind(this));
    this.$form.addEventListener('keypress', this.onKeyPress.bind(this));
  }

  onSubmit(event) {
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
    this.$messageHistory.push({ innerText: message.innerText, time: message.time });
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
    if (this.$messageHistory === null) {
      this.$messageHistory = [];
    }
    localStorage.setItem('key', JSON.stringify(this.$messageHistory));
  }
}

customElements.define('message-form', MessageForm);
