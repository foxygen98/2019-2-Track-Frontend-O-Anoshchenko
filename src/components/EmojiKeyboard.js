import React from 'react'
import styles from '../styles/Emoji.module.css'

function Emoji({open, SendSmile}) {
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
    let emojis = []
    for (let i = 0; i < emojiKeys.length; i++) {
        const key = emojiKeys[i]
        emojis.push(<div 
                        className={`${styles.emoji} ${styles[key]}`} 
                        key={key}
                        onClick={() => SendSmile(key)}
                    />)
    }
    return (
        <React.Fragment>
            {open &&
                <div className={styles.emojis} >
                    {emojis}
                </div>
            }
        </React.Fragment>
    )
}

export default Emoji