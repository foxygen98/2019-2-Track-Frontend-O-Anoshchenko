import React, { useState } from 'react'
import Input from './Input.js'
import Message from './Messages.js'
import styles from '../styles/Messages.module.css'
import { useParams } from 'react-router-dom'

function MessageList() {
    const { chatId } = useParams()
    const [messages, setMessages] = useState(recover())
    const [input, setInput] = useState('')

    function recover() {
        const chatHistory = JSON.parse(localStorage.getItem('chats'))
        const chat = chatHistory[chatId]
        const mess = chat.messages
        const array = []
        for (let i = 0; i < mess.length; i += 1) {
            const newMess = mess[i]
            array.push(
                <Message
                    Content={newMess.Content}
                    messageTime={newMess.messageTime}
                    id={newMess.id}
                    key={newMess.key}
                    type='text'
                />,
            )
        }
        return array
    }

    function handleTextChange(event) {
        setInput(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (input === '') {
            return
        }
        addMessage(input)
        setInput('')
    }

    function addMessage(message) {
        const num = messages.length
        const newMess = {
            Content: message,
            messageTime: getTime(),
            id: num,
            key: num,
        }
        setMessages(
            messages.concat(
                <Message
                    Content={newMess.Content}
                    messageTime={newMess.messageTime}
                    id={newMess.id}
                    key={newMess.key}
                    type='text'
                />
            )
        )
        addMessInLocal(newMess)
    }

    function addMessInLocal(newMess) {
        const chatHistory = JSON.parse(localStorage.getItem('chats')) || []
        if (chatHistory[chatId].messages === '') {
            chatHistory[chatId].messages = []
        }
        chatHistory[chatId].messages.push(newMess)
        localStorage.setItem('chats', JSON.stringify(chatHistory))
    }

    function reverse(array) {
        const reverseArray = []
        const len = array.length
        for (let i = 0; i < len; i += 1) {
            reverseArray[i] = array[len - i - 1]
        }
        return reverseArray
    }

    function getLocation() {
        if (navigator.geolocation) {
            const geoOptions = {
                enableHighAccuracy: true,
                timeout: 27000,
                maximumAge: 30000,
            }
            navigator.geolocation.getCurrentPosition(success, errorFunc, geoOptions)
        } else {
            alert('Geolocation is not supported for this Browser/OS version yet!')
        }
    }

    function success(pos) {
        const crd = pos.coords
        addMessage(`https://www.openstreetmap.org/#map=18/${crd.latitude}/${crd.longitude}`)
    }

    function errorFunc(err) {
        console.log(`ERROR(${err.code}): ${err.message}`)
    }

    function getTime() {
        const time = new Date()
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
        return `${a}${hours}:${b}${min}`
    }

    function addPictureOrAudio(src, str) {
        const num = messages.length
        setMessages(
            messages.concat(
                <Message
                    Content={src}
                    messageTime={getTime()}
                    id={num}
                    key={`PA${num}`}
                    type={str}
                />
            )
        )
    }

    function addImage(event, files = event.target.files) {
        if (files.length) {
            addPictureOrAudio(window.URL.createObjectURL(files[0]), 'img')
            const data = new FormData()
            data.append('image', files[0])
            fetch('https://tt-front.now.sh/upload', {
                method: 'POST',
                body: data,
            })
        }
    }

    function stopFunc(event) {
        event.stopPropagation()
        event.preventDefault()
        const ev = event.dataTransfer
        ev.dropEffect = 'copy'
    }

    function drop(event) {
        stopFunc(event)
        const {files} = event.dataTransfer
        addImage(event, files)
    }

    function startRecord() {
        function recordAudio(stream) {
            const rec = document.getElementById('rec')
            const stopRec = document.getElementById('stopRec')
            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorder.start()
            rec.style.display = 'none'
            stopRec.style.display = 'flex'
            let chunks = []

			mediaRecorder.addEventListener('dataavailable', (event) => {
				chunks.push(event.data)
			})

			mediaRecorder.addEventListener('stop', () => {
				const blob = new Blob(chunks, { type: mediaRecorder.mimeType })
				chunks = []
                const audioURL = URL.createObjectURL(blob)
                addPictureOrAudio(audioURL, 'audio')
				const data = new FormData()
                data.append('audio', blob)
                fetch('https://tt-front.now.sh/upload', {
					method: 'POST',
					body: data,
				})
            })
            
            stopRec.addEventListener('click', () => {
                mediaRecorder.stop()
                stopRec.style.display = 'none'
                rec.style.display = 'flex'
            },
            { once: true },
            )
        }

        async function getMedia() {
			let stream = null

			try {
				const constraints = { audio: true }
				stream = await navigator.mediaDevices.getUserMedia(constraints)
				recordAudio(stream)
			} catch (error) {
				console.log(error.message)
			}
        }

        getMedia()
    }

    return (
        <div className={styles.Chat}>
            <div 
              className={styles.ChatSpace} 
              onDragEnter={stopFunc}
              onDragOver={stopFunc} 
              onDrop={drop}
            >
                {reverse(messages)}
            </div>
            <Input
                handleSubmit={handleSubmit}
                value={input}
                getLocation={getLocation}
                addImage={addImage}
                startRecord={startRecord}
                placeholder="Сообщение"
                handleChange={handleTextChange}
            />
        </div>
    )

}

export default MessageList