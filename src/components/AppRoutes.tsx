import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import BoxList from '../pages/BoxList'
import Boxe from '../pages/Boxe'
import Items from '../pages/Items'
import Item from '../pages/Item'
import UserInfo from '../pages/UserInfo'

// eslint-disable-next-line @typescript-eslint/naming-convention
const AppRoutes = ({
  LoginFunc,
  onUserInfoSubmit,
}: {
  LoginFunc: () => void
  onUserInfoSubmit: () => void
}) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login Login={LoginFunc} />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/boxes" element={<BoxList />} />
      <Route path="/box" element={<Boxe />} />
      <Route path="/items" element={<Items />} />
      <Route path="/item" element={<Item />} />
      <Route
        path="/userinfo"
        element={<UserInfo onUserInfoSubmit={onUserInfoSubmit} />}
      />
    </Routes>
  )
}

export default AppRoutes
