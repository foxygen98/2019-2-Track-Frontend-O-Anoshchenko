import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Input.module.css'
import { ReactComponent as Attachment } from '../assets/buttons/attachment.svg'
import { ReactComponent as Location } from '../assets/buttons/location.svg'
import { ReactComponent as Micro } from '../assets/buttons/micro.svg'
import { ReactComponent as PictureSvg } from '../assets/buttons/picture.svg'
import { ReactComponent as EmojiKey } from '../assets/emoji/smile.svg'
import Emoji from './EmojiKeyboard'

function Input(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [emojisIsOpen, setemojislIsOpen] = useState(false)

    function openAttachMenu() {
        setModalIsOpen(true)
    }

    function closeAttachMenu() {
        setModalIsOpen(false)
    }

    function getLocation() {
        props.getLocation()
        closeAttachMenu()
    }

    function addImage(event, files = event.target.files) {
        props.addImage(event, files)
        closeAttachMenu()
    }

    function EmojiKeyboard() {
        if (emojisIsOpen) {
            setemojislIsOpen(false)
        } 
        else {
            setemojislIsOpen(true)
        }
    }

    return (
        <>
            <form onSubmit={props.handleSubmit} className={styles.Form}>
                <input
                    id="message_input"
                    className={styles.Input}
                    type="text"
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.handleChange}
                />
                <EmojiKey className={styles.Button} onClick={EmojiKeyboard}/>
                <Attachment className={styles.Button} onClick={openAttachMenu} />
            </form>
            <Emoji open={emojisIsOpen} SendSmile={props.SendSmile}/>
            {modalIsOpen &&
                <div className={styles.modalwrapper}>
                    <div id="menu" className={styles.addAttach}>
                        <Location id="get_location" className={styles.Attachment} onClick={getLocation} />
                        <Micro className={styles.Attachment} onClick={props.startRecord} id="rec" />
                        <Micro className={styles.stopRec} id="stopRec" onClick={closeAttachMenu} />
                        <label htmlFor="image">
                            <Picture />
                            <input
                            id="image"
                            type="file"
                            multiple
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={addImage}
                            />
                        </label>
                    </div>
                    <div aria-label="butt" className={styles.overlay} role="button" tabIndex={0} onClick={closeAttachMenu} onKeyDown={closeAttachMenu} />
                </div>}
        </>
    )
}

export function Picture() {
    return(
        <PictureSvg className={styles.Attachment} />
    )
}

Input.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    getLocation: PropTypes.func.isRequired,
    addImage: PropTypes.func.isRequired,
    startRecord: PropTypes.func.isRequired,
    SendSmile: PropTypes.func.isRequired,
}

export default Input