import React from 'react'
import styles from '../styles/Header.module.css'
import PropTypes from 'prop-types'
import { ReactComponent as MenuButtonSvg } from '../assets/buttons/menu.svg'
import { ReactComponent as SearchButtonSvg } from '../assets/buttons/search.svg'
import { ReactComponent as Settings } from '../assets/buttons/settings.svg'
import { ReactComponent as ReturnButtonSvg } from '../assets/buttons/return_back.svg'
import { ReactComponent as CheckMarkSvg } from '../assets/buttons/checkmark.svg'
import Avatar from './Avatar.js'
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
            <MenuButton />
            <Title />
            <SearchButton />
        </div>
    )
}

function HeadOfPersonalChat() {
    return (
        <div className={styles.Header}>
            <Link to={'/'}>
                <ReturnButton />
            </Link>
            <Avatar />
            <NameAndStat />
            <SearchButton />
            <Settings />
        </div>
    )
}

function HeadOfProfile() {
    return (
        <div className={styles.Header}>
            <Link to={'/'}>
                <ReturnButton />
            </Link>
            <TitleOfProfile />
            <CheckMark />
        </div>
    )
}

export function NameAndStat() {
    return (
        <div className={styles.NameAndStat}>
            <div className={styles.UserName}>Имя собеседника</div>
            <div className={styles.Stat}>Был(а) в сети...</div>
        </div>
    )
}

export function Title() {
    return(
        <div className={styles.Name}>Messenger</div>
    )
}

export function TitleOfProfile() {
    return (
        <div className={styles.Name}>Edit Profile</div>
    )
}

export function MenuButton() {
    return (
        <MenuButtonSvg className={styles.MenuButton} />
    )
}

export function SearchButton() {
    return (
        <SearchButtonSvg className={styles.SearchButton} />
    )
}

export function ReturnButton() {
    return (
        <ReturnButtonSvg className={styles.ReturnButton} />
    )
}

export function CheckMark() {
    return (
        <CheckMarkSvg className={styles.CheckMark} />
    )
}

Header.propTypes = {
    header: PropTypes.string.isRequired,
}

export default Header