import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './HooksApp'

import './index.css'
// import { CounterApp } from './assets/01-useState/CounterApp'
import { CounterWithCustomHook } from './assets/01-useState/CounterWithCustomHook'
import { SimpleForm } from './assets/02-useEffect/SimpleForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SimpleForm/>
  // </React.StrictMode>,
)
