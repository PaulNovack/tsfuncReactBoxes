import {
  createContext,
  useState
} from 'react'

export type UserIfc = {
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
  Boxes?: BoxesIfc[] | null
}

export interface BoxesIfc {
  id: number
  name?: string | null
  description: string | null
  picture?: string | null
  weight?: number | null
  created_at?: string | null
  items: ItemsIfc[] | null
}

export interface ItemsIfc {
  id: number
  name?: string | null
  description?: string | null
  quantity?: number | null
  picture?: string | null
  created_at?: string | null
  setUser: React.Dispatch<React.SetStateAction<UserIfc>>
}

export interface UserContextType {
  user: UserIfc
  setUser: (newUser: UserIfc) => void
}

type UserProviderProps = {
  children?: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const UserContext = createContext<UserContextType>({
  user: { name: '' },
  setUser: () => {},
})

export const UserContextProvider: React.FC = ({
  children,
}: UserProviderProps) => {
  const [user, setUser] = useState({})

  const updateUser = (newUser: UserIfc) => {
    setUser(newUser)
  }

  const contextValue: UserContextType = {
    user,
    setUser: updateUser,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
