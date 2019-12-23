import React from 'react'
import styles from '../styles/ManageCities.module.css'
import { ReactComponent as Return } from '../assets/return_back.svg'
import { ReactComponent as Pen } from '../assets/pen.svg'

function ManageCities(props) {
    return (
        <div className={styles.Space}>
            <div className={styles.Header}>
                <Return className={styles.Return} />
                <div className={styles.Name}>Manage cities</div>
            </div>
            <div>
                <div className={styles.list}>
                </div>
            </div>
            <Pen className={styles.Pen} />
        </div>
    )
}

export default ManageCities