import React from 'react'
import renderer from 'react-test-renderer'
import { EditPhoto, Input, InputBio } from '../Profile.js'

it('photo renders correctly', () => {
    const photo = renderer.create(<EditPhoto />).toJSON()
    expect(photo).toMatchSnapshot()
})

it('input renders correctly', () => {
    const input = renderer.create(<Input />).toJSON()
    expect(input).toMatchSnapshot()
})

it('input biography renders correctly', () => {
    const inputBio = renderer.create(<InputBio />).toJSON()
    expect(inputBio).toMatchSnapshot()
})