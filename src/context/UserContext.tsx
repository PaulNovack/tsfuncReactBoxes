import { createContext, useState, Dispatch, SetStateAction } from 'react'

export interface User  {
  name?: string
  email?: string
  age?: number
  toAddress?: string
  toCity?: string
  toState?: string
  toZipCode?: string
  fromAddress?: string
  fromCity?: string
  fromState?: string
  fromZipCode?: string
  cellPhone?: string
  accessToken?: string | null
  completed?: number
  Boxes?: Boxes[] | null
}

export interface Boxes {
  id: number
  name?: string | null
  description: string | null
  picture?: string | null
  weight?: number | null
  created_at?: string | null
  items: Items[] | null
}

export interface Items {
  id: number
  name?: string | null
  description?: string | null
  quantity?: number | null
  picture?: string | null
  created_at?: string | null
}

export interface UserContextInterface {
  user: User
  setUser: Dispatch<SetStateAction<User>>
}

export const defaultUserState = {
  user: {},

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  setUser: (user: User) => {},
} as UserContextInterface
//export const UserContext = createContext<Partial<UserContextInterface>>({})

type UserProviderProps = {
  children: React.ReactNode
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UserContext = createContext(defaultUserState)

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({})
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
