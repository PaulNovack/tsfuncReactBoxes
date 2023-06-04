import React, { createContext, useContext } from 'react'
import {User,blankUser} from '../interfaces/User'

export const UserContext: React.Context<User> = createContext(blankUser)

export const UserProvider: React.FC<Props> = ({ children }) => {
  return (
      <UserContext.Provider value={blankUser}>{children}</UserContext.Provider>
  )
}
