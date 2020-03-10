import React from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar.js'
import { ReactComponent as Status } from '../assets/buttons/status.svg'
import styles from '../styles/Chat.module.css'
import { Link } from 'react-router-dom'

function Chat (props) {
    return(
        <div className={styles.box}>
            <Link to={`/chat/${props.id}`} className={styles.Link}>
            <div 
              role='button' 
              className={styles.Chat} 
              id={props.id}
              tabIndex={props.id}>
                <Avatar />
                <NameAndMess lastMessage={props.lastMessage}/>
                <TimeAndStat lastTime={props.lastTime} lastmessage={props.lastMessage}/>
            </div>
            </Link>
            <hr />
        </div>
    )
}

function NameAndMess (props) {
    return(
        <div className={styles.NameAndMess}>
            <div className={styles.UserName}>Имя собеседника</div>
            <div className={styles.LastMess}>{props.lastMessage}</div>
        </div>
    )
}

function TimeAndStat (props) {
    return(
        <div className={styles.TimeAndStat}>
            <div className={styles.Time}>{props.lastTime}</div>
            {props.lastTime !== '' && <Status className={styles.Stat}/>}
        </div>
    )
}

Chat.propTypes = {
    lastMessage: PropTypes.string,
    lastTime: PropTypes.string,
    id: PropTypes.number,
}

Chat.defaultProps = {
    lastMessage: null,
    lastTime: null,
    id: null,
}

TimeAndStat.propTypes = {
    lastTime: PropTypes.string,
}

TimeAndStat.defaultProps = {
    lastTime: null,
}

NameAndMess.propTypes = {
    lastMessage: PropTypes.string,
}

NameAndMess.defaultProps = {
    lastMessage: null,
}

export default Chat