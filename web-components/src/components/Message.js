const template = document.createElement('template');
template.innerHTML = `
    <style>
    .result {
        position: relative;
        display: flex;
        width: auto;
        min-width: 10vh;
        max-width: 55vh;
        height: auto;
        min-height: 85px;
        font-size: 30px;
        background-color: #f3e6f5;
        border: 1px solid #666;
        margin: 10px 60px 10px 10px;
        border-radius: 3px;
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

    .message {
        display: flex;
        align-self: flex-start;
        font-size: 30px;
        padding: 15px 10px;
        color: black;
        line-height: 1;
        word-break: break-all;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        -ms-hyphens: auto;
    }

    .time {
        display: flex;
        align-self: flex-end;
        font-size: 25px;
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

  get innerText() {
    return this.$message.innerText;
  }

  set innerText(text) {
    this.$message.innerText = text;
  }
}

customElements.define('my-message', Message);
