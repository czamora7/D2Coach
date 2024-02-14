import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

namespace accountGlobals {
  export var accountToken: String;
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
