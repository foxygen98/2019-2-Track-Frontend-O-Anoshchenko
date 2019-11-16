const template = document.createElement('template');
template.innerHTML = `
    <style>
    .one_chat {
      display: flex;
      transition: all 1s;
      align-items:stretch;
    }

    .one_chat:hover {
      background: rgba(0, 0, 0, 0.02);
    }
  
    .name_and_text {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-grow: 2;
      width: 30vh;
      padding: 3vh 3vh 0vh 3vh;
    }
  
    .friend_name {
      font-size: 4vh;
      color: black;
      padding: 0vh 0vh 1vh 0vh;
    }

    .last_message {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: gray;
      font-size: 3vh;
    }
  
    .time_and_status {
      color: gray;
      display: flex;
      flex-direction: column;
    }
  
    .last_post_time {
      font-size: 3vh;
      padding: 3vh 2vh 0vh 0vh;
      align-self: flex-end;
    }
  
    .last_post_status {
      display: none;
      align-self: flex-end;
      padding: 0vh 2vh 0vh 0vh;
    }  
    </style>
            <div class="one_chat">
                <div class="friend_photo">
                <svg id="Layer_1" style="enable-background:new 0 0 64 64;" version="1.1" viewBox="0 0 58 54" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10vh" height="10vh">
                <style type="text/css">
                    .st0{fill: #8E24AA;}
                </style>
                <g>
                    <g id="Icon-User" transform="translate(278.000000, 278.000000)">
                        <path class="st0" d="M-246-222.1c-13.2,0-23.9-10.7-23.9-23.9s10.7-23.9,23.9-23.9c13.2,0,23.9,10.7,23.9,23.9     S-232.8-222.1-246-222.1L-246-222.1z M-246-267.3c-11.7,0-21.3,9.6-21.3,21.3c0,11.7,9.6,21.3,21.3,21.3     c11.7,0,21.3-9.6,21.3-21.3C-224.7-257.7-234.3-267.3-246-267.3L-246-267.3z" id="Fill-57"/>
                        <path class="st0" d="M-260-228.7l-2.4-1.1c0.7-1.7,2.9-2.6,5.4-3.7c2.4-1.1,5.4-2.4,5.4-4v-2.2     c-0.9-0.7-2.3-2.3-2.5-4.6c-0.7-0.7-1.8-2-1.8-3.6c0-1,0.4-1.8,0.7-2.3c-0.2-1.1-0.6-3.3-0.6-5c0-5.5,3.8-9.1,9.8-9.1     c1.7,0,3.8,0.5,4.9,1.7c2.7,0.5,4.9,3.7,4.9,7.4c0,2.4-0.4,4.4-0.7,5.3c0.3,0.5,0.6,1.2,0.6,2c0,1.9-0.9,3.1-1.8,3.7     c-0.2,2.3-1.5,3.8-2.3,4.5v2.2c0,1.4,2.5,2.3,4.8,3.2c2.7,1,5.5,2,6.4,4.3l-2.5,0.9c-0.4-1.2-2.8-2-4.8-2.8     c-3.1-1.1-6.6-2.4-6.6-5.6v-3.6l0.6-0.4c0.1,0,1.8-1.2,1.8-3.5v-0.9l0.8-0.3c0.1-0.1,0.9-0.5,0.9-1.7c0-0.4-0.3-0.8-0.4-0.9     l-0.5-0.6l0.2-0.7c0,0,0.7-2.2,0.7-5.2c0-2.5-1.4-4.8-2.9-4.8h-0.8l-0.4-0.7c-0.3-0.5-1.5-1-3.1-1c-4.5,0-7.2,2.4-7.2,6.5     c0,1.9,0.7,5,0.7,5l0.2,0.7l-0.5,0.5c0,0-0.4,0.5-0.4,1c0,0.7,0.9,1.6,1.3,2l0.5,0.4l0,0.7c0,2.2,1.9,3.4,1.9,3.4l0.6,0.4l0,3.6     c0,3.3-3.7,5-7,6.4C-257.5-230.4-259.6-229.4-260-228.7" id="Fill-58"/>
                    </g>
                </g>
            </svg></div>
                <div class="name_and_text">
                <div class="friend_name">Имя собеседника</div>
                <div class="last_message"></div>
                </div>
                <div class="time_and_status">
                <div class="last_post_time"></div>
                <div class="last_post_status">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="3vh" height="3vh"
                        viewBox="0 0 26 26"
                        style=" fill:#8E24AA;"><path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z"></path></svg>
                </div>
                </div>
            </div>
        <hr width="85%" align="right">
`;

class CreateChat extends HTMLElement {
  constructor() {
    super();
    this.$head = document.querySelector('mes-head');
    this.$chat_list = document.querySelector('chat-list');
    this.$message = document.querySelector('message-form');
    this.$input = document.querySelector('form-input');
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$one_chat = this.shadowRoot.querySelector('.one_chat');
    this.$friend_photo = this.shadowRoot.querySelector('.friend_photo');
    this.$friend_name = this.shadowRoot.querySelector('.friend_name');
    this.$last_message = this.shadowRoot.querySelector('.last_message');
    this.$last_post_time = this.shadowRoot.querySelector('.last_post_time');
    this.$last_post_status = this.shadowRoot.querySelector('.last_post_status');
    this.$chatHistory = JSON.parse(localStorage.getItem('chats')) || [];

    this.$one_chat.addEventListener('click', this.openChat.bind(this));
  }

  openChat() {
    this.$head.headOfChatList.style.display = 'none';
    this.$head.headOfPrivateChat.style.display = 'flex';
    this.$chat_list.style.display = 'none';
    this.$message.setAttribute('id', this.$one_chat.id);
    this.$message.style.display = 'flex';
  }

  get message() {
    return this.$last_message.innerText;
  }

  set message(mess) {
    this.$last_message.innerText = mess;
  }

  get time() {
    return this.$last_post_time.innerText;
  }

  set time(time) {
    this.$last_post_time.innerText = time;
  }

  get status() {
    return this.$last_post_status;
  }

  set status(display) {
    this.$last_post_status = display;
  }

  static get observedAttributes() {
    return ['id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'id' && oldValue !== newValue) {
      this.$one_chat.id = newValue;
    }
  }
}

customElements.define('create-chat', CreateChat);
