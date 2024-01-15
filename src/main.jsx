import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'
// import { unstable_HistoryRouter } from 'react-router-dom'
// import { MemoryRouter } from 'react-router-dom'
// import StaticRouter from 'react-router-dom/server' // depricated in React6
// import NativeRouter from 'react-router-native'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <HashRouter>
      <App />
    </HashRouter> */}
    {/* <MemoryRouter>
      <App />
    </MemoryRouter> */}
    {/* <StaticRouter location="/books">
      <App />
    </StaticRouter> */}

  </React.StrictMode>,
)
