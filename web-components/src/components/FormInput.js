const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            outline: none;
            width: calc(100% - 100px);
            height: 100%;
            align-items: flex-end;
            padding-left: 20px;
            padding-right: 20px;
            font-size: 30px;
            display: flex;
            position: relative;
            top: 20px;
        }
        :host {
            display: inline-block;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }
        .button {
            fill: grey;
            display: flex;
            align-items: flex-end;
            padding-right: 20px;
            justify-content: flex-end;
            height: 100%;
            
        }
    </style>
    <input type="text">
        <div class="button">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	         width="50px" height="50px" viewBox="0 0 792 792" style="enable-background:new 0 0 792 792;" xml:space="preserve" transform="rotate(90)">
        <g>
	        <path d="M306,150.48v459.36c0,0-6.696,96.408,91.476,96.408C486,706.248,486,609.84,486,609.84V126.72C486,126.72,486,0,360,0
		        S234,126.72,234,126.72v483.12c0,0,0,182.16,162,182.16s162-182.16,162-182.16V126.72c0-19.8-36-19.8-36,0v483.12
		        c0,0,13.104,146.16-126,146.16c-126,0-126-146.16-126-146.16V126.72c0,0,0-90.72,90-90.72s90,90.72,90,90.72v483.12
		        c0,0,0,56.809-52.524,56.809c-52.523,0-55.476-56.809-55.476-56.809V150.48C342,130.68,306,130.68,306,150.48z"/>
        </g>
        </svg>
        </div>
`;

class FormInput extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this.$input = this.shadowRoot.querySelector('input');
    }

    static get observedAttributes() {
        return ['name', 'value', 'placeholder', 'disabled'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.$input.setAttribute(name, newValue);
    }

    get value() {
        message = this.$input.value;
        this.$input.value = '';
        return message;
    }
}

customElements.define('form-input', FormInput);
