import React from 'react'
import { ReactComponent as EditPhotoSvg } from '../assets/buttons/editphoto.svg'
import styles from '../styles/Profile.module.css'
import Boundary from './Boundary'

function Profile() {

    return (
        <Boundary>
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
        </Boundary>
    )

}

export function EditPhoto() {
    return (
        <Boundary>
            <EditPhotoSvg className={styles.Photo} />
        </Boundary>
    )
}

export function Input() {
    return (
        <Boundary>
            <input className={styles.Name} maxLength={25} />
        </Boundary>
    )
}

export function InputBio() {
    return (
        <Boundary>
            <textarea className={styles.Bio} />
        </Boundary>
    )
}

export default Profile