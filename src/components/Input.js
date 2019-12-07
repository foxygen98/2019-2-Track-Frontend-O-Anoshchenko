import React from 'react'
import styles from '../styles/Input.module.css'
import PropTypes from 'prop-types'
import { ReactComponent as Attachment } from '../assets/buttons/attachment.svg'

function Input (props) {
    return(
        <form onSubmit={props.handleSubmit} className={styles.Form}>
            <input 
              className={styles.Input}
              type="text"
              value={props.value}
              placeholder={props.placeholder}
              onChange={props.handleChange}
            />
            <Attachment className={styles.Button}/>
        </form>
    )
}

Input.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default Input