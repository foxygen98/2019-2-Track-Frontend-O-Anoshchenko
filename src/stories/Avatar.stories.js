import React from 'react'
import Avatar from '../components/Avatar.js'
import { EditPhoto } from '../components/Profile.js'

export default {
  title: 'Default photo',
  component: EditPhoto,
}

export const EditAvatar = () => <EditPhoto />

export const DefaultAvatar = () => <Avatar />
