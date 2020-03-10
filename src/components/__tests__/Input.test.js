import React from 'react'
import renderer from 'react-test-renderer'
import { Picture } from '../Input.js'

it('picture renders correctly', () => {
    const picture = renderer.create(<Picture />).toJSON()
    expect(picture).toMatchSnapshot()
})