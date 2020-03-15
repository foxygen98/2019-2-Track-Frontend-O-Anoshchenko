import React from 'react'
import { ReactComponent as AvatarSvg } from '../assets/buttons/avatar.svg'
import styles from '../styles/Chat.module.css'

function Avatar() {
    return(
        <AvatarSvg className={styles.Avatar} />
    )
}

export default Avatar