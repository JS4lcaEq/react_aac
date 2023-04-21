import React from 'react'
import ReactDOM from 'react-dom/client'

import routers from './router'

import './index.css'

import { store } from './app/store'
import { Provider } from 'react-redux'

import {
  RouterProvider
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  </React.StrictMode>
)