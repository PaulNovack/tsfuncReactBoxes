import React, { useContext, useState } from 'react'
import { UserContext, UserIfc, BoxesIfc, defaultBox } from '../context/UserContext'

function BoxList() {
  const { user, setUser } = useContext(UserContext)
  const [localUser, setLocalUser] = useState<UserIfc>({})
  const [boxesArr, setBoxesArr] = useState<BoxesIfc[]>([defaultBox])
  const defaultBoxArr : BoxesIfc[] = [defaultBox]
  if(user.BoxesArr != null){
    setBoxesArr(user.BoxesArr)
  }
  console.log(boxesArr)
  return (
    <div className="app">
      <h1>Boxes</h1>
    </div>
  )
}

export default BoxList
