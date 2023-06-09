import { createContext, useState, Dispatch, SetStateAction } from 'react'

export interface UserIfc {
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
  BoxesArr?: BoxesIfc[] | null
}

export interface BoxesIfc {
  id: number
  name?: string | null
  description: string | null
  picture?: string | null
  weight?: number | null
  created_at?: string | null
  itemsArr: ItemsIfc[] | null
}

export interface ItemsIfc {
  id: number
  name?: string | null
  description?: string | null
  quantity?: number | null
  picture?: string | null
  created_at?: string | null
}

export interface UserContextInterface {
  user: UserIfc
  setUser: Dispatch<SetStateAction<UserIfc>>
}

export const defaultUserState = {
  user: {},

  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  setUser: (user: UserIfc) => {},
} as UserContextInterface
//export const UserContext = createContext<Partial<UserContextInterface>>({})

type UserProviderProps = {
  children: React.ReactNode
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export const UserContext = createContext<UserContextInterface>(defaultUserState)

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserIfc>({})
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
