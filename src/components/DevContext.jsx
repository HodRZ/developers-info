import React, { useReducer, createContext, useContext } from 'react';
import { devReducer } from './Developer';

const DevContext = createContext({})

export const useDevContext = () => useContext(DevContext)

const DevContextProvider = ({ children }) => {
    const [devState, dispatch] = useReducer(devReducer, [])


    return (
        <DevContext.Provider
            value={{ devState, dispatch }}
        >
            {children}
        </DevContext.Provider>
    );
};

export default DevContextProvider;