import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './Utils/Routing/Routing'

import './index.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routing />
      <Footer />
    </Router>
  </React.StrictMode>
)
