import React from 'react'
import { ReactComponent as MenuButton } from '../assets/menu.svg'
import { ReactComponent as Settings } from '../assets/settings.svg'
import styles from '../styles/Main.module.css'

function Main() {
    return (
        <div>
            <div className={styles.Header}>
                <MenuButton className={styles.MenuButton} />
                <div className={styles.Name}>City</div>
                <Settings className={styles.Settings} />
            </div>
            <div className={styles.Space}>
                <div className={styles.list}>
                </div>
            </div>
        </div>
    )
}

export default Main