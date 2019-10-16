const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            display: flex;
            align-items: center;
            background-color: white;
            width: calc(100% - 2px);
        }

        .result {
            position: relative;
            display: flex;
            flex-direction: column;
            width: auto;
            min-width: 30%;
            max-width: 70%;
            height: auto;
            min-height: 85px;
            font-size: 30px;
            background-color: #f3e6f5;
            border: 1px solid #666;
            margin: 10px 60px 10px 10px;
            padding: 10px;
            border-radius: 3px;
            align-self: flex-end;
        }
        
        .result:before {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            right: -30px;
            bottom: -1px;
            border: 15px solid;
            border-color: transparent transparent #666 #666;
        }
        
        .result:after {
            content: ' ';
            position: absolute;
            width: 0;
            height: 0;
            right: -28px;
            bottom: 0px;
            border: 15px solid;
            border-color: transparent transparent #f3e6f5 #f3e6f5;
        }

        .chat_space {
                display: flex;
                flex-direction: column;
                height: calc(100vh - 260px);
                overflow-y: auto;
                will-change: transform;
        }

        .message {
            display: flex;
            align-self: flex-start;
            font-size: 35px;
            padding: 15px 10px;
            color: black;
            line-height: 1;
            word-break: break-all;
        }

        .time {
            display: flex;
            align-self: flex-end;
            font-size: 25px;
            color: gray;
            padding-right: 1vh;
        }

        input[type=submit] {
            visibility: collapse;
        }

    </style>
    <form>
        <div class="chat_space"></div>
        <form-input name="message-text" placeholder="Сообщение"></form-input>
    </form>
`;

class MessageForm extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.$form = this._shadowRoot.querySelector('form');
        this.$input = this._shadowRoot.querySelector('form-input');
        this.$chat_space = this._shadowRoot.querySelector('.chat_space');
        this.recover();
        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    }

    _onSubmit (event) {
        event.preventDefault();
        if (this.$input.value == '') {
            return;
        }
        this.message = {};
        this.message.innerText = this.$input.value;
        this.message.time = new Date();
        this.new_message(this.message);
        this.$input.value = '';
        this.add_message_in_local(this.message);
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }

    recover () {
        var message_history = JSON.parse(localStorage.getItem('key'));
        if (message_history == null) {
            return;
        }
        for (var i = 0; i < message_history.length; i += 1){
            this.new_message(message_history[i]);
        }
    }

    new_message(message) {
        const window = document.createElement('div');
        window.className = 'result';
        const text = document.createElement('div');
        text.className = 'message';
        text.innerText = message.innerText;
        const time = document.createElement('div');
        time.className = 'time';
        var date = new Date(message.time);
        var min = date.getMinutes();
        var hours = date.getHours();
        a = b = '';
        if (min < 10) {
            b = '0';
        }
        if (hours < 10) {
            a = '0';
        }
        time.innerText = a + `${hours}:` + b + `${min}`;
        window.appendChild(text);
        window.appendChild(time);
        this.$chat_space.appendChild(window);
    }

    add_message_in_local(message) {
        let message_history = JSON.parse(localStorage.getItem('key'));
        if (message_history == null) {
            message_history = [];
        }
        message_history.push(message);
        localStorage.setItem('key', JSON.stringify(message_history));
      }
}

customElements.define('message-form', MessageForm);