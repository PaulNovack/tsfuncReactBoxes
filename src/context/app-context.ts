import React from 'react';

export interface AppContextIfc {
  name: string
}

const AppContext = React.createContext<AppContextIfc>({
  name: ''
});

export default AppContext;
