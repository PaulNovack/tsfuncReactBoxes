import { createContext, useState, Dispatch, SetStateAction } from 'react'

export type User = {
  name: string
  email: string
}

export interface UserContextInterface {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

const defaultState = {
  user: {
    name: '',
    email: '',
  },
  setUser: (user: User) => {},
} as UserContextInterface
//export const UserContext = createContext<Partial<UserContextInterface>>({})

type UserProviderProps = {
  children: React.ReactNode
}
export const UserContext = createContext<UserContextInterface>(defaultState)

function UserProvider() {
  //  const [uesr,setUser] = userState<User>()
  //  return (
  //      <UserContext.Provider value ={{ user,setUser}}>
  //  {childrem}
  //  </UserContext.Provider>
  //  )
}
