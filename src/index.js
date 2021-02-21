import React from 'react'
import ReactDOM from 'react-dom'
import { StyleProvider } from 'components/Organisms'

import './index.css'
import App from 'pages'

const myApp = Component =>
  ReactDOM.render(
    <React.StrictMode>
      <StyleProvider>
        <Component />
      </StyleProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )

myApp(App)

