const template = document.createElement('template');
template.innerHTML = `
    <style>
    .top {
        display: flex;
        padding: 2vh;
        height: 8vh;
        width: 100%;
        background-color: #8E24AA;
        align-items:center;
    }
    
    .name_and_stat {
        color: white;
        position: relative;
        display: flex;
        flex-direction: column;
        flex-grow: 10;
        align-content: center;
        justify-content: center;
    }
    
    .name {
        font-size: 4vh;
        position: relative;
    }

    .stat{
        font-size: 1.8vh;
        position: relative;
    }
    
    .settings {
        display: flex;
    }
    
    .search {
        display: flex;
        flex-grow: 1;
    }
    
    .return_back {
        display: flex;
        flex-grow: 2;
    }

    .menu {
        display: flex;
        flex-grow: 2;
    }

    .name_mess {
        color: white;
        flex-grow: 5;
        font-size: 6vh;
    }

    .head_of_private_chat {
        display: none;
    }

    .menu {
        fill: white;
    }

    .menu:active {
        fill: rgba(0, 0, 0, 0.5);
    }

    .return_back {
        fill: white;
    }

    .return_back:active {
        fill: rgba(0, 0, 0, 0.5);
    }

    .settings {
        fill: white;
    }

    .settings:active {
        fill: rgba(0, 0, 0, 0.5);
    }

    .search .st0{
            fill: white;
    }

    .search:active .st0{
            fill: rgba(0, 0, 0, 0.5);
    }

    </style>

    <div class="head_of_chat_list">
        <div class="top">
         <div class="menu">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="7vh" height="7vh"
        viewBox="0 0 24 24"><path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path></svg>
        </div>
        <div class="name_mess">Messenger</div>
        <div class="search">
            <svg id="Layer_1" style="enable-background:new 0 0 64 64;" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9vh" height="9vh">
                <style type="text/css">
            </style>
            <g>
                <g id="Icon-Search" transform="translate(30.000000, 230.000000)"><path class="st0" d="M-2.3-182.9c-10.7,0-19.5-8.7-19.5-19.5c0-10.7,8.7-19.5,19.5-19.5s19.5,8.7,19.5,19.5     C17.1-191.6,8.4-182.9-2.3-182.9L-2.3-182.9z M-2.3-219c-9.2,0-16.7,7.5-16.7,16.7c0,9.2,7.5,16.7,16.7,16.7s16.7-7.5,16.7-16.7     C14.3-211.5,6.8-219-2.3-219L-2.3-219z" id="Fill-1"/><polyline class="st0" id="Fill-2" points="23.7,-174.2 10.1,-187.7 12.3,-189.9 25.8,-176.3 23.7,-174.2    "/>
            </g>
        </g>
    </svg>
    </div>
    </div>
    </div>
    <div class="head_of_private_chat">
    <div class="top">
    <div class="return_back">
            <svg version="1.1" id="Layer_1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="8vh" height="8vh"
            viewBox="0 0 96 96" enable-background="new 0 0 96 96" xml:space="preserve" transform="rotate(90)">
       <switch>
           <foreignObject requiredExtensions="&ns_ai;" x="0" y="0" width="1" height="1">
               <i:pgfRef  xlink:href="#adobe_illustrator_pgf">
               </i:pgfRef>
           </foreignObject>
           <g i:extraneous="self">
               <path d="M44,12v62.344L22.828,53.172c-1.562-1.562-4.094-1.562-5.656,0c-1.562,1.562-1.562,4.095,0,5.657l28,28
                   c1.562,1.562,4.095,1.562,5.656,0l28-28C79.609,58.048,80,57.024,80,56c0-1.023-0.391-2.047-1.172-2.828
                   c-1.562-1.562-4.095-1.562-5.656,0L52,74.344V12c0-2.208-1.791-4-4-4S44,9.791,44,12z"/>
           </g>
        </svg>
    </div>
    <div>
        <svg id="Layer_1" style="enable-background:new 0 0 64 64;" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10vh" height="10vh">
            <style type="text/css">
                .st0{fill: white;}
            </style>
            <g>
                <g id="Icon-User" transform="translate(278.000000, 278.000000)">
                    <path class="st0" d="M-246-222.1c-13.2,0-23.9-10.7-23.9-23.9s10.7-23.9,23.9-23.9c13.2,0,23.9,10.7,23.9,23.9     S-232.8-222.1-246-222.1L-246-222.1z M-246-267.3c-11.7,0-21.3,9.6-21.3,21.3c0,11.7,9.6,21.3,21.3,21.3     c11.7,0,21.3-9.6,21.3-21.3C-224.7-257.7-234.3-267.3-246-267.3L-246-267.3z" id="Fill-57"/>
                    <path class="st0" d="M-260-228.7l-2.4-1.1c0.7-1.7,2.9-2.6,5.4-3.7c2.4-1.1,5.4-2.4,5.4-4v-2.2     c-0.9-0.7-2.3-2.3-2.5-4.6c-0.7-0.7-1.8-2-1.8-3.6c0-1,0.4-1.8,0.7-2.3c-0.2-1.1-0.6-3.3-0.6-5c0-5.5,3.8-9.1,9.8-9.1     c1.7,0,3.8,0.5,4.9,1.7c2.7,0.5,4.9,3.7,4.9,7.4c0,2.4-0.4,4.4-0.7,5.3c0.3,0.5,0.6,1.2,0.6,2c0,1.9-0.9,3.1-1.8,3.7     c-0.2,2.3-1.5,3.8-2.3,4.5v2.2c0,1.4,2.5,2.3,4.8,3.2c2.7,1,5.5,2,6.4,4.3l-2.5,0.9c-0.4-1.2-2.8-2-4.8-2.8     c-3.1-1.1-6.6-2.4-6.6-5.6v-3.6l0.6-0.4c0.1,0,1.8-1.2,1.8-3.5v-0.9l0.8-0.3c0.1-0.1,0.9-0.5,0.9-1.7c0-0.4-0.3-0.8-0.4-0.9     l-0.5-0.6l0.2-0.7c0,0,0.7-2.2,0.7-5.2c0-2.5-1.4-4.8-2.9-4.8h-0.8l-0.4-0.7c-0.3-0.5-1.5-1-3.1-1c-4.5,0-7.2,2.4-7.2,6.5     c0,1.9,0.7,5,0.7,5l0.2,0.7l-0.5,0.5c0,0-0.4,0.5-0.4,1c0,0.7,0.9,1.6,1.3,2l0.5,0.4l0,0.7c0,2.2,1.9,3.4,1.9,3.4l0.6,0.4l0,3.6     c0,3.3-3.7,5-7,6.4C-257.5-230.4-259.6-229.4-260-228.7" id="Fill-58"/>
                </g>
            </g>
        </svg>
    </div>
    <div class="name_and_stat">
        <div class="name">Имя собеседника</div>
        <div class="stat">Был(а) 2 часа назад</div>
    </div>
    <div class="search">
            <svg id="Layer_1" style="enable-background:new 0 0 64 64;" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9vh" height="9vh">
                <style type="text/css">
                .st0{fill: white;}
            </style>
            <g>
                <g id="Icon-Search" transform="translate(30.000000, 230.000000)"><path class="st0" d="M-2.3-182.9c-10.7,0-19.5-8.7-19.5-19.5c0-10.7,8.7-19.5,19.5-19.5s19.5,8.7,19.5,19.5     C17.1-191.6,8.4-182.9-2.3-182.9L-2.3-182.9z M-2.3-219c-9.2,0-16.7,7.5-16.7,16.7c0,9.2,7.5,16.7,16.7,16.7s16.7-7.5,16.7-16.7     C14.3-211.5,6.8-219-2.3-219L-2.3-219z" id="Fill-1"/><polyline class="st0" id="Fill-2" points="23.7,-174.2 10.1,-187.7 12.3,-189.9 25.8,-176.3 23.7,-174.2    "/>
            </g>
        </g>
    </svg>
    </div>
    <div class="settings">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="8vh" height="8vh" viewBox="0 0 408 408" style="enable-background:new 0 0 408 408;" xml:space="preserve">
       <g>
           <g id="more-vert">
               <path d="M204,102c28.05,0,51-22.95,51-51S232.05,0,204,0s-51,22.95-51,51S175.95,102,204,102z M204,153c-28.05,0-51,22.95-51,51
                   s22.95,51,51,51s51-22.95,51-51S232.05,153,204,153z M204,306c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51
                   S232.05,306,204,306z"/>
           </g>
           </svg>
    </div>
    </div>
    </div>
`;

class MesHead extends HTMLElement {
  constructor() {
    super();
    this.$message = document.querySelector('message-form');
    this.$chat_list = document.querySelector('chat-list');
    this.shadowRoot = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$head_of_chat_list = this.shadowRoot.querySelector('.head_of_chat_list');
    this.$head_of_private_chat = this.shadowRoot.querySelector('.head_of_private_chat');
    this.$return_back = this.shadowRoot.querySelector('.return_back');
    this.$return_back.addEventListener('click', this.userClickOnReturnBack.bind(this));
  }

  get headOfChatList() {
    return this.$head_of_chat_list;
  }

  set headOfChatList(display) {
    this.$head_of_chat_list = display;
  }

  get headOfPrivateChat() {
    return this.$head_of_private_chat;
  }

  set headOfPrivateChat(display) {
    this.$head_of_private_chat = display;
  }

  userClickOnReturnBack() {
    this.$head_of_chat_list.style.display = 'flex';
    this.$head_of_private_chat.style.display = 'none';
    this.$message.style.display = 'none';
    this.$chat_list.style.display = 'flex';
    this.$chat_list.clearHistory();
    this.$chat_list.recover();
  }
}

customElements.define('mes-head', MesHead);
