import React from 'react'
import { render } from 'react-dom'
import Messenger from './components/Messenger.js'
import './styles/globalStyles.css'
import * as serviceWorker from './utils/serviceWorker'

render(
    <Messenger />,
  document.getElementById('root'),
)
serviceWorker.unregister()
