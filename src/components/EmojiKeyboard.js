import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Emoji.module.css'

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

function Emoji(props) {
    const {SendSmile} = props.SendSmile
    const emojis = []
    for (let i = 0; i < emojiKeys.length; i += 1) {
        const key = emojiKeys[i]
        emojis.push(<div 
                        className={`${styles.emoji} ${styles[key]}`} 
                        key={key}
                        role = "button"
                        aria-label="butt"
                        tabIndex={0}
                        onClick={() => SendSmile(key)}
                        onKeyDown={() => SendSmile(key)}
                    />)
    }
    return (
        <>
            {props.open &&
                <div className={styles.emojis} >
                    {emojis}
                </div>}
        </>
    )
}

Emoji.propTypes = {
    SendSmile: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
}

export default Emoji