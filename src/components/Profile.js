import React from 'react'
import { ReactComponent as EditPhoto } from '../assets/buttons/editphoto.svg'
import styles from '../styles/Profile.module.css'

function Profile () {

    return (
        <div className={styles.Profile}>
            <EditPhoto className={styles.Photo}/>
            <form className={styles.Form}>
                <div className={styles.Text}>Full Name</div>
                <input className={styles.Name} maxLength={25}/>
            </form>
            <form className={styles.Form}>
                <div className={styles.Text}>Username</div>
                <input className={styles.Name} maxLength={25} />
            </form>
            <form className={styles.Form}>
                <div className={styles.Text}>Bio</div>
                <textarea className={styles.Bio}/>
            </form>
        </div>
    )

}

export default Profile