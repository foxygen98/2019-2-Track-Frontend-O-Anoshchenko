import React from 'react'
import { render } from 'react-dom'
import * as Sentry from '@sentry/browser'
import Messenger from './components/Messenger.js'
import './styles/globalStyles.css'
import * as serviceWorker from './utils/serviceWorker'
import Boundary from './components/Boundary'

Sentry.init({dsn: "https://575da00e50984400b59c726869392597@o390428.ingest.sentry.io/5233539"})

render(
  <Boundary>
    <Messenger />
  </Boundary>,
  document.getElementById('root'),
)
serviceWorker.unregister()
