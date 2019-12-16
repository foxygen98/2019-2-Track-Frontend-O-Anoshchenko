import React, { useState } from 'react'
import { ReactComponent as Pen } from '../assets/buttons/pen.svg'
import styles from '../styles/ChatList.module.css'
import Chat from './Chat.js'

function ChatList (props) {
    let num = 0
    const [chats, setChats] = useState(recover())

    function recover () {
        const chatHistory = JSON.parse(localStorage.getItem('chats'))
        const array = []
        if (chatHistory !== null) {
            for (; num < chatHistory.length; num += 1) {
                let message = ''
                let time = ''
                const newChat = chatHistory[num].messages
                if (newChat.length > 0) {
                    message = newChat[newChat.length - 1].Content
                    time = newChat[newChat.length - 1].messageTime
                }
                array.push(
                    <Chat
                      key={num}
                      id={num}
                      lastMessage={message}
                      lastTime={time}
                    />,
                )
            }
        }
        return array
    }

    function handleCreateChat () {
        const newChat = {
            id: num,
            messages: [],
        }
        setChats(
            chats.concat(
                <Chat
                  key={num}
                  id={num}
                  latMessage=''
                  lastTime=''
                />,
            )
        )
        addChatInLocal(newChat)
        num += 1
    }

    function addChatInLocal(newChat) {
        let chatHistory = JSON.parse(localStorage.getItem('chats'))
        if (chatHistory === null) {
            chatHistory = []
        }
        chatHistory.push(newChat)
        localStorage.setItem('chats', JSON.stringify(chatHistory))
    }
    
    return (
        <React.Fragment>
            <div className={styles.ChatSpace}>{chats}</div>
            <Pen className={styles.Pen} onClick={handleCreateChat} />
        </React.Fragment>
    )
}

export default ChatList
