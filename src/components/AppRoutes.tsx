import React, { Dispatch, SetStateAction } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Boxes from '../pages/Boxes'
import Boxe from '../pages/Boxe'
import Items from '../pages/Items'
import Item from '../pages/Item'
import UserInfo from '../pages/UserInfo'
import { UserIfc } from '../context/UserContext'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AppRoutes({
  appUser,
  setAppUser,
  ParentUpdate,
}: {
  appUser: UserIfc
  setAppUser: Dispatch<SetStateAction<UserIfc>>
  ParentUpdate: (user: UserIfc) => void
}) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login ParentUpdate={ParentUpdate} />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/boxes" element={<Boxes />} />
      <Route path="/box" element={<Boxe />} />
      <Route path="/items" element={<Items />} />
      <Route path="/item" element={<Item />} />
      <Route path="/userinfo" element={<UserInfo />} />
    </Routes>
  )
}
