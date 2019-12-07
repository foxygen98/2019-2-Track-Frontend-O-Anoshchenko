import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Messages.module.css'

function Message (props) {
    return(
        <div className={styles.result}>
            <div className={styles.message}>{props.messageText}</div>
            <div className={styles.time}>{props.messageTime}</div>
        </div>
        )
}

Message.propTypes = {
    messageText: PropTypes.string.isRequired,
    messageTime: PropTypes.string.isRequired,
}

export default Message