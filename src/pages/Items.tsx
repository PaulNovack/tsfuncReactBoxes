import React, { useContext } from 'react'
import { ItemIfc, UserContext } from '../context/UserContext'
import Item from '../components/Item'

function Items() {
  const { user } = useContext(UserContext)
  console.log('User in Boxes: ', user)
  return (
    <div className="app">
      <h1>Boxes</h1>
      <ul>
        {user.BoxArr && user.BoxArr[0].itemArr ? (
          user.BoxArr[0].itemArr.map((item: ItemIfc) => <Item item={item} />)
        ) : (
          <></>
        )}
      </ul>
    </div>
  )
}

export default Items
