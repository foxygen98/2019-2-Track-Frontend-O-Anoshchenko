import React, { useState } from 'react'
import styles from '../styles/Input.module.css'
import PropTypes from 'prop-types'
import { ReactComponent as Attachment } from '../assets/buttons/attachment.svg'
import { ReactComponent as Location } from '../assets/buttons/location.svg'
import { ReactComponent as Micro } from '../assets/buttons/micro.svg'
import { ReactComponent as Picture } from '../assets/buttons/picture.svg'

function Input(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function openAttachMenu() {
        setModalIsOpen(true)
    }

    return (
        <React.Fragment>
            <form onSubmit={props.handleSubmit} className={styles.Form}>
                <input
                    className={styles.Input}
                    type="text"
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.handleChange}
                />
                <Attachment className={styles.Button} onClick={openAttachMenu} />
            </form>
            {modalIsOpen &&
                <div id="menu" className={styles.addAttach}>
                    <Location className={styles.Attachment} onClick={props.getLocation} />
                    <Micro className={styles.Attachment} onClick={props.startRecord} />
                    <label htmlFor="image">
                        <Picture className={styles.Attachment} />
                    </label>
                    <input
                        id="image"
                        type="file"
                        multiple
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={props.addImage}
                    />
                </div>
            }
        </React.Fragment>
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
}

export default Input