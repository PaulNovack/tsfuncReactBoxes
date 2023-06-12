import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Boxes from '../pages/Boxes'
import Items from '../pages/Items'
import Item from './Item'
import UserInfo from '../pages/UserInfo'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/boxes" element={<Boxes />} />
      {/* <Route path="/box" element={<Boxe />} /> */}
      <Route path="/items" element={<Items />} />
      <Route path="/userinfo" element={<UserInfo />} />
    </Routes>
  )
}
