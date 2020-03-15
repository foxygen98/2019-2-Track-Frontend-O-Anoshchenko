import React from 'react'
import { action } from '@storybook/addon-actions'
import { ReturnButton, SearchButton, MenuButton, CheckMark } from '../components/Header.js'

export default {
  title: 'Buttons',
  component: ReturnButton,
}

export const Return = () => <ReturnButton onClick={action('clicked')} />

export const Search = () => <SearchButton onClick={action('clicked')} />

export const Menu = () => <MenuButton onClick={action('clicked')} />

export const Check = () => <CheckMark onClick={action('clicked')} />
