import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Messages.module.css'

function Message(props) {
    return (
        <div>
            <div className={styles.result}>
                <Content Content={props.Content} type={props.type} />
                <div className={styles.time}>{props.messageTime}</div>
            </div>
        </div>
    )
}

function Content(props) {
    let box = <div />
    if (props.type === 'text') {
        box = <div className={styles.message}>{props.Content}</div>
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