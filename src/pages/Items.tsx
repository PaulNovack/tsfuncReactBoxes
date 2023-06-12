import React, { useContext } from 'react'
import { ItemIfc, UserContext } from '../context/UserContext'
import Item from '../components/Item'
import { BrowserView, MobileView } from 'react-device-detect'

function Items() {
  const { user } = useContext(UserContext)
  console.log('User in Boxes: ', user)
  return (
    <div className="app">
      <h1>Items</h1>
      <MobileView>
        {user.BoxArr && user.BoxArr[0].itemArr ? (
          user.BoxArr[0].itemArr.map((item: ItemIfc) => <Item item={item} />)
        ) : (
          <></>
        )}
      </MobileView>
      <BrowserView>
        {user.BoxArr && user.BoxArr[0].itemArr ? (
          user.BoxArr[0].itemArr.map((item: ItemIfc) => <Item item={item} />)
        ) : (
          <></>
        )}
      </BrowserView>
    </div>
  )
}

export default Items
