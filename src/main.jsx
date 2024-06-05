import React from 'react'
import App from './App.jsx'

import ReactDOM from "react-dom/client"

// react redux
import {Provider} from "react-redux"

// redux store 
import store from './store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
