import React from 'react'
import styles from '../styles/Header.module.css'
import PropTypes from 'prop-types'
import { ReactComponent as MenuButton } from '../assets/buttons/menu.svg'
import { ReactComponent as SearchButton } from '../assets/buttons/search.svg'
import { ReactComponent as Avatar } from '../assets/buttons/avatar.svg'
import { ReactComponent as Settings } from '../assets/buttons/settings.svg'
import { ReactComponent as ReturnButton } from '../assets/buttons/return_back.svg'
import { ReactComponent as CheckMark } from '../assets/buttons/checkmark.svg'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <React.Fragment>
            {props.header === 'chatlist' && <HeadOfChatList />}
            {props.header === 'messagelist' && <HeadOfPersonalChat />}
            {props.header === 'editprofile' && <HeadOfProfile />}
        </React.Fragment>
    )
}

function HeadOfChatList() {
    return (
        <div className={styles.Header}>
            <MenuButton className={styles.MenuButton} />
            <div className={styles.Name}>Messenger</div>
            <SearchButton className={styles.SearchButton} />
        </div>
    )
}

function HeadOfPersonalChat() {
    return (
        <div className={styles.Header}>
            <Link to={'/'}>
                <ReturnButton className={styles.ReturnButton} />
            </Link>
            <Avatar className={styles.Avatar} />
            <NameAndStat />
            <SearchButton className={styles.SearchButton} />
            <Settings />
        </div>
    )
}

function NameAndStat() {
    return (
        <div className={styles.NameAndStat}>
            <div className={styles.UserName}>Имя собеседника</div>
            <div className={styles.Stat}>Был(а) в сети...</div>
        </div>
    )
}

function HeadOfProfile() {
    return (
        <div className={styles.Header}>
            <Link to={'/'}>
                <ReturnButton className={styles.ReturnButton} />
            </Link>
            <div className={styles.Name}>Edit Profile</div>
            <CheckMark className={styles.CheckMark} />
        </div>
    )
}

Header.propTypes = {
    header: PropTypes.string.isRequired,
}

export default Header