import React, { createContext, useContext, useState } from 'react';
import { IUser } from '../types/IUser';

interface AppContextType {
    selectedUser: IUser | null;
    setSelectedUser: (user: IUser | null) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{children: React.ReactNode}> =
    ({children}) => {
        const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

        return (
        <AppContext.Provider value={{selectedUser, setSelectedUser}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};