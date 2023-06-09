import { createContext, useState, Dispatch, SetStateAction } from 'react'

export interface UserIfc {
  name: string
  email: string
  age: number
  toAddress: string
  toCity: string
  toState: string
  toZipCode: string
  fromAddress: string
  fromCity: string
  fromState: string
  fromZipCode: string
  cellPhone: string
  accessToken: string | null
  completed: number
  BoxArr: BoxIfc[] | null
}
export interface ItemIfc {
  id: number
  name: string
  description: string
  quantity: number
  picture: string
  created_at: string
}
export const defaultItem: ItemIfc = {
  id: 0,
  name: '',
  description: '',
  quantity: 0,
  picture: '',
  created_at: '',
}

export interface BoxIfc {
  id: number
  name: string
  description: string
  picture: string
  weight: number
  created_at: string
  itemArr: ItemIfc[]
}
export const defaultBox: BoxIfc = {
  id: 0,
  name: '',
  description: '',
  picture: '',
  weight: 0,
  created_at: '',
  itemArr: [defaultItem],
}

export interface UserContextInterface {
  user: UserIfc
  setUser: Dispatch<SetStateAction<UserIfc>>
}
export const defaultUser: UserIfc = {
  name: '',
  email: '',
  age: 0,
  toAddress: '',
  toCity: '',
  toState: '',
  toZipCode: '',
  fromAddress: '',
  fromCity: '',
  fromState: '',
  fromZipCode: '',
  cellPhone: '',
  accessToken: '',
  completed: 0,
  BoxArr: [defaultBox],
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
export const UserContext = createContext(defaultUserState)

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserIfc>(defaultUser)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
