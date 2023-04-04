import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './HooksApp'

import './index.css'
import { Memorize } from './assets/06-memos/Memorize'
import { MemoHook } from './assets/06-memos/MemoHook'
import { CallbackHook } from './assets/06-memos/CallbackHook'
import { Padre } from './assets/07-tarea-memo/Padre'
// import { CounterApp } from './assets/01-useState/CounterApp'
// import { CounterWithCustomHook } from './assets/01-useState/CounterWithCustomHook'
// import { SimpleForm } from './assets/02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './assets/02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './assets/03-examples/MultipleCustomHooks'
// import { FocusScreen } from './assets/04-useRef/FocusScreen'
// import { Layout } from './assets/05-useLayoutEffect/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Padre/>
  // </React.StrictMode>,
)
