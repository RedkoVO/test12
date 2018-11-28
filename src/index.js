import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'

import App from './components/App'

import registerServiceWorker from './registerServiceWorker'

import './index.css'
import './stream.css'
import './skins.css'

const initApp = () => {
  const history = createBrowserHistory()

  ReactDOM.render(
    <App history={history} />,
    document.getElementById('root')
  )
  registerServiceWorker()
}

initApp()