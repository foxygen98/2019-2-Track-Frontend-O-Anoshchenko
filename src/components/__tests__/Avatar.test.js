import React from 'react'
import renderer from 'react-test-renderer'
import Avatar from '../Avatar.js'

it('avatar renders correctly', () => {
    const avatar = renderer.create(<Avatar />).toJSON()
    expect(avatar).toMatchSnapshot()
})