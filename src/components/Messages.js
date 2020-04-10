import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Messages.module.css'
import emoji from '../styles/Emoji.module.css'

const emojiKeys = [
    'confounded',
    'cool',
    'cry',
    'demon',
    'grinning_face',
    'heart-eyes',
    'kiss',
    'norm',
    'rip',
    'sad',
    'sleep',
    'smiling_eyes',
    'stars',
    'sweat',
    'tongue',
    'upside-down',
    'wtf',
    'XD',
]

function Message(props) {
    return (
        <div>
            <div id='message' className={styles.result}>
                <Content Content={props.Content} type={props.type} />
                <div className={styles.time}>{props.messageTime}</div>
            </div>
        </div>
    )
}

function Content(props) {
    let box = <div />
    if (props.type === 'text') {
        let newContent = []
        const regExp = /:.*?:/
        let content = props.Content
        if (!regExp.test(content)) {
            newContent = props.Content
        }
        else {
            while (regExp.test(content)) {
                let emojiname = content.match(regExp)
                emojiname = emojiname[0].slice(1, -1)
                const ind = content.indexOf(emojiname)
                content = content.replace(regExp, ' ')
                const before = content.slice(0, ind)
                content = content.slice(ind)
                newContent.push(before)
                if (emojiKeys.includes(emojiname)) {
                    newContent.push(<div key={emojiname} className={`${emoji.emoji} ${emoji[emojiname]}`} />)
                }
                else {
                    newContent.push(`:${emojiname}:`)
                }
            }
            newContent.push(content)
        }
        box = <div id='message_text' className={styles.message}>
            {newContent}
        </div>
    } else if (props.type === 'img') {
        box =
            <img
                className={styles.image}
                src={props.Content}
                alt={props.Content}
                onLoad={() => {
                    window.URL.revokeObjectURL(props.Content)
                }}
            />
    } else if (props.type === 'audio') {
        box =
            <audio
                controls
                src={props.Content}
                className={styles.Audio}
                onLoad={() => {
                    window.URL.revokeObjectURL(props.Content)
                }}>
                <track default kind="captions"
                    srcLang="ru"
                    src={props.Content} />
            </audio>
    }
    return box
}

Message.propTypes = {
    Content: PropTypes.string.isRequired,
    messageTime: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

Content.propTypes = {
    type: PropTypes.string.isRequired,
    Content: PropTypes.string.isRequired,
}

export default Message