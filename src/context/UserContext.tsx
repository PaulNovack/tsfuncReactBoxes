import React, { createContext, useState } from 'react'

export function MustImplement() {
  throw new Error('Please implement this function')
}

export type UserIfc = {
  name?: string | undefined;
  email?: string | undefined;
  age?: number | undefined;
  toAddress?: string | undefined;
  toCity?: string | undefined;
  toState?: string | undefined;
  toZipCode?: string | undefined;
  fromAddress?: string | undefined;
  fromCity?: string | undefined;
  fromState?: string | undefined;
  fromZipCode?: string | undefined;
  cellPhone?: string | undefined;
  accessToken?: string | undefined;
  completed?: number | undefined;
  Boxes?: BoxesIfc[] | undefined;
}

export interface BoxesIfc {
  id: number;
  name?: string | null;
  description: string | null;
  picture?: string | null;
  weight?: number | null;
  created_at?: string | null;
  items: ItemsIfc[] | null;
}

export interface ItemsIfc {
  id: number;
  name?: string | null;
  description?: string | null;
  quantity?: number | null;
  picture?: string | null;
  created_at?: string | null;
  setUser: React.Dispatch<React.SetStateAction<UserIfc>>;
}

export type UserContextState = {
  user: UserIfc;
  setUser: React.Dispatch<React.SetStateAction<UserIfc>>;
}

export const initialUserContextState: UserContextState = {
  user: {},
  setUser: () => {},
}

const UserContext = createContext<UserContextState>(initialUserContextState)

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserIfc>({})

  return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
  )
}

export default UserContext
