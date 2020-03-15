import React from 'react'
import renderer from 'react-test-renderer'
import { NameAndStat, Title, TitleOfProfile, MenuButton, SearchButton, ReturnButton, CheckMark } from '../Header.js'

it('name and status render correctly', () => {
    const nameAndStat = renderer.create(<NameAndStat />).toJSON()
    expect(nameAndStat).toMatchSnapshot()
})

it('title renders correctly', () => {
    const title = renderer.create(<Title />).toJSON()
    expect(title).toMatchSnapshot()
})

it('title of profile renders correctly', () => {
    const titleOfProfile = renderer.create(<TitleOfProfile />).toJSON()
    expect(titleOfProfile).toMatchSnapshot()
})

it('MenuButton renders correctly', () => {
    const menuButton = renderer.create(<MenuButton />).toJSON()
    expect(menuButton).toMatchSnapshot()
})

it('SearchButton renders correctly', () => {
    const searchButton = renderer.create(<SearchButton />).toJSON()
    expect(searchButton).toMatchSnapshot()
})

it('ReturnButton renders correctly', () => {
    const returnButton = renderer.create(<ReturnButton />).toJSON()
    expect(returnButton).toMatchSnapshot()
})

it('CheckMark renders correctly', () => {
    const checkMark = renderer.create(<CheckMark />).toJSON()
    expect(checkMark).toMatchSnapshot()
})
