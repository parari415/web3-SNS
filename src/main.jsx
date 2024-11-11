import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LeftBar from './compornents/LeftBar.jsx'
import RightBar from './compornents/RightBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <LeftBar/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <RightBar/>
    </>
)
