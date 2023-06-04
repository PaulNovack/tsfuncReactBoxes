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

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  setUser: (user: User) => {},
} as UserContextInterface
//export const UserContext = createContext<Partial<UserContextInterface>>({})

type UserProviderProps = {
  children: React.ReactNode
}
export const UserContext = createContext(defaultState)

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
  })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
