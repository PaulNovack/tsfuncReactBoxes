import { createContext, useState, Dispatch, SetStateAction } from 'react'

export type User = {
  name: string
  email: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  accessToken?: string | null
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

const defaultState = {
  user: {
    name: '',
    email: '',
    accessToken: '',
  },

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  setUser: (user: User) => {},
} as UserContextInterface
//export const UserContext = createContext<Partial<UserContextInterface>>({})

type UserProviderProps = {
  children: React.ReactNode
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UserContext = createContext(defaultState)

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    accessToken: null,
  })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
