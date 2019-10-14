const template = document.createElement('template');
template.innerHTML = `
    <style>
        form-input {
            width: 100%;
        }

        .result {
            position: relative;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: auto;
            min-width: 30px;
            max-wodth: 100px;
            height: 80px;
            
            font-size: 30px;
            background-color: #f3e6f5;
            border: 1px solid #666;
            margin: 10px;
            padding: 10px;
            border-radius: 10px;
        }
        

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        <div class="result"></div>
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
        this.$message = this._shadowRoot.querySelector('.result');

        this.$form.addEventListener('submit', this._onSubmit.bind(this));
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this));
    }

    _onSubmit (event) {
        event.preventDefault();
        this.$message.innerText = this.$input.value;
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'));
        }
    }
}

customElements.define('message-form', MessageForm);
