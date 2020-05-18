import React from 'react'
import { ReactComponent as AvatarSvg } from '../assets/buttons/avatar.svg'
import styles from '../styles/Chat.module.css'
import Boundary from './Boundary'

function Avatar() {
    return (
        <Boundary>
            <AvatarSvg className={styles.Avatar} />
        </Boundary>
    )
}

export default Avatar