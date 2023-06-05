import React, { createContext, useState, Dispatch, SetStateAction } from 'react'

export type APIEndPoints = {
  login: string
}

export interface APIEndPointsContextInterface {
  apiEndPoints: APIEndPoints
  setAPIEndPoints: Dispatch<SetStateAction<APIEndPoints>>
}

const defaultState: APIEndPointsContextInterface = {
  apiEndPoints: {
    login: '/mock/login.json'
  },
  // @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setAPIEndPoints: (apiEndPoints) => {}
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const APIEndPointsContext = createContext<APIEndPointsContextInterface>(defaultState)

type APIEndPointsProviderProps = {
  children: React.ReactNode
}

export default function APIEndPointsProvider({ children }: APIEndPointsProviderProps) {
  const [apiEndPoints, setAPIEndPoints] = useState<APIEndPoints>({
    login: '/mock/login.json'
  })
  return (
      <APIEndPointsContext.Provider value={{ apiEndPoints, setAPIEndPoints }}>
        {children}
      </APIEndPointsContext.Provider>
  )
}
