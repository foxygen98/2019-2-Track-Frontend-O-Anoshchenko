import React from 'react'
import { ReactComponent as EditPhotoSvg } from '../assets/buttons/editphoto.svg'
import styles from '../styles/Profile.module.css'

function Profile () {

    return (
        <div className={styles.Profile}>
            <EditPhoto />
            <form className={styles.Form}>
                <div className={styles.Text}>Full Name</div>
                <Input />
            </form>
            <form className={styles.Form}>
                <div className={styles.Text}>Username</div>
                <Input />
            </form>
            <form className={styles.Form}>
                <div className={styles.Text}>Bio</div>
                <InputBio />
            </form>
        </div>
    )

}

export function EditPhoto() {
    return(
        <EditPhotoSvg className={styles.Photo}/>
    )
}

export function Input() {
    return(
        <input className={styles.Name} maxLength={25}/>
    )
}

export function InputBio() {
    return(
        <textarea className={styles.Bio}/>
    )
}

export default Profile