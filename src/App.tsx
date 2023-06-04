import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Boxes from './pages/Boxes'
import Box from './pages/Box'
import Items from './pages/Items'
import Item from './pages/Item'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/login'}>Login</Link>
            </li>
            <li>
              <Link to={'/logout'}>Logout</Link>
            </li>
            <li>
              <Link to={'/boxes'}>Boxes</Link>
            </li>
            <li>
              <Link to={'/box'}>Box</Link>
            </li>
            <li>
              <Link to={'/items'}>Items</Link>
            </li>
            <li>
              <Link to={'/item'}>Item</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/boxes" element={<Boxes />} />
          <Route path="/box" element={<Box />} />
          <Route path="/items" element={<Items />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
