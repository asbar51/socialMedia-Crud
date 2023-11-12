import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// *** redux **

import { Provider } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './UserReducer.jsx';

const store = configureStore({
  reducer:{
    posts: UserReducer
  }
})

// *** redux **

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
)
