import React, { useContext } from 'react'
import { ItemIfc, UserContext } from '../context/UserContext'
import Item from '../components/Item'
import { BrowserView, MobileView } from 'react-device-detect'
import { useSearchParams } from 'react-router-dom'

function Items() {
  const { user } = useContext(UserContext)
  console.log('User in Items: ', user)
  const [searchParams] = useSearchParams()
  const box_id: number = !isNaN(parseInt(searchParams.get('box_id') as string))
    ? parseInt(searchParams.get('box_id') as string)
    : 0
  console.log('Box_id: ', box_id)
  return (
    <div className="app">
      <MobileView>
        <strong>List of Items in Box:</strong>{' '}
        {user.BoxArr && user.BoxArr[box_id].name ? user.BoxArr[box_id].name : <></>}
        {user.BoxArr && user.BoxArr[box_id].itemArr ? (
          user.BoxArr[box_id].itemArr.map((item: ItemIfc) => (
            <Item item={item} />
          ))
        ) : (
          <></>
        )}
      </MobileView>
      <BrowserView>
        <strong>List of Items in Box:</strong>{' '}
        {user.BoxArr && user.BoxArr[box_id].name ? user.BoxArr[box_id].name : <></>}
        {user.BoxArr && user.BoxArr[box_id].itemArr ? (
          user.BoxArr[box_id].itemArr.map((item: ItemIfc) => <Item item={item} />)
        ) : (
          <></>
        )}
      </BrowserView>
    </div>
  )
}

export default Items
