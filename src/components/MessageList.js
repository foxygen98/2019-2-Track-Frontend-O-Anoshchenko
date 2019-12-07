import React, { useState } from 'react'
import Input from './Input.js'
import Message from './Messages.js'
import PropTypes from 'prop-types'
import styles from '../styles/Messages.module.css'

function MessageList ({ chatId }) {
    const [messages, setMessages] = useState(recover())
    const [input, setInput] = useState('')

    function recover() {
        const chatHistory = JSON.parse(localStorage.getItem('chats'))
        const chat = chatHistory[chatId]
        const mess = chat.messages
        const array = []
        for (let i = 0; i < chat.messages.length; i += 1){
            const newMess = mess[i]
            array.push(
                <Message 
                  messageText={newMess.messageText}
                  messageTime={newMess.messageTime}
                  id={newMess.id}
                  key={newMess.key}
                />,
            )
        }
        return array
    }

    function handleTextChange (event) {
        setInput(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        if (input === '') {
            return
        }
        const num = messages.length
        let time = new Date()
        const min = time.getMinutes()
        const hours = time.getHours()
        let a = ''
        let b = ''
        if (min < 10) {
            b = '0'
        }
        if (hours < 10) {
            a = '0'
        }
        time = `${a}${hours}:${b}${min}`
        const newMess = {
            messageText: input,
            messageTime: time,
            id: num,
            key: num,
        }
        setMessages(
            messages.concat(
                <Message
                  messageText={newMess.messageText}
                  messageTime={newMess.messageTime}
                  id={newMess.id}
                  key={newMess.key} 
                />
            )
        )
        addMessInLocal(newMess)
        setInput('')
    }

    function addMessInLocal(newMess) {
        const chatHistory = JSON.parse(localStorage.getItem('chats')) || []
        if (chatHistory[chatId].messages === '') {
            chatHistory[chatId].messages = []
        }
        chatHistory[chatId].messages.push(newMess)
        localStorage.setItem('chats', JSON.stringify(chatHistory))
    }

    return (
        <div className={styles.Chat}>
            <div className={styles.ChatSpace}>
                {messages}
            </div>
            <Input
            handleSubmit={handleSubmit}
            value={input}
            placeholder="Сообщение"
            handleChange={handleTextChange}
            />
        </div>
    )

}

MessageList.propTypes = {
    chatId: PropTypes.string.isRequired,
}

export default MessageList