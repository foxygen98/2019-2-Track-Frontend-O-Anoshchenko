import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'
import { ReactComponent as MenuButtonSvg } from '../assets/buttons/menu.svg'
import { ReactComponent as SearchButtonSvg } from '../assets/buttons/search.svg'
import { ReactComponent as Settings } from '../assets/buttons/settings.svg'
import { ReactComponent as ReturnButtonSvg } from '../assets/buttons/return_back.svg'
import { ReactComponent as CheckMarkSvg } from '../assets/buttons/checkmark.svg'
import Avatar from './Avatar.js'
import Boundary from './Boundary'

function Header(props) {
    return (
        <Boundary>
            {props.header === 'chatlist' && <HeadOfChatList />}
            {props.header === 'messagelist' && <HeadOfPersonalChat />}
            {props.header === 'editprofile' && <HeadOfProfile />}
        </Boundary>
    )
}

function HeadOfChatList() {
    return (
        <Boundary>
            <div className={styles.Header}>
                <MenuButton />
                <Title />
                <SearchButton />
            </div>
        </Boundary>
    )
}

function HeadOfPersonalChat() {
    return (
        <Boundary>
            <div className={styles.Header}>
                <Link to="/">
                    <ReturnButton />
                </Link>
                <Avatar />
                <NameAndStat />
                <SearchButton />
                <Settings />
            </div>
        </Boundary>
    )
}

function HeadOfProfile() {
    return (
        <Boundary>
            <div className={styles.Header}>
                <Link to="/">
                    <ReturnButton />
                </Link>
                <TitleOfProfile />
                <CheckMark />
            </div>
        </Boundary>
    )
}

export function NameAndStat() {
    return (
        <Boundary>
            <div className={styles.NameAndStat}>
                <div className={styles.UserName}>Имя собеседника</div>
                <div className={styles.Stat}>Был(а) в сети...</div>
            </div>
        </Boundary>
    )
}

export function Title() {
    return (
        <Boundary>
            <div className={styles.Name}>Messenger</div>
        </Boundary>
    )
}

export function TitleOfProfile() {
    return (
        <Boundary>
            <div className={styles.Name}>Edit Profile</div>
        </Boundary>
    )
}

export function MenuButton() {
    return (
        <Boundary>
            <MenuButtonSvg className={styles.MenuButton} />
        </Boundary>
    )
}

export function SearchButton() {
    return (
        <Boundary>
            <SearchButtonSvg className={styles.SearchButton} />
        </Boundary>
    )
}

export function ReturnButton() {
    return (
        <Boundary>
            <ReturnButtonSvg className={styles.ReturnButton} />
        </Boundary>
    )
}

export function CheckMark() {
    return (
        <Boundary>
            <CheckMarkSvg className={styles.CheckMark} />
        </Boundary>
    )
}

Header.propTypes = {
    header: PropTypes.string.isRequired,
}

export default Header