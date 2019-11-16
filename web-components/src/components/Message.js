const template = document.createElement('template');
template.innerHTML = `
    <style>
    .result {
        position: relative;
        display: flex;
        justify-content: flex-end;
        width: auto;
        min-width: 20vh;
        max-width: 70vh;
        height: auto;
        min-height: 10vh;
        background-color: #f3e6f5;
        border: 1px solid #666;
        margin: 10px 60px 10px 10px;
        border-radius: 3px;
        opacity: 0;
        transition: 0.5s;
        animation: show 0.5s 1;
        animation-fill-mode: forwards;
    }

    @keyframes show{

      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
    
    .result:before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        right: -30px;
        bottom: -1px;
        border: 15px solid;
        border-color: transparent transparent #000 #000;
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

    .message {
        display: flex;
        align-self: flex-start;
        font-size: 3vh;
        padding: 1.5vh 1vh;
        color: black;
        flex-grow: 10;
        line-height: 1;
        word-break: break-all;
    }

    .time {
        display: flex;
        align-self: flex-end;
        font-size: 2.5vh;
        color: gray;
        padding: 1vh;
    }
      
    </style> 
    <form>
        <div class="result">
            <div class="message"></div>
            <div class="time"></div>
        </div>
    </form> 
`;

class Message extends HTMLElement {
  constructor() {
    super();
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$message = this.shadowRoot.querySelector('.message');
    this.$time = this.shadowRoot.querySelector('.time');
    this.$result = this.shadowRoot.querySelector('.result');
  }

  get time() {
    return this.$time.innerText;
  }

  set time(time) {
    this.$time.innerText = time;
  }

  get result() {
    return this.$result;
  }

  set result(result) {
    this.$result = result;
  }

  get innerText() {
    return this.$message.innerText;
  }

  set innerText(text) {
    this.$message.innerText = text;
  }
}

customElements.define('my-message', Message);
